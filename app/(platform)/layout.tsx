import { PlatformHeader } from "@/components/layout/platform-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bh-canvas">
      <PlatformHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
