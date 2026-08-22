import "server-only";
import { headers } from "next/headers";
import { db } from "@/db";
import { auditLog } from "@/db/schema";
export async function writeAudit(input: { actorId: string; organizationId: string; action: string; entity: string; entityId?: string; payload?: Record<string, unknown> }) { const requestHeaders = await headers(); await db.insert(auditLog).values({ actorId: input.actorId, organizationId: input.organizationId, actie: input.action, entiteit: input.entity, entiteitId: input.entityId, ip: requestHeaders.get("x-forwarded-for")?.split(",")[0], userAgent: requestHeaders.get("user-agent"), payload: input.payload ?? {} }); }
