"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Realisation } from "@/data/realisations";

type HomeRealisation = Pick<
  Realisation,
  "id" | "slug" | "title" | "category" | "description" | "image" | "imageAlt"
>;

export default function RealisationCarousel({
  realisations,
}: {
  realisations: HomeRealisation[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || realisations.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % realisations.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isPlaying, realisations.length]);

  if (realisations.length === 0) {
    return null;
  }

  function showSlide(index: number) {
    setActiveIndex((index + realisations.length) % realisations.length);
  }

  return (
    <div
      role="region"
      aria-label="Réalisations à la une"
      aria-roledescription="carrousel"
      className="relative"
    >
      <div className="relative min-h-[550px] overflow-hidden rounded-2xl border border-blue-800 bg-blue-950/70 shadow-2xl shadow-black/25 sm:min-h-[470px] md:min-h-[420px]">
        {realisations.map((realisation, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={realisation.id}
              role="group"
              aria-roledescription="diapositive"
              aria-label={`${index + 1} sur ${realisations.length} : ${realisation.title}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={`absolute inset-0 grid grid-cols-1 transition-opacity duration-700 ease-in-out motion-reduce:transition-none md:grid-cols-2 ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Link
                href={`/realisations/${realisation.slug}`}
                tabIndex={isActive ? 0 : -1}
                aria-label={`Découvrir : ${realisation.title}`}
                className="group relative min-h-[300px] overflow-hidden bg-blue-950 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white md:min-h-full"
              >
                <Image
                  src={realisation.image}
                  alt={realisation.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  preload={index === 0}
                  className="object-contain"
                />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-blue-950/90 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
                  {realisation.category}
                </span>
              </Link>

              <div className="flex flex-col justify-center bg-gradient-to-br from-blue-950 to-indigo-950 p-6 text-white sm:p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  {realisation.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {realisation.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-200">
                  {realisation.description}
                </p>
                <Link
                  href={`/realisations/${realisation.slug}`}
                  tabIndex={isActive ? 0 : -1}
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/50 px-5 py-2.5 text-sm font-semibold text-blue-50 transition-colors hover:border-blue-200 hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Découvrir le projet
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2" aria-label="Choisir une réalisation">
          {realisations.map((realisation, index) => (
            <button
              key={realisation.id}
              type="button"
              aria-label={`Afficher : ${realisation.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => showSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                index === activeIndex
                  ? "w-7 bg-white"
                  : "w-2.5 bg-blue-300/60 hover:bg-blue-100"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Réalisation précédente"
            onClick={() => showSlide(activeIndex - 1)}
            className="flex size-10 items-center justify-center rounded-full border border-blue-300/50 text-xl text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            aria-label="Réalisation suivante"
            onClick={() => showSlide(activeIndex + 1)}
            className="flex size-10 items-center justify-center rounded-full border border-blue-300/50 text-xl text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span aria-hidden="true">›</span>
          </button>
          <button
            type="button"
            aria-label={isPlaying ? "Mettre le carrousel en pause" : "Reprendre le carrousel"}
            aria-pressed={!isPlaying}
            onClick={() => setIsPlaying((playing) => !playing)}
            className="ml-2 min-h-10 rounded-full border border-blue-300/50 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {isPlaying ? "Pause" : "Lecture"}
          </button>
        </div>
      </div>
    </div>
  );
}
