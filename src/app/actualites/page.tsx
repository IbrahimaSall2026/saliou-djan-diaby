import Image from "next/image";
import { actualites } from "@/data/actualites";

export default function ActualitesPage() {
  const { hero, firstBlock, secondBlock } = actualites;

  return (
    <main className="flex-1 overflow-hidden bg-slate-50 text-zinc-900">
      <section className="relative isolate min-h-[42rem] overflow-hidden border-b border-blue-900 md:min-h-[46rem]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-indigo-950/25"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[42rem] max-w-7xl items-end px-6 pb-14 md:min-h-[46rem] md:px-8 md:pb-20">
          <div className="max-w-3xl">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-5 text-sm font-medium text-blue-50 md:text-base">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-8 md:py-24" aria-labelledby="event-title">
        <article className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-slate-100 shadow-2xl shadow-blue-950/10">
            <Image
              src={firstBlock.image}
              alt={firstBlock.imageAlt}
              width={1260}
              height={1893}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2
              id="event-title"
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
            >
              {firstBlock.title}
            </h2>
            <div className="mt-7 h-px w-16 bg-blue-300" aria-hidden="true" />
            <div className="mt-7 space-y-5 text-base leading-8 text-zinc-700">
              {firstBlock.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section
        className="border-y border-blue-900 bg-gradient-to-br from-blue-950 to-indigo-950 px-6 py-16 text-white md:px-8 md:py-24"
        aria-labelledby="video-title"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 relative aspect-[2/3] overflow-hidden rounded-[2rem] border border-blue-800 bg-blue-900 shadow-2xl shadow-blue-950/30 sm:aspect-[4/3] lg:col-start-2 lg:row-start-1">
            <Image
              src={secondBlock.image}
              alt={secondBlock.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-blue-950/80 via-blue-950/25 to-indigo-950/20 px-6 text-center"
            >
              <button
                type="button"
                aria-label={secondBlock.playAriaLabel}
                disabled
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-blue-600 text-white shadow-xl shadow-blue-950/40"
              >
                <span
                  aria-hidden="true"
                  className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-white"
                />
              </button>
              <p className="mt-5 text-sm font-medium text-white">{secondBlock.mediaLabel}</p>
              <p className="mt-2 text-xs text-blue-100">{secondBlock.mediaDescription}</p>
            </div>
          </div>

          <div className="order-2 lg:col-start-1 lg:row-start-1">
            <h2
              id="video-title"
              className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
            >
              {secondBlock.title}
            </h2>
            <div className="mt-7 h-px w-16 bg-blue-300" aria-hidden="true" />
            <div className="mt-7 space-y-5 text-base leading-8 text-blue-50">
              {secondBlock.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}