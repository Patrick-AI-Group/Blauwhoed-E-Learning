"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ links, className = "" }: { links: ReadonlyArray<readonly [string, string]>; className?: string }) {
  const pathname = usePathname();
  return (
    <>
      {links.map(([label, href]) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${active ? "bg-bh-blue-50 text-bh-blue-700" : "text-bh-ink hover:bg-bh-sand hover:text-bh-blue-700"} ${className}`}>
            {label}
          </Link>
        );
      })}
    </>
  );
}
