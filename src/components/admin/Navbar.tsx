"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/admin": "Tableau de bord",
  "/admin/services": "Services",
  "/admin/realisations": "Réalisations",
  "/admin/actualites": "Actualités",
  "/admin/a-propos": "À propos",
  "/admin/messages": "Messages",
  "/admin/parametres": "Paramètres",
};

type NavbarProps = {
  displayName: string;
};

export default function Navbar({ displayName }: NavbarProps) {
  const pathname = usePathname();
  const pageTitle =
    pageTitles[pathname] ??
    (pathname.startsWith("/admin/") ? "Administration" : "Back Office");

  return (
    <header className="sticky top-0 z-20 flex min-h-16 items-center justify-between gap-4 border-b border-white/10 bg-zinc-950/95 px-5 py-3 text-white backdrop-blur-xl sm:px-8">
      <div className="min-w-0">
        <p className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:block">
          Administration
        </p>
        <h1 className="truncate text-base font-semibold tracking-tight sm:mt-1 sm:text-lg">
          {pageTitle}
        </h1>
      </div>

      <div className="flex shrink-0 items-center gap-3 border-l border-white/10 pl-4 sm:gap-4 sm:pl-5">
        <div className="hidden text-right sm:block">
          <p className="max-w-48 truncate text-sm font-medium text-zinc-200">
            {displayName}
          </p>
          <p className="mt-0.5 text-xs text-zinc-500">Administrateur</p>
        </div>
        <Image
          src="/images/portrait-saliou.jpg"
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="size-9 rounded-full border border-white/15 object-cover object-[center_30%] grayscale contrast-125 sm:size-10"
        />
      </div>
    </header>
  );
}
