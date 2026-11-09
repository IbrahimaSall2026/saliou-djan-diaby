import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

type EditorialServicePageProps = {
  service: Service;
};

export default function EditorialServicePage({
  service,
}: EditorialServicePageProps) {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <section className="relative isolate flex min-h-[min(760px,100vh)] items-center overflow-hidden border-b border-blue-800 bg-blue-950">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: service.heroImagePosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-blue-950/35" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
              {service.heroEyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
              {service.shortDescription}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              {service.detailedDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {service.ctaLabel}
              </Link>
              <Link
                href="#service-details"
                className="inline-flex items-center justify-center rounded-full border border-blue-200/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {service.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-details"
        className="mx-auto w-full max-w-7xl px-6 py-20 md:px-8 md:py-28"
      >
        <div className="mb-14 max-w-3xl md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
            {service.sectionEyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {service.sectionTitle}
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {service.sections.map((section, index) => (
            <article
              key={section.title}
              className="grid items-center gap-8 border-t border-blue-800 pt-10 sm:gap-12 sm:pt-12 md:grid-cols-2 md:gap-16 md:pt-16"
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
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                  {section.title}
                </h3>
                <div className="mt-5 space-y-4 text-base leading-8 text-blue-100">
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

      <section className="border-t border-blue-800 bg-gradient-to-br from-blue-950 to-indigo-950 px-6 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
              Maîtresse de cérémonie
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Donnons le bon rythme à votre événement.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {service.ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
