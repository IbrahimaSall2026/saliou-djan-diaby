import Link from "next/link";
import { realisations } from "@/data/realisations";
import RealisationCarousel from "@/components/main/RealisationCarousel";

export default function RealisationHome() {
	return (
		<section className="border-t border-blue-900 bg-slate-900 py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-6 md:px-8">
				<div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
							Sur le terrain
						</p>
						<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
							Des paroles qui font avancer
						</h2>
						<p className="mt-4 text-base leading-7 text-slate-200">
							Cérémonies, productions publicitaires et émissions : quelques
							projets qui illustrent mon travail de maîtresse de cérémonie,
							journaliste et productrice.
						</p>
					</div>
					<Link
						href="/realisations"
						className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-blue-300/50 px-5 py-3 text-sm font-semibold text-blue-50 transition-colors duration-300 hover:border-blue-200 hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:self-auto"
					>
						Voir toutes les réalisations
						<span aria-hidden="true" className="text-lg leading-none">
							&rarr;
						</span>
					</Link>
				</div>

				<RealisationCarousel realisations={realisations.slice(0, 3)} />
			</div>
		</section>
	);
}