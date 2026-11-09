import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Service } from "@/data/services";

type EditorialServicePageProps = {
  service: Service;
};

export default function EditorialServicePage({
  service,
}: EditorialServicePageProps) {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <section className="overflow-hidden border-b border-blue-800 bg-gradient-to-br from-blue-950 via-blue-950 to-indigo-950">
        <div className="mx-auto grid w-full max-w-7xl items-center md:grid-cols-2">
          <div className="relative order-1 aspect-[4/3] w-full overflow-hidden bg-blue-950 sm:aspect-video md:order-2 md:aspect-auto md:min-h-[min(680px,calc(100vh-5rem))]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero-background-image object-contain"
              style={
                {
                  "--hero-mobile-position": service.heroImagePositionMobile ?? "center",
                  "--hero-desktop-position": service.heroImagePosition ?? "center",
                } as CSSProperties
              }
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/35 to-transparent md:bg-gradient-to-l md:from-blue-950/25 md:to-transparent" />
          </div>

          <div className="order-2 px-5 py-9 sm:px-8 sm:py-12 md:order-1 md:px-10 md:py-16 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                {service.heroEyebrow}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-blue-50 sm:mt-6 sm:text-lg sm:leading-8">
                {service.shortDescription}
              </p>
              <p className="mt-3 text-sm leading-6 text-blue-100 sm:mt-5 sm:text-base sm:leading-7">
                {service.detailedDescription}
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold leading-5 text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6 sm:text-base"
                >
                  {service.ctaLabel}
                </Link>
                <Link
                  href="#service-details"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-blue-200/50 px-5 py-3 text-center text-sm font-semibold leading-5 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6 sm:text-base"
                >
                  {service.secondaryCtaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-details"
        className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-20 md:px-8 md:py-28"
      >
        <div className="mb-10 max-w-3xl sm:mb-14 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
            {service.sectionEyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:mt-5 sm:text-3xl md:text-5xl">
            {service.sectionTitle}
          </h2>
        </div>

        <div className="space-y-14 sm:space-y-20 md:space-y-28">
          {service.sections.map((section, index) => (
            <article
              key={section.title}
              className="grid items-center gap-6 border-t border-blue-800 pt-7 sm:gap-10 sm:pt-12 md:grid-cols-2 md:gap-16 md:pt-16"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-blue-800 bg-blue-900 shadow-2xl shadow-black/30 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover ${section.imagePosition ?? "object-center"}`}
                />
                {section.mediaType === "video" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-blue-950/65 p-6 text-center">
                    {service.videoUrl ? (
                      <Link
                        href={service.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Lire ${section.videoLabel ?? "la vidéo de présentation"}`}
                        className="flex size-14 items-center justify-center rounded-full border border-white/70 text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        <span aria-hidden="true">&#9654;</span>
                      </Link>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex size-14 items-center justify-center rounded-full border border-white/70 text-2xl text-white"
                      >
                        &#9654;
                      </span>
                    )}
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                      {section.videoLabel ?? "Vidéo de présentation"}
                    </p>
                    {!service.videoUrl && (
                      <p className="text-sm text-blue-100">
                        Extrait vidéo à venir
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  {section.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:mt-4 sm:text-2xl md:text-4xl">
                  {section.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-blue-100 sm:mt-5 sm:space-y-4 sm:text-base sm:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.mediaType === "video" && section.videoDescription && (
                  <p className="mt-5 text-sm leading-6 text-blue-200">
                    {section.videoDescription}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-blue-800 bg-gradient-to-br from-blue-950 to-indigo-950 px-5 py-12 sm:px-6 sm:py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
              {service.title}
            </p>
            <h2 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
              Parlons de votre projet et du message que vous souhaitez faire rayonner.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold leading-5 text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6 sm:text-base"
          >
            {service.ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
