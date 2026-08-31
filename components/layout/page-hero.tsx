import Image from "next/image";
import type { ReactNode } from "react";
import type { brandImages } from "@/lib/brand/images";

type BrandImage = (typeof brandImages)[keyof typeof brandImages];

/** Paginakop met foto uit de Blauwhoed-beeldbank, navy overlay en optionele actie/statistiek. */
export function PageHero({ eyebrow, title, description, image, children, aside, compact = false }: { eyebrow?: ReactNode; title: ReactNode; description?: ReactNode; image: BrandImage; children?: ReactNode; aside?: ReactNode; compact?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-bh-blue-900 text-white">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,.94)_0%,rgba(11,37,69,.82)_45%,rgba(11,37,69,.35)_100%)]" aria-hidden />
      <div className={`container-page relative grid items-end gap-10 ${compact ? "py-14 md:py-16" : "py-16 md:py-24"} ${aside ? "lg:grid-cols-[1.3fr_.7fr]" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow !text-bh-blue-600 brightness-125">{eyebrow}</p>}
          <h1 className={`mt-3 ${compact ? "text-4xl md:text-5xl" : "text-4xl md:text-6xl"}`}>{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {aside}
      </div>
    </section>
  );
}
