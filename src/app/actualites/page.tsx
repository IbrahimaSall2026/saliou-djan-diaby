import Image from "next/image";
import { actualites } from "@/data/actualites";

export default function ActualitesPage() {
  const { hero, firstBlock, secondBlock } = actualites;

  return (
    <main className="flex-1 overflow-hidden bg-neutral-950 text-white">
      <section className="relative isolate min-h-[42rem] overflow-hidden border-b border-white/10 md:min-h-[46rem]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/15 to-neutral-950/20"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[42rem] max-w-7xl items-end px-6 pb-14 md:min-h-[46rem] md:px-8 md:pb-20">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              <span className="h-px w-10 bg-cyan-300" aria-hidden="true" />
              {firstBlock.indexLabel}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
              {firstBlock.title}
            </h1>
            <p className="mt-5 text-sm font-medium text-neutral-200 md:text-base">
              {firstBlock.date}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-8 md:py-24" aria-labelledby="event-title">
        <article className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl shadow-black/30">
            <Image
              src={firstBlock.image}
              alt={firstBlock.imageAlt}
              width={1260}
              height={1893}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
            <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              {firstBlock.imageBadge}
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {firstBlock.category} · {firstBlock.date}
            </p>
            <h2
              id="event-title"
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
            >
              {firstBlock.title}
            </h2>
            <div className="mt-7 h-px w-16 bg-cyan-300" aria-hidden="true" />
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-300">
              {firstBlock.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section
        className="border-y border-white/10 bg-neutral-900/40 px-6 py-16 md:px-8 md:py-24"
        aria-labelledby="video-title"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 relative aspect-[2/3] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/30 sm:aspect-[4/3] lg:col-start-2 lg:row-start-1">
            <Image
              src={secondBlock.image}
              alt={secondBlock.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-neutral-950/20 px-6 text-center"
            >
              <button
                type="button"
                aria-label={secondBlock.playAriaLabel}
                disabled
                className="flex h-16 w-16 items-center justify-center rounded-full border border-red-300/70 bg-red-600 text-white shadow-xl shadow-red-950/40"
              >
                <span
                  aria-hidden="true"
                  className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-white"
                />
              </button>
              <p className="mt-5 text-sm font-medium text-white">{secondBlock.mediaLabel}</p>
              <p className="mt-2 text-xs text-neutral-200">{secondBlock.mediaDescription}</p>
            </div>
          </div>

          <div className="order-2 lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {secondBlock.indexLabel}
            </p>
            <h2
              id="video-title"
              className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
            >
              {secondBlock.title}
            </h2>
            <div className="mt-7 h-px w-16 bg-cyan-300" aria-hidden="true" />
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-300">
              {secondBlock.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-4 text-sm text-neutral-300">
              {secondBlock.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}