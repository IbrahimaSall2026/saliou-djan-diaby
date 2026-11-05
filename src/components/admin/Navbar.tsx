"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignOut() {
    setIsSigningOut(true);
    setErrorMessage("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        setErrorMessage(`La déconnexion a échoué : ${error.message}`);
        setIsSigningOut(false);
        return;
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
    <header className="sticky top-0 z-20 flex min-h-[76px] items-center justify-between gap-4 border-b border-white/10 bg-slate-950/90 px-5 py-3 text-white backdrop-blur-xl sm:px-8">
      <h1 className="text-sm font-semibold tracking-tight sm:text-base">
        Saliou Djan Diaby <span className="text-slate-500">- Back Office</span>
      </h1>

      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <Image
          src="/images/portrait-saliou.jpg"
          alt="Administrateur Saliou Djan Diaby"
          width={40}
          height={40}
          className="size-9 rounded-full border border-white/15 object-cover object-[center_30%] sm:size-10"
        />
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 disabled:cursor-wait disabled:opacity-60 sm:px-4 sm:text-sm"
        >
          {isSigningOut ? "Déconnexion..." : "Se déconnecter"}
        </button>
      </div>

      {errorMessage && (
        <p
          role="alert"
          className="absolute right-5 top-full mt-2 max-w-sm rounded-lg border border-rose-400/20 bg-slate-900 px-3 py-2 text-xs text-rose-200 shadow-xl sm:right-8"
        >
          {errorMessage}
        </p>
      )}
    </header>
  );
}
