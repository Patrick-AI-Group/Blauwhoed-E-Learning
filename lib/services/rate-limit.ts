import "server-only";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export async function checkAiRateLimit(userId: string, organizationId: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error("Rate limiting is niet geconfigureerd");
  const redis = new Redis({ url, token });
  const limiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(30, "1 m"), prefix: "academy:ai" });
  const [user, organization] = await Promise.all([limiter.limit(`user:${userId}`), limiter.limit(`org:${organizationId}`)]);
  if (!user.success || !organization.success) throw new Error("Je hebt tijdelijk te veel AI-verzoeken gedaan. Probeer het over een minuut opnieuw.");
}
