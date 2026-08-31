import "server-only";
import { auth, currentUser } from "@clerk/nextjs/server";
import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { organizations, users } from "@/db/schema";

export async function getCurrentUser() {
  const { userId } = await auth();
  if (!userId) return null;
  const existing = await db.query.users.findFirst({ where: eq(users.clerkUserId, userId) });
  if (existing) return existing;

  // Eerste login: maak automatisch een profiel aan, anders bestaat de
  // ingelogde medewerker niet in de database en lopen lessen en voortgang vast.
  const profile = await currentUser();
  if (!profile) return null;
  const [org] = await db.select().from(organizations).orderBy(asc(organizations.createdAt)).limit(1);
  if (!org) return null;
  const naam = [profile.firstName, profile.lastName].filter(Boolean).join(" ") || profile.username || "Medewerker";
  const email = profile.primaryEmailAddress?.emailAddress ?? profile.emailAddresses[0]?.emailAddress ?? `${userId}@onbekend.invalid`;
  await db.insert(users).values({ organizationId: org.id, clerkUserId: userId, naam, email, afdeling: "Nog niet ingedeeld" }).onConflictDoNothing({ target: users.clerkUserId });
  return db.query.users.findFirst({ where: eq(users.clerkUserId, userId) });
}
