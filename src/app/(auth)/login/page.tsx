"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setErrorMessage(`La connexion a échoué : ${error.message}`);
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof TypeError &&
        /failed to fetch|networkerror|load failed/i.test(error.message)
          ? "Impossible de joindre Supabase. Vérifiez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY dans les variables d’environnement de Vercel, puis redéployez."
          : error instanceof Error
            ? error.message
            : String(error);
      setErrorMessage(`La connexion a échoué : ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
      <div className="flex items-center gap-4">
        <div className="size-15 rounded-full bg-gradient-to-br from-neutral-300 via-neutral-500 to-neutral-400 p-0.5 shadow-lg shadow-neutral-500/25 ring-1 ring-white/20">
          <Image
            src="/images/portrait-saliou.jpg"
            alt="Saliou Djan Diaby"
            width={56}
            height={56}
            className="size-full rounded-full border border-zinc-950/60 object-cover object-[center_30%]"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Saliou Djan Diaby</p>
          <p className="mt-1 text-xs text-zinc-400">Administration du site</p>
        </div>
      </div>

      <p className="mt-9 text-sm font-medium text-neutral-300">Espace sécurisé</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Connexion</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        Connectez-vous pour accéder à votre espace d’administration.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-200">
            Adresse e-mail
          </label>
          <div className="relative mt-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-400"
            >
              <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-zinc-700/60 bg-zinc-900/60 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-zinc-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/20"
              placeholder="vous@exemple.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-zinc-200">
            Mot de passe
          </label>
          <div className="relative mt-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-400"
            >
              <rect x="4.5" y="10" width="15" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="15" r="1" fill="currentColor" />
            </svg>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-zinc-700/60 bg-zinc-900/60 py-3.5 pl-11 pr-10 text-sm text-white outline-none transition-all placeholder:text-zinc-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/20"
              placeholder="Votre mot de passe"
            />
            <button
              type="button"
              onClick={() => setShowPassword((isVisible) => !isVisible)}
              aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              aria-pressed={showPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-300"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                {showPassword ? (
                  <>
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c5.5 0 9 7 9 7a15.7 15.7 0 0 1-3 3.8" />
                    <path d="M6.2 6.2C3.9 7.7 3 12 3 12s3.5 7 9 7a9.8 9.8 0 0 0 3-.5" />
                  </>
                ) : (
                  <>
                    <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {errorMessage && (
          <p
            role="alert"
            className="rounded-xl border border-neutral-400/25 bg-neutral-500/10 px-4 py-3 text-sm leading-6 text-neutral-200"
          >
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-black shadow-lg shadow-black/20 transition-all duration-200 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? "Connexion..." : "Se connecter"}
        </button>
      </form>

      <p className="mt-7 text-center text-xs text-zinc-500">
        <Link href="/" className="transition hover:text-zinc-300">
          Retour au site
        </Link>
      </p>
    </section>
  );
}
