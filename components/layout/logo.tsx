import Link from "next/link";
export function Logo() { return <Link href="/dashboard" className="flex items-baseline gap-3 text-bh-blue-900" aria-label="Blauwhoed AI Academy"><span className="text-lg font-medium tracking-[-0.03em]">BLAUWHOED</span><span className="hidden text-xs text-bh-grey-600 lg:inline">AI Academy</span></Link>; }
