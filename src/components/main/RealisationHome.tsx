import Image from "next/image";
import Link from "next/link";
import { realisations } from "@/data/realisations";

export default function RealisationHome() {
	return (
		<section className="border-t border-white/10 bg-zinc-950 py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-6 md:px-8">
				<div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
							Sur le terrain
						</p>
						<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
							Des paroles qui font avancer
						</h2>
						<p className="mt-4 text-base leading-7 text-slate-300">
							Cérémonies, productions publicitaires et émissions : quelques
							projets qui illustrent mon travail de maîtresse de cérémonie,
							journaliste et productrice.
						</p>
					</div>
					<Link
						href="/realisations"
						className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-blue-400/40 px-5 py-3 text-sm font-semibold text-blue-100 transition-colors duration-300 hover:border-blue-300 hover:bg-blue-950/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 sm:self-auto"
					>
						Voir toutes les réalisations
						<span aria-hidden="true" className="text-lg leading-none">
							&rarr;
						</span>
					</Link>
				</div>

				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{realisations.slice(0, 3).map((realisation) => (
						<article
							key={realisation.id}
							className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900 transition-colors duration-300 hover:border-blue-800/80"
						>
							<Link
								href={`/realisations/${realisation.slug}`}
								className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
							>
								<div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
									<Image
										src={realisation.image}
										alt={realisation.imageAlt}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-zinc-950/90 px-3 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
										{realisation.category}
									</span>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-200">
										{realisation.title}
									</h3>
									<p className="mt-3 text-sm leading-7 text-slate-300">
										{realisation.description}
									</p>
								</div>
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}