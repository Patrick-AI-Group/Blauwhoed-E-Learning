import { describe, expect, it } from "vitest";
import { detectPii } from "@/lib/security/pii";
describe("PII detection", () => { it("detecteert e-mail, IBAN en adres", () => { const result = detectPii("Mail a@b.nl, IBAN NL91ABNA0417164300, adres 3011 AA 25"); expect(result.map((item) => item.kind)).toEqual(expect.arrayContaining(["e-mailadres", "IBAN", "postcode en huisnummer"])); }); it("laat geanonimiseerde projecttekst door", () => expect(detectPii("Project Delta telt 80 woningen.")).toEqual([])); });
