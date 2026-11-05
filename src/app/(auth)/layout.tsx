import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid min-h-screen flex-1 bg-[#080b12] text-white lg:grid-cols-2">
      <section className="relative isolate flex min-h-[250px] flex-col justify-between overflow-hidden px-6 py-7 sm:min-h-[320px] sm:px-10 sm:py-9 lg:min-h-screen lg:px-14 lg:py-12">
        <Image
          src="/images/portrait-saliou.jpg"
          alt="Portrait de Saliou Djan Diaby"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="-z-20 object-cover object-[center_35%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/70 via-slate-950/35 to-slate-950/80"
        />
        <Link
          href="/"
          className="relative z-10 w-fit text-sm font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:text-white"
        >
          Saliou Djan Diaby
        </Link>
        <div className="relative z-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200 sm:text-sm">
            Espace professionnel
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Les coulisses de vos plus beaux projets.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-base">
            Retrouvez votre espace d’administration et faites vivre vos contenus.
          </p>
        </div>
      </section>

      <section className="relative flex min-h-[calc(100vh-250px)] items-center justify-center overflow-hidden px-4 py-10 sm:min-h-[calc(100vh-320px)] sm:px-8 lg:min-h-screen lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(14,116,144,0.12),transparent_45%)]"
        />
        <div className="relative w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}
