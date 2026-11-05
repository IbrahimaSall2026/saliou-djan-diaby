import Link from "next/link";
import type { PublicService } from "@/lib/services";

type ServicePageProps = {
  service: PublicService;
};

const categoryLabels: Record<PublicService["category"], string> = {
  mc: "Maîtresse de cérémonie",
  publicite: "Publicité",
  emission: "Émission",
};

export default function ServicePage({ service }: ServicePageProps) {
  const categoryLabel = categoryLabels[service.category];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative isolate flex min-h-[min(680px,calc(100vh-5rem))] items-center overflow-hidden border-b border-white/10 bg-zinc-950">
        {service.block1_image_url && (
          <div
            role="img"
            aria-label={service.hero_title ?? "Image de présentation du service"}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${service.block1_image_url}")` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/45" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            {categoryLabel}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {service.hero_title}
          </h1>
          {service.hero_description && (
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {service.hero_description}
            </p>
          )}
          <Link
            href="/contact"
            className="mt-8 inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Parlons de votre projet
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-20 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28">
        <article className="grid min-w-0 items-center gap-8 border-t border-white/10 pt-10 sm:gap-10 sm:pt-12 md:grid-cols-2 md:gap-16 md:pt-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30">
            {service.block1_image_url && (
              <div
                role="img"
                aria-label={service.block1_title ?? "Illustration du service"}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${service.block1_image_url}")` }}
              />
            )}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300 sm:text-sm sm:tracking-[0.24em]">
              {categoryLabel}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              {service.block1_title}
            </h2>
            {service.block1_description && (
              <p className="mt-5 text-base leading-7 text-slate-400 sm:leading-8">
                {service.block1_description}
              </p>
            )}
          </div>
        </article>

        <article className="grid min-w-0 items-center gap-8 border-t border-white/10 pt-10 sm:gap-10 sm:pt-12 md:grid-cols-2 md:gap-16 md:pt-16">
          <div className="md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300 sm:text-sm sm:tracking-[0.24em]">
              {categoryLabel}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              {service.block2_title}
            </h2>
            {service.block2_description && (
              <p className="mt-5 text-base leading-7 text-slate-400 sm:leading-8">
                {service.block2_description}
              </p>
            )}
          </div>
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center shadow-2xl shadow-black/30 md:order-1">
            {service.block2_video_url ? (
              <Link
                href={service.block2_video_url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Voir la vidéo
              </Link>
            ) : (
              <p className="text-sm text-slate-500">Vidéo à venir</p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}