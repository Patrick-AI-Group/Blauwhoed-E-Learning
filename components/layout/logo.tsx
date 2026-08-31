import Image from "next/image";
import Link from "next/link";

export function Logo({ href = "/dashboard", variant = "dark", subtitle = "AI Academy" }: { href?: string; variant?: "dark" | "light"; subtitle?: string }) {
  return (
    <Link href={href} className="flex items-center gap-3" aria-label={`Blauwhoed ${subtitle}`}>
      <Image src="/brand/logo-blauwhoed.png" alt="Blauwhoed" width={141} height={15} priority className={variant === "light" ? "brightness-0 invert" : ""} />
      <span className={`hidden border-l pl-3 text-xs font-bold uppercase tracking-[0.14em] sm:inline ${variant === "light" ? "border-white/30 text-white/80" : "border-bh-grey-200 text-bh-blue-600"}`}>{subtitle}</span>
    </Link>
  );
}
