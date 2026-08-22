export type PiiKind = "BSN" | "IBAN" | "e-mailadres" | "telefoonnummer" | "postcode en huisnummer" | "geboortedatum";
export type PiiFinding = { kind: PiiKind; match: string };

const patterns: Array<[PiiKind, RegExp]> = [
  ["IBAN", /\bNL\d{2}[A-Z]{4}\d{10}\b/gi],
  ["e-mailadres", /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi],
  ["telefoonnummer", /(?:\+31|0)[\s-]?(?:6[\s-]?\d{8}|\d{2}[\s-]?\d{7})\b/g],
  ["postcode en huisnummer", /\b\d{4}\s?[A-Z]{2}\s*,?\s*\d{1,5}[A-Z]?\b/gi],
  ["geboortedatum", /\b(?:0?[1-9]|[12]\d|3[01])[-/.](?:0?[1-9]|1[0-2])[-/.](?:19|20)\d{2}\b/g],
];

function validBsn(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 9 || /^0+$/.test(digits)) return false;
  return digits.split("").reduce((sum, digit, index) => sum + Number(digit) * (index === 8 ? -1 : 9 - index), 0) % 11 === 0;
}

export function detectPii(input: string): PiiFinding[] {
  const findings = patterns.flatMap(([kind, pattern]) => Array.from(input.matchAll(pattern), (match) => ({ kind, match: match[0] })));
  for (const match of input.matchAll(/\b\d{9}\b/g)) if (validBsn(match[0])) findings.push({ kind: "BSN", match: match[0] });
  return findings;
}

export function assertNoPii(input: string) {
  const [finding] = detectPii(input);
  if (finding) throw new Error(`Dit lijkt een ${finding.kind}. Die informatie mag niet naar een AI-tool. Anonimiseer de invoer en probeer opnieuw.`);
}
