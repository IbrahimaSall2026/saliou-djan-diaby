import Image from "next/image";
import Link from "next/link";

export default function APropos() {
	return (
		<section className="border-y border-blue-900 bg-blue-950 py-16 md:py-24">
			<div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-8">
				<div className="max-w-xl">
					<p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
						À propos de moi
					</p>
					<h2 className="mt-5 max-w-[16ch] text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
						Je donne vie à vos idées et de l&apos;impact à vos projets.
					</h2>
					<p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
						De la conception à la réalisation, je vous accompagne avec créativité,
						passion et professionnalisme pour faire de chaque projet une réussite
						mémorable.
					</p>
					<Link
						href="/a-propos"
						className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
					>
						En savoir plus →
					</Link>
				</div>

				<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-blue-800 bg-blue-900 shadow-2xl shadow-black/30">
					<Image
						src="/images/mc-hero.jpg"
						alt="Saliou Djan Diaby prenant la parole lors d'une intervention"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover object-[center_15%]"
					/>
				</div>
			</div>
		</section>
	);
}
