import "server-only";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export const roles = ["medewerker", "teamlead", "beoordelaar", "contentbeheerder", "admin"] as const;
export type AppRole = (typeof roles)[number];
const permissions: Record<AppRole, AppRole[]> = { medewerker: ["medewerker"], teamlead: ["medewerker", "teamlead"], beoordelaar: ["medewerker", "beoordelaar"], contentbeheerder: ["medewerker", "contentbeheerder"], admin: [...roles] };
export async function authorize(required: AppRole | AppRole[]) { const { userId, orgId } = await auth(); if (!userId) redirect("/"); const client = await clerkClient(); const user = await client.users.getUser(userId); const role = user.publicMetadata.role; if (typeof role !== "string" || !roles.includes(role as AppRole)) redirect("/dashboard?toegang=geweigerd"); const allowed = Array.isArray(required) ? required : [required]; if (!allowed.some((item) => permissions[role as AppRole].includes(item))) redirect("/dashboard?toegang=geweigerd"); return { userId, orgId, role: role as AppRole }; }
