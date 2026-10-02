"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { RealisationCategory } from "@/data/realisations";
import { realisations } from "@/data/realisations";

const categories: readonly ("Toutes" | RealisationCategory)[] = [
  "Toutes",
  "Cérémonie animée",
  "Publicité réalisée",
  "Émission produite",
];

export default function RealisationGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Toutes");
  const filteredRealisations = realisations.filter(
    (realisation) => activeCategory === "Toutes" || realisation.category === activeCategory,
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filtrer les réalisations par catégorie">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 ${
                isActive
                  ? "border-blue-400 bg-blue-600 text-white"
                  : "border-white/15 bg-white/[0.03] text-slate-300 hover:border-blue-400/60 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRealisations.map((realisation) => (
          <article
            key={realisation.id}
            className="group overflow-hidden border border-white/10 bg-zinc-900/60 transition duration-300 hover:-translate-y-1 hover:border-blue-800 hover:bg-blue-950/30"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={realisation.image}
                alt={realisation.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-blue-300/30 bg-blue-950/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                {realisation.category}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white">{realisation.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{realisation.description}</p>
              <Link
                href={`/realisations/${realisation.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
              >
                Découvrir la réalisation
                <span aria-hidden="true" className="ml-2 text-lg leading-none transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}