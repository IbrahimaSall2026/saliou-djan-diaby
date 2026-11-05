import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error && error.name !== "AuthSessionMissingError") {
    throw new Error(`Impossible de vérifier la session Supabase : ${error.message}`);
  }

  if (!data.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex-1 bg-slate-950 md:h-screen md:overflow-hidden">
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-col md:ml-64 md:h-full">
        <Navbar />
        <main className="min-h-0 min-w-0 flex-1 px-4 py-8 text-white sm:px-6 md:overflow-y-auto md:px-10 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
