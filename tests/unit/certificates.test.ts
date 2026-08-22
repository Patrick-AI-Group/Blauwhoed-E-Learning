import { describe, expect, it } from "vitest";
import { createCertificateCode } from "@/lib/certificates/codes";
describe("certificate codes", () => { it("maakt niet-ambigue codes van twaalf tekens", () => { const code = createCertificateCode(); expect(code).toMatch(/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{12}$/); }); it("maakt unieke codes", () => expect(new Set(Array.from({ length: 100 }, createCertificateCode)).size).toBe(100)); });
