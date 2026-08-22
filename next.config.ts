import type { NextConfig } from "next";
const nextConfig: NextConfig = { poweredByHeader: false, experimental: { serverActions: { bodySizeLimit: "8mb" } }, async headers() { return [{ source: "/(.*)", headers: [
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-eval' https://*.clerk.accounts.dev; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://*.clerk.accounts.dev https://*.neon.tech https://api.anthropic.com https://api.openai.com https://*.upstash.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, { key: "X-Frame-Options", value: "DENY" }, { key: "X-Content-Type-Options", value: "nosniff" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
] }]; } };
export default nextConfig;
