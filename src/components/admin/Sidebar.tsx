"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const navigationItems = [
  {
    href: "/admin",
    label: "Tableau de bord",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
      </>
    ),
  },
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
  {
    href: "/admin/messages",
    label: "Messages",
    icon: (
      <>
        <path d="M4 5.5h16v11H9l-5 3v-14Z" />
        <path d="M8 9.5h8M8 13h5" />
      </>
    ),
  },
  {
    href: "/",
    label: "Voir le site",
    icon: (
      <>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
  },
  {
    href: "/admin/parametres",
    label: "Paramètres",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V4a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2.9Z" />
      </>
    ),
  },
] as const;

type SidebarProps = {
  displayName: string;
  email: string | null;
};

export default function Sidebar({ displayName, email }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const initials = displayName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toLocaleUpperCase();

  async function handleSignOut() {
    setIsSigningOut(true);
    setErrorMessage("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw new Error(error.message);
      }

      router.replace("/login");
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setErrorMessage(`La déconnexion a échoué : ${message}`);
      setIsSigningOut(false);
    }
  }

  return (
    <aside className="z-30 flex max-h-[60dvh] w-full shrink-0 flex-col overflow-y-auto border-b border-white/10 bg-zinc-950 px-4 py-4 text-white [scrollbar-color:#52525b_#09090b] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-track]:bg-zinc-950 md:fixed md:inset-y-0 md:left-0 md:h-dvh md:max-h-none md:w-64 md:border-b-0 md:border-r md:border-white/10 md:py-7">
      <div className="mb-6 flex justify-center border-b border-zinc-800 pb-6">
        <Image
          src="/images/portrait-saliou.jpg"
          alt="Saliou Djan Diaby"
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-full border border-white/20 object-cover object-[center_30%] grayscale contrast-125"
        />
      </div>
      <p className="mb-3 hidden px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 md:block">
        Menu principal
      </p>
      <nav
        aria-label="Navigation d’administration"
        className="flex flex-col gap-2"
      >
        {navigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? false
              : item.href === "/admin"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white text-black ring-1 ring-inset ring-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
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
                <span className="ml-auto hidden size-1.5 rounded-full bg-black md:block" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-5 border-t border-white/10 px-2 pt-4 md:mt-auto md:px-0 md:pt-5">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white"
          >
            {initials || "AD"}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{displayName}</p>
            {email && (
              <p className="truncate text-xs text-zinc-500">{email}</p>
            )}
          </div>
          <span className="rounded-full border border-white/15 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-300">
            Admin
          </span>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M10 17l5-5-5-5M15 12H3" />
            <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
          </svg>
          {isSigningOut ? "Déconnexion..." : "Déconnexion"}
        </button>
        {errorMessage && (
          <p role="alert" className="mt-2 text-xs leading-5 text-zinc-300">
            {errorMessage}
          </p>
        )}
      </div>
    </aside>
  );
}
