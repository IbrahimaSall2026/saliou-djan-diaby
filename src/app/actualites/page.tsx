import Image from "next/image";
import { actualites } from "@/data/actualites";

export default function ActualitesPage() {
  const { hero, firstBlock, secondBlock } = actualites;

  return (
    <main className="flex-1 overflow-hidden bg-neutral-950 text-white">
      <section className="relative isolate min-h-[34rem] overflow-hidden border-b border-white/10 md:min-h-[42rem]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.92),rgba(10,10,10,0.48),rgba(10,10,10,0.7))]" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-7xl items-end px-6 pb-16 md:min-h-[42rem] md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              <span className="h-px w-10 bg-cyan-300" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-8xl">
              {hero.title} <span className="text-neutral-400">{hero.titleAccent}</span>{" "}
              {hero.titleSuffix}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-200 md:text-lg">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28" aria-labelledby="event-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                {firstBlock.indexLabel}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{firstBlock.indexDescription}</p>
            </div>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-neutral-600 sm:block">
              {firstBlock.counter}
            </span>
          </div>

          <article className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-16">
            <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30 sm:min-h-[32rem] lg:min-h-[38rem]">
              <Image
                src={firstBlock.image}
                alt={firstBlock.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                {firstBlock.imageBadge}
              </p>
            </div>

            <div className="flex flex-col justify-center py-2 lg:py-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-cyan-200">
                  {firstBlock.category}
                </span>
                <time dateTime={firstBlock.dateTime} className="text-neutral-500">
                  {firstBlock.date}
                </time>
              </div>
              <h2
                id="event-title"
                className="mt-7 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
              >
                {firstBlock.title}
              </h2>
              <div className="mt-7 h-px w-16 bg-cyan-300" aria-hidden="true" />
              <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-neutral-400">
                {firstBlock.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        className="border-y border-white/10 bg-neutral-900/40 px-6 py-20 md:px-8 md:py-28"
        aria-labelledby="video-title"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              {secondBlock.indexLabel}
            </p>
            <h2
              id="video-title"
              className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
            >
              {secondBlock.title}
            </h2>
            <div className="mt-7 h-px w-16 bg-cyan-300" aria-hidden="true" />
            <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-neutral-400">
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

          <div className="order-1 lg:order-2">
            <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/30">
              <Image
                src={secondBlock.image}
                alt={secondBlock.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-neutral-950/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <button
                  type="button"
                  aria-label={secondBlock.playAriaLabel}
                  disabled={secondBlock.mediaType !== "video"}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-red-300/70 bg-red-600 text-white shadow-xl shadow-red-950/30 transition-colors hover:bg-red-700"
                >
                  <span
                    aria-hidden="true"
                    className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-white"
                  />
                </button>
                <p className="mt-5 text-sm font-medium text-white">{secondBlock.mediaLabel}</p>
                <p className="mt-2 text-xs text-neutral-300">{secondBlock.mediaDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}