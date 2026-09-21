"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { Send, ShieldAlert } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export function PracticeChat({ lessonId, initialPrompt }: { lessonId?: string; initialPrompt?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState(initialPrompt ?? "");
  const [error, setError] = useState("");

  async function send(event: FormEvent) {
    event.preventDefault();
    const value = message.trim();
    if (!value) return;
    const history = messages;
    setMessage("");
    setError("");
    setMessages((items) => [...items, { role: "user", content: value }, { role: "assistant", content: "" }]);
    const response = await fetch("/api/ai/practice", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: value, history, lessonId }) });
    if (!response.ok) {
      const body = await response.json();
      setMessages((items) => items.slice(0, -1));
      setError(body.error);
      return;
    }
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    if (!reader) return;
    while (true) {
      const { done, value: chunk } = await reader.read();
      if (done) break;
      const text = decoder.decode(chunk);
      setMessages((items) => items.map((item, index) => (index === items.length - 1 ? { ...item, content: item.content + text } : item)));
    }
  }

  return (
    <div className="flex h-full min-h-[650px] flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto p-6" aria-live="polite">
        {messages.length === 0 && (
          <div className="rounded-xl bg-bh-blue-50 p-5 text-sm text-bh-blue-900">
            Dit is een vrije oefenomgeving: typ een prompt zoals je dat bij een echte, goedgekeurde AI-tool zou doen. Er wordt niets beoordeeld en niets bewaard na dit gesprek — gebruik dus geen echte vertrouwelijke gegevens of persoonsgegevens, oefen met geanonimiseerde of fictieve voorbeelden.
          </div>
        )}
        {messages.map((item, index) => (
          <div key={index} className={`max-w-[88%] rounded-xl p-4 text-sm ${item.role === "user" ? "ml-auto bg-bh-blue-900 text-white" : "border bg-white shadow-sm"}`}>
            {item.content || "Claude denkt…"}
          </div>
        ))}
        {error && (
          <div className="rounded-xl border border-bh-red bg-red-50 p-4 text-sm text-bh-red">
            <p className="flex gap-2">
              <ShieldAlert size={17} />
              {error}
            </p>
            <Link href="/beleid" className="mt-2 inline-block underline">
              Lees de AVG-microles
            </Link>
          </div>
        )}
      </div>
      <form onSubmit={send} className="border-t p-4">
        <label htmlFor="practice-chat" className="sr-only">
          Bericht aan AI
        </label>
        <div className="flex gap-3">
          <textarea id="practice-chat" value={message} onChange={(event) => setMessage(event.target.value)} className="min-h-20 flex-1 resize-none card p-3" placeholder="Typ je prompt…" />
          <button className="btn btn-primary btn-sm h-12 self-end" aria-label="Verstuur prompt">
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
