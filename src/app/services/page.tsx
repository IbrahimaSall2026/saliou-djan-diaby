import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Mes services | Saliou Djan Diaby",
  description:
    "Je vous accompagne en maîtrise de cérémonie, valorisation de marques et création et production d'émissions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <section className="border-b border-blue-800 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 md:px-8 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
            Savoir-faire &amp; accompagnement
          </p>
          <h1 className="page-title-enter mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Mes services pour faire vivre vos projets
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            De la scène aux plateaux de production, je mets mes expertises au
            service de votre événement, de votre marque ou de votre émission.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="services-list-title"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:px-8 md:py-28"
      >
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
            Mes expertises
          </p>
          <h2
            id="services-list-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Mon accompagnement
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-blue-800 bg-blue-900/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-blue-100 sm:text-base">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center self-start rounded-full border border-blue-200/50 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Découvrir mon approche
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
