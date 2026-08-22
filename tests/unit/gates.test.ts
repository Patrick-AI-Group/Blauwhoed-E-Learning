import { describe, expect, it } from "vitest";
import { canAccessTrack, meetsCertificateRequirements } from "@/lib/progress/gates";

describe("track gates", () => {
  it("laat niveau 1 altijd toe", () => expect(canAccessTrack({ niveau: 1, previousTrackId: null, certificates: [] })).toBe(true));
  it("blokkeert zonder geldig vorig certificaat", () => expect(canAccessTrack({ niveau: 2, previousTrackId: "track-1", certificates: [] })).toBe(false));
  it("laat toe met geldig vorig certificaat", () => expect(canAccessTrack({ niveau: 2, previousTrackId: "track-1", certificates: [{ trackId: "track-1", revoked: false, expiresAt: new Date("2030-01-01") }], now: new Date("2029-01-01") })).toBe(true));
});

describe("certificate gates", () => {
  it("vereist alle onderdelen en 100% security", () => expect(meetsCertificateRequirements({ modulesTotal: 5, modulesCompleted: 5, assignmentsTotal: 8, assignmentsPassed: 8, examPassed: true, securityScore: 100 })).toBe(true));
  it("weigert 99% security", () => expect(meetsCertificateRequirements({ modulesTotal: 5, modulesCompleted: 5, assignmentsTotal: 8, assignmentsPassed: 8, examPassed: true, securityScore: 99 })).toBe(false));
});
