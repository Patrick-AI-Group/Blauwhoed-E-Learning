import { PlatformHeader } from "@/components/layout/platform-header";
import Link from "next/link";
export default function PlatformLayout({ children }: { children: React.ReactNode }) { return <div className="min-h-screen bg-white"><PlatformHeader/>{children}<footer className="mt-20 border-t py-7 text-sm text-bh-grey-600"><div className="container-page flex justify-between"><span>© Blauwhoed</span><div className="flex gap-5"><Link href="/beleid">Privacy</Link><Link href="/beleid">Disclaimer</Link></div></div></footer></div>; }
