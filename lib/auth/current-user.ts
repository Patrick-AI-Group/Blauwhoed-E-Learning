import "server-only";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function getCurrentUser() {
  const { userId } = await auth();
  if (!userId) return null;
  return db.query.users.findFirst({ where: eq(users.clerkUserId, userId) });
}
