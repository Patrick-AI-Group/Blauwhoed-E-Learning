import { customAlphabet } from "nanoid";
export const createCertificateCode = customAlphabet("ABCDEFGHJKLMNPQRSTUVWXYZ23456789", 12);
