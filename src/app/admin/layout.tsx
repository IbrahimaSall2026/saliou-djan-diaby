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

  const metadata = data.user.user_metadata;
  const metadataName = [
    metadata.full_name,
    metadata.name,
    metadata.display_name,
  ].find(
    (value): value is string =>
      typeof value === "string" && value.trim().length > 0
  )?.trim();
  const firstName =
    typeof metadata.first_name === "string" ? metadata.first_name.trim() : "";
  const lastName =
    typeof metadata.last_name === "string" ? metadata.last_name.trim() : "";
  const displayName =
    metadataName ||
    [firstName, lastName].filter(Boolean).join(" ") ||
    data.user.email?.split("@")[0] ||
    "Administrateur";

  return (
    <div className="min-h-screen flex-1 bg-zinc-950 md:h-screen md:overflow-hidden">
      <Sidebar displayName={displayName} email={data.user.email ?? null} />
      <div className="flex min-h-screen min-w-0 flex-col md:ml-64 md:h-full">
        <Navbar displayName={displayName} />
        <main className="min-h-0 min-w-0 flex-1 px-4 py-8 text-white sm:px-6 md:overflow-y-auto md:px-10 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
