import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

const shortcuts = [
  {
    href: "/admin/services",
    label: "Services",
    description: "Modifier les contenus et les catégories de services.",
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
    description: "Gérer les contenus et les médias des réalisations.",
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
    description: "Accéder à la rubrique des actualités.",
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
    description: "Accéder aux informations de présentation.",
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
    description: "La réception des messages de contact reste à configurer.",
    icon: (
      <>
        <path d="M4 5.5h16v11H9l-5 3v-14Z" />
        <path d="M8 9.5h8M8 13h5" />
      </>
    ),
  },
  {
    href: "/admin/parametres",
    label: "Paramètres",
    description: "Accéder aux paramètres d’administration.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V4a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2.9Z" />
      </>
    ),
  },
] as const;

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: services, count: servicesCount, error } = await supabase
    .from("services")
    .select("category", { count: "exact" });

  if (error) {
    throw new Error(
      `Impossible de charger les statistiques des services : ${error.message}`
    );
  }

  const counters = {
    services: 0,
    categories: 0,
    messages: 0,
  };
  counters.services = servicesCount ?? services.length;
  counters.categories = new Set(
    services
      .map(({ category }) => category)
      .filter((category): category is string => Boolean(category))
  ).size;

  const stats = [
    {
      label: "Services configurés",
      value: counters.services,
      detail: "Enregistrements dans Supabase",
      icon: (
        <>
          <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" />
          <path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12v8.5" />
        </>
      ),
    },
    {
      label: "Catégories couvertes",
      value: counters.categories,
      detail: "Catégories présentes dans les services",
      icon: (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </>
      ),
    },
    {
      label: "Messages",
      value: counters.messages,
      detail: "La réception des messages de contact n’est pas encore configurée",
      icon: (
        <>
          <path d="M4 5.5h16v11H9l-5 3v-14Z" />
          <path d="M8 9.5h8M8 13h5" />
        </>
      ),
    },
  ];

  return (
    <div className="-mx-4 -my-8 min-h-full bg-zinc-50 px-4 py-8 text-zinc-900 sm:-mx-6 sm:px-6 md:-mx-10 md:-my-10 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-medium text-zinc-600">Administration</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tableau de bord
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
            Vue d’ensemble des données du site et accès rapide à leur gestion.
          </p>
        </div>

        <section
          aria-label="Statistiques du site"
          className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium text-zinc-600">{stat.label}</p>
                <span className="flex size-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-[18px]"
                  >
                    {stat.icon}
                  </svg>
                </span>
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-zinc-500">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="admin-sections-title" className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Raccourcis
              </p>
              <h2 id="admin-sections-title" className="mt-2 text-xl font-semibold">
                Gestion du site
              </h2>
            </div>
            <p className="text-sm text-zinc-600">
              Accédez directement aux rubriques d’administration.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.href}
                href={shortcut.href}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors group-hover:border-zinc-300 group-hover:text-zinc-950">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      {shortcut.icon}
                    </svg>
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 text-zinc-500 transition-colors group-hover:text-zinc-900"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </div>
                <h3 className="mt-5 text-base font-semibold text-zinc-900">
                  {shortcut.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {shortcut.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
