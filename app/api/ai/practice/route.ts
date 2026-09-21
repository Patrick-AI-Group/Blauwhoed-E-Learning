import Anthropic from "@anthropic-ai/sdk";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { aiInteractions, lessons } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { detectPii } from "@/lib/security/pii";
import { checkAiRateLimit } from "@/lib/services/rate-limit";

const bodySchema = z.object({
  message: z.string().trim().min(1).max(12_000),
  history: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().max(12_000) })).max(20).default([]),
  lessonId: z.string().uuid().optional(),
});

export async function POST(request: Request) {
  const started = Date.now();
  const parsed = bodySchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Ongeldige invoer" }, { status: 400 });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  const findings = detectPii(parsed.data.message);
  if (findings.length) {
    await db.insert(aiInteractions).values({ userId: user.id, organizationId: user.organizationId, context: "tutor", model: "niet-verzonden", duurMs: Date.now() - started, veiligheidsvlag: true, flagReden: findings.map((item) => item.kind).join(", ") });
    return NextResponse.json({ error: `Dit lijkt een ${findings[0].kind}. Die informatie mag niet naar een AI-tool. Anonimiseer de invoer en probeer opnieuw.`, microles: "/leren/fundament/veiligheid-i" }, { status: 422 });
  }
  await checkAiRateLimit(user.id, user.organizationId);
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Claude is niet geconfigureerd" }, { status: 503 });
  const lesson = parsed.data.lessonId ? await db.query.lessons.findFirst({ where: eq(lessons.id, parsed.data.lessonId) }) : null;
  const client = new Anthropic({ apiKey });
  const response = await client.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 1200,
    system: `Je bent de vrije oefenomgeving van Blauwhoed AI Academy: een goedgekeurde, zakelijke AI-tool waarmee cursisten prompten oefenen, zoals ze dat ook in Microsoft 365 Copilot zouden doen. Reageer gewoon behulpzaam op wat de cursist vraagt — schrijf, vat samen, herschrijf, structureer — precies zoals een echte AI-tool dat zou doen. Geef geen beoordeling of cijfer, dit is geen opdracht. Val bij een gevoelig of feitelijk onzeker verzoek niet stil, maar reageer zoals een taalmodel dat zou doen (inclusief de gebruikelijke beperkingen), zodat de cursist leert wat AI wel en niet goed doet.${lesson ? `\nDe cursist oefent bij de les "${lesson.titel}".` : ""}`,
    messages: [...parsed.data.history, { role: "user" as const, content: parsed.data.message }],
    stream: true,
  });
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of response) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        await db.insert(aiInteractions).values({ userId: user.id, organizationId: user.organizationId, context: "tutor", model: "claude-sonnet-4-5", duurMs: Date.now() - started });
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });
  return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
}
