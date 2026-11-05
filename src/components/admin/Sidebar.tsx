"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    href: "/admin/services",
    label: "Services",
    icon: (
      <>
        <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" />
        <path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12v8.5" />
      </>
    ),
  },
  {
    href: "/admin/realisations",
    label: "Réalisations",
    icon: (
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <circle cx="8.5" cy="9" r="1.5" />
        <path d="m20.5 15-5-5-8 9" />
      </>
    ),
  },
  {
    href: "/admin/actualites",
    label: "Actualités",
    icon: (
      <>
        <path d="M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v14l-3.5-2-3.5 2-3.5-2-3.5 2v-14A1.5 1.5 0 0 1 5 4.5Z" />
        <path d="M8 9h8M8 12.5h8" />
      </>
    ),
  },
  {
    href: "/admin/a-propos",
    label: "À propos",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </>
    ),
  },
] as const;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="z-30 flex w-full shrink-0 flex-col border-b border-white/10 bg-slate-950 px-4 py-4 text-white md:fixed md:inset-y-0 md:left-0 md:w-64 md:border-b-0 md:border-r md:border-white/10 md:px-5 md:py-7">
      <Link href="/admin/services" className="flex items-center gap-3 px-2">
        <span className="flex size-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
          SD
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Saliou Djan Diaby
          </span>
          <span className="mt-1 block text-xs text-slate-500">Back Office</span>
        </span>
      </Link>

      <p className="mb-3 mt-8 hidden px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 md:block">
        Menu principal
      </p>
      <nav
        aria-label="Navigation d’administration"
        className="mt-4 flex gap-2 overflow-x-auto md:mt-0 md:flex-col md:overflow-visible"
      >
        {navigationItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-400/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[18px] shrink-0"
              >
                {item.icon}
              </svg>
              {item.label}
              {isActive && (
                <span className="ml-auto hidden size-1.5 rounded-full bg-blue-300 md:block" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto hidden border-t border-white/10 px-3 pt-5 md:block">
        <p className="text-xs text-slate-500">Espace sécurisé</p>
        <p className="mt-1 text-xs font-medium text-slate-300">
          Gestion du site
        </p>
      </div>
    </aside>
  );
}
