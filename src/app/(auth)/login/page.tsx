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
        setIsSubmitting(false);
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setErrorMessage(`La connexion a échoué : ${message}`);
      setIsSubmitting(false);
    }
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
      <div className="flex items-center gap-4">
        <div className="size-15 rounded-full bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-400 p-0.5 shadow-lg shadow-blue-500/25 ring-1 ring-white/20">
          <Image
            src="/images/portrait-saliou.jpg"
            alt="Saliou Djan Diaby"
            width={56}
            height={56}
            className="size-full rounded-full border border-slate-950/60 object-cover object-[center_30%]"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Saliou Djan Diaby</p>
          <p className="mt-1 text-xs text-slate-400">Administration du site</p>
        </div>
      </div>

      <p className="mt-9 text-sm font-medium text-sky-300">Espace sécurisé</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Connexion</h1>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        Connectez-vous pour accéder à votre espace d’administration.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-200">
            Adresse e-mail
          </label>
          <div className="relative mt-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
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
              className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="vous@exemple.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-slate-200">
            Mot de passe
          </label>
          <div className="relative mt-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
            >
              <rect x="4.5" y="10" width="15" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="15" r="1" fill="currentColor" />
            </svg>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              placeholder="Votre mot de passe"
            />
          </div>
        </div>

        {errorMessage && (
          <p
            role="alert"
            className="rounded-xl border border-rose-400/25 bg-rose-500/10 px-4 py-3 text-sm leading-6 text-rose-200"
          >
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-200 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? "Connexion..." : "Se connecter"}
        </button>
      </form>

      <p className="mt-7 text-center text-xs text-slate-500">
        <Link href="/" className="transition hover:text-slate-300">
          Retour au site
        </Link>
      </p>
    </section>
  );
}
