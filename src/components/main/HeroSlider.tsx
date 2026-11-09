"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/mc-scene.jpg",
    alt: "Saliou Djan Diaby échangeant lors d’une intervention filmée",
    title: "Maîtresse de cérémonie",
    description: "Présence, écoute et sens du protocole.",
  },
  {
    src: "/images/portrait-saliou.jpg",
    alt: "Portrait de Saliou Djan Diaby",
    title: "Saliou Djan Diaby",
    description: "Une professionnelle engagée au service de vos projets.",
  },
  {
    src: "/images/emission-hero.jpg",
    alt: "Saliou Djan Diaby et son équipe en studio radio",
    title: "Émissions & journalisme",
    description: "Des échanges qui informent et rassemblent.",
  },
  {
    src: "/images/publicite-tournage.jpg",
    alt: "Saliou Djan Diaby sur un plateau de tournage publicitaire",
    title: "Production audiovisuelle",
    description: "Des contenus pensés pour marquer les esprits.",
  },
] as const;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      role="region"
      aria-label="Galerie des activités"
      aria-roledescription="carrousel"
      className="relative h-[300px] w-full overflow-hidden rounded-3xl border border-blue-800 bg-gradient-to-br from-blue-900 to-indigo-950 shadow-2xl shadow-black/30 sm:h-[400px] lg:h-[580px]"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.src}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${index + 1} sur ${slides.length} : ${slide.title}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              preload={index === 0}
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/20 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                {slide.title}
              </p>
              <p className="mt-2 text-lg font-medium leading-6 sm:text-xl">
                {slide.description}
              </p>
            </div>
          </div>
        );
      })}

    </div>
  );
}
