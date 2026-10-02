import Image from "next/image";
import RealisationGrid from "@/components/realisations/RealisationGrid";

export default function RealisationsPage() {
  return (
    <main className="flex-1 overflow-hidden bg-zinc-950 text-white">
      <section className="relative isolate min-h-[32rem] overflow-hidden border-b border-white/10">
        <Image
          src="/images/intervention-panel-simandou.jpg"
          alt="Thierno Ila Diallo lors d'une intervention professionnelle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[88%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />
        <div className="relative mx-auto flex min-h-[32rem] max-w-7xl items-end px-6 pb-16 md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              <span className="h-px w-10 bg-blue-300" aria-hidden="true" />
              Portfolio &amp; projets
            </p>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-8xl">
              Réalisations
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Découvrez des événements, des formations et des interventions où
              la parole devient une expérience claire, vivante et utile.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28" aria-labelledby="portfolio-title">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Sélection de projets</p>
          <h2 id="portfolio-title" className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Des formats pensés pour laisser une trace
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400">
            Filtrez les réalisations par univers pour trouver l&apos;expérience la
            plus proche de votre projet.
          </p>
        </div>

        <RealisationGrid />
      </section>
    </main>
  );
}