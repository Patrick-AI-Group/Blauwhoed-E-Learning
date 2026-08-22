export type TrackGateInput = {
  niveau: number;
  previousTrackId: string | null;
  certificates: Array<{ trackId: string; revoked: boolean; expiresAt: Date }>;
  now?: Date;
};

export function canAccessTrack(input: TrackGateInput) {
  if (input.niveau === 1 || !input.previousTrackId) return true;
  const now = input.now ?? new Date();
  return input.certificates.some((certificate) =>
    certificate.trackId === input.previousTrackId && !certificate.revoked && certificate.expiresAt > now,
  );
}

export type CertificateGateInput = {
  modulesTotal: number;
  modulesCompleted: number;
  assignmentsTotal: number;
  assignmentsPassed: number;
  examPassed: boolean;
  securityScore: number | null;
};

export function meetsCertificateRequirements(input: CertificateGateInput) {
  return input.modulesTotal > 0 &&
    input.modulesCompleted === input.modulesTotal &&
    input.assignmentsPassed === input.assignmentsTotal &&
    input.examPassed &&
    input.securityScore === 100;
}
