"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/actualites", label: "Actualités" },
  { href: "/a-propos", label: "À propos" },
] as const;

const serviceLinks = [
  { href: "/services/maitresse-de-ceremonie", label: "Maîtresse de Cérémonie (MC)" },
  { href: "/services/publicite-valorisation-marques", label: "Publicité & Valorisation de marques" },
  { href: "/services/creation-production-emissions", label: "Création & production d'émissions" },
] as const;

const realisationLinks = [
  { href: "/realisations/ceremonie-animee", label: "Cérémonie animée" },
  { href: "/realisations/publicite-realisee", label: "Publicité réalisée" },
  { href: "/realisations/emission-produite", label: "Émission produite" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isRealisationsOpen, setIsRealisationsOpen] = useState(false);
  const mobileServicesMenuRef = useRef<HTMLDivElement>(null);
  const mobileRealisationsMenuRef = useRef<HTMLDivElement>(null);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsRealisationsOpen(false);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        mobileServicesMenuRef.current &&
        !mobileServicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }

      if (
        mobileRealisationsMenuRef.current &&
        !mobileRealisationsMenuRef.current.contains(event.target as Node)
      ) {
        setIsRealisationsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsRealisationsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 text-white shadow-lg shadow-black/10 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 md:px-8">
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
          >
          <Image
            className="h-10 w-10 shrink-0 rounded-full object-cover object-top ring-1 ring-white/20 transition duration-300 group-hover:ring-white/50"
            src="/images/portrait-saliou.jpg"
            alt="Portrait de SALIOU DJAN DIABY"
            width={40}
            height={40}
            priority
          />
          <span className="truncate text-lg font-semibold tracking-wide text-slate-100 transition-colors group-hover:text-white">
            SALIOU DJAN DIABY
          </span>
          </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center justify-center gap-x-5 text-sm font-medium text-slate-300 md:col-start-2 md:flex md:gap-x-7"
        >
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Services
              <span
                aria-hidden="true"
                className="mt-[-0.2rem] h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-300 group-hover:translate-y-0.5 group-focus-within:translate-y-0.5"
              />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 translate-y-1 opacity-0 rounded-xl border border-white/10 bg-zinc-900/90 p-2 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Réalisations
              <span
                aria-hidden="true"
                className="mt-[-0.2rem] h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-300 group-hover:translate-y-0.5 group-focus-within:translate-y-0.5"
              />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 translate-y-1 opacity-0 rounded-xl border border-white/10 bg-zinc-900/90 p-2 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {realisationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden shrink-0 items-center justify-self-end rounded-full border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-slate-200 hover:text-black md:inline-flex md:col-start-3"
        >
          Me contacter
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
          className={`absolute left-0 right-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-white/10 bg-zinc-950/95 px-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <nav
            aria-label="Navigation mobile"
            className="mx-auto flex w-full max-w-7xl flex-col gap-1 py-5"
          >
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="rounded-lg border border-transparent px-3 py-3 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
            <div ref={mobileServicesMenuRef}>
              <button
                type="button"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                onClick={() => setIsServicesOpen((open) => !open)}
                className="flex min-h-12 w-full items-center justify-between rounded-lg border border-transparent px-3 py-3 text-left text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Services
                <span
                  aria-hidden="true"
                  className={`mr-1 h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 transition-transform duration-300 ${
                    isServicesOpen ? "translate-y-[-0.15rem] rotate-[225deg]" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="ml-4 space-y-1 rounded-lg border-l-2 border-cyan-300/40 bg-zinc-900/60 py-2 pl-4 pr-2 shadow-inner shadow-black/10">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}
                      className="block rounded-lg px-3 py-3.5 text-[0.95rem] leading-5 text-slate-400 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div ref={mobileRealisationsMenuRef}>
              <button
                type="button"
                aria-expanded={isRealisationsOpen}
                aria-haspopup="true"
                onClick={() => setIsRealisationsOpen((open) => !open)}
                className="flex min-h-12 w-full items-center justify-between rounded-lg border border-transparent px-3 py-3 text-left text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Réalisations
                <span
                  aria-hidden="true"
                  className={`mr-1 h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 transition-transform duration-300 ${
                    isRealisationsOpen ? "translate-y-[-0.15rem] rotate-[225deg]" : ""
                  }`}
                />
              </button>
              {isRealisationsOpen && (
                <div className="ml-4 space-y-1 rounded-lg border-l-2 border-cyan-300/40 bg-zinc-900/60 py-2 pl-4 pr-2 shadow-inner shadow-black/10">
                  {realisationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}
                      className="block rounded-lg px-3 py-3.5 text-[0.95rem] leading-5 text-slate-400 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="rounded-lg border border-transparent px-3 py-3 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenus}
              className="mt-3 inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-200 hover:text-black"
            >
              Me contacter
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
