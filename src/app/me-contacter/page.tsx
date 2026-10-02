import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex-1 overflow-hidden bg-neutral-950 text-white">
      <section className="relative isolate min-h-[34rem] overflow-hidden border-b border-white/10 md:min-h-[42rem]">
        <Image
          src="/images/profil.jpg"
          alt="Portrait de Saliou Djan Diaby"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.92),rgba(10,10,10,0.52),rgba(10,10,10,0.72))]" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-7xl items-end px-6 pb-16 md:min-h-[42rem] md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              <span className="h-px w-10 bg-blue-300" aria-hidden="true" />
              Parlons de votre projet
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-8xl">
              Me contacter
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-200 md:text-lg">
              Une cérémonie, une formation ou une prise de parole à préparer ?
              Échangeons sur vos objectifs et imaginons ensemble le format juste.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28" aria-labelledby="contact-section-title">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(30rem,1.22fr)] lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              Un premier échange
            </p>
            <h2
              id="contact-section-title"
              className="mt-6 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
            >
              Donnons forme à une collaboration qui vous ressemble.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-neutral-400">
              Présentez-moi votre besoin, votre public et le contexte de votre
              événement. Je vous répondrai avec une première orientation claire
              et adaptée à votre projet.
            </p>

            <div className="mt-10 space-y-7 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Email
                </p>
                <a
                  href="mailto:contact@salioudjandiaby.com"
                  className="mt-2 inline-block text-base text-white transition-colors hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                >
                  contact@salioudjandiaby.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Téléphone / WhatsApp
                </p>
                <p className="mt-2 text-base text-white">Disponible sur demande</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Disponibilités
                </p>
                <p className="mt-2 text-base leading-7 text-white">
                  Du lundi au vendredi
                  <br />
                  De 9h30 à 17h30
                </p>
              </div>
            </div>

          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -inset-5 -z-10 hidden rounded-[2rem] border border-white/5 bg-white/[0.02] lg:block" />
            <form action="#" method="post" className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-neutral-200">
                    Nom et prénom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-blue-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-neutral-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-blue-300"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-neutral-200">
                  Sujet
                </label>
                <div className="relative mt-2">
                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    required
                    className="w-full appearance-none border-b border-white/20 bg-neutral-950 px-0 py-3 pr-10 text-base text-white outline-none transition-colors focus:border-blue-300"
                  >
                    <option value="" disabled>
                      -- Sélectionnez un service / sujet --
                    </option>
                    <option value="maitre-de-ceremonie">Maître de Cérémonie (MC)</option>
                    <option value="formateur-en-art-oratoire">Formateur en art oratoire</option>
                    <option value="conferencier">Conférencier</option>
                    <option value="autre-projet-collaboration">Autre projet / Collaboration</option>
                  </select>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-neutral-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-neutral-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full resize-y border-b border-white/20 bg-transparent px-0 py-3 text-base leading-7 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-blue-300"
                  placeholder="Décrivez votre besoin, la date et le format envisagé..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 sm:w-auto"
              >
                Envoyer ma demande
                <span aria-hidden="true" className="ml-3 text-lg leading-none">
                  &rarr;
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}