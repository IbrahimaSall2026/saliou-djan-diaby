import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

type ServicePageProps = {
  service: Service;
};

export default function ServicePage({ service }: ServicePageProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative isolate min-h-[min(760px,calc(100vh-5rem))] overflow-hidden border-b border-white/10 bg-zinc-950">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
          style={{ objectPosition: service.heroImagePosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/45" />
        <div className="relative mx-auto flex min-h-[min(760px,calc(100vh-5rem))] w-full max-w-7xl items-center px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32">
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {service.heroEyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 md:text-xl">
              {service.shortDescription}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {service.detailedDescription}
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {service.ctaLabel}
              </Link>
              <Link
                href="#service-content"
                className="inline-flex justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {service.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-content"
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      >
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300 sm:text-sm sm:tracking-[0.24em]">
            {service.sectionEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {service.sectionTitle}
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {service.sections.map((section, index) => (
            <article
              key={section.title}
              className="grid min-w-0 items-center gap-8 border-t border-white/10 pt-10 sm:gap-10 sm:pt-12 md:grid-cols-2 md:gap-16 md:pt-16"
            >
              {section.mediaType === "video" ? (
                <div className="order-2 relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30 md:order-2">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover ${section.imagePosition ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-zinc-950/60" />
                  <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                    <button
                      type="button"
                      aria-label={`Lire ${section.videoLabel ?? "la vidéo de présentation"}`}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-950/40 transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    >
                      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
                        <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                      </svg>
                    </button>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-sm sm:tracking-[0.2em]">
                      {section.videoLabel}
                    </p>
                    <p className="max-w-xs text-sm leading-6 text-slate-500">
                      {section.videoDescription}
                    </p>
                  </div>
                </div>
              ) : (
                <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover ${section.imagePosition ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
                </div>
              )}

              <div className={`min-w-0 ${section.mediaType === "video" || index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-sm sm:tracking-[0.2em]">
                  {section.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                  {section.title}
                </h3>
                <div className="mt-5 space-y-4 text-base leading-7 text-slate-400 sm:mt-6 sm:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}