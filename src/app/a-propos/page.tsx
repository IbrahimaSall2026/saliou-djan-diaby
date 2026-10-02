import Image from "next/image";
import Link from "next/link";
import { aProposData } from "@/data/a-propos";

export default function AProposPage() {
  return (
    <main className="flex-1 overflow-hidden bg-zinc-950 text-white">
      <section className="relative isolate min-h-[min(760px,100vh)] overflow-hidden border-b border-white/10">
        <Image
          src={aProposData.hero.image}
          alt={aProposData.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/65" />
        <div className="relative mx-auto flex min-h-[min(760px,100vh)] max-w-7xl items-end px-6 pb-20 md:px-8 md:pb-28">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              <span className="h-px w-10 bg-blue-300" aria-hidden="true" />
              {aProposData.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-8xl">
              {aProposData.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 md:text-xl">
              {aProposData.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28" aria-labelledby="personal-story-title">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30">
            <Image
              src={aProposData.introduction.image}
              alt={aProposData.introduction.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_32%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 to-transparent" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              {aProposData.introduction.eyebrow}
            </p>
            <h2 id="personal-story-title" className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {aProposData.introduction.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-400">
              {aProposData.introduction.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20 md:px-8 md:py-28" aria-labelledby="story-title">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            {aProposData.presentation.eyebrow}
          </p>
          <h2 id="story-title" className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {aProposData.presentation.title}
          </h2>
        </div>

        <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 min-w-0 md:order-1">
            <p className="text-lg leading-8 text-slate-200">{aProposData.presentation.lead}</p>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-400">
              {aProposData.presentation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="order-1 relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30 md:order-2">
            <Image
              src={aProposData.media.image}
              alt={aProposData.media.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-zinc-950/60" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <button
                type="button"
                aria-label={aProposData.media.buttonLabel}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-950/40 transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
                  <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                </svg>
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                {aProposData.media.caption}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="border-y border-blue-950 bg-blue-950/30 px-6 py-20 md:px-8 md:py-28" aria-labelledby="mission-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              {aProposData.missionVision.eyebrow}
            </p>
            <h2 id="mission-title" className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {aProposData.missionVision.title}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="border border-blue-900/70 bg-blue-950/40 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{aProposData.missionVision.mission.label}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {aProposData.missionVision.mission.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-slate-300">{aProposData.missionVision.mission.description}</p>
            </article>
            <article className="border border-blue-900/70 bg-zinc-950/50 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{aProposData.missionVision.vision.label}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {aProposData.missionVision.vision.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-slate-300">{aProposData.missionVision.vision.description}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28" aria-labelledby="values-title">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">{aProposData.values.eyebrow}</p>
          <h2 id="values-title" className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {aProposData.values.title}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {aProposData.values.items.map((value) => (
            <article key={value.number} className="border border-white/10 bg-zinc-900/50 p-7 transition-colors hover:border-blue-800 hover:bg-blue-950/30 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.18em] text-blue-300">{value.number}</p>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight text-white">{value.title}</h3>
              <p className="mt-5 text-base leading-7 text-slate-400">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-blue-900/70 bg-blue-950/35 p-8 sm:p-10 md:flex-row md:items-center md:p-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">{aProposData.contact.eyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {aProposData.contact.title}
            </h2>
          </div>
          <Link
            href={aProposData.contact.href}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            {aProposData.contact.label}
            <span aria-hidden="true" className="ml-3 text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}