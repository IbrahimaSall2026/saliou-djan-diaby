import { notFound } from "next/navigation";

const sections: Record<string, string> = {
  actualites: "Actualités",
  realisations: "Réalisations",
  "a-propos": "À propos",
};

export default async function AdminSectionPage({
  params,
}: PageProps<"/admin/[section]">) {
  const { section } = await params;
  const title = sections[section];

  if (!title) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl">
      <p className="text-sm font-medium text-blue-300">Administration</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
        L’interface de gestion de cette rubrique n’est pas encore disponible.
      </p>
    </section>
  );
}
