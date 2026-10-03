import Image from "next/image";
import Link from "next/link";

export default function APropos() {
	return (
		<section className="border-y border-white/10 bg-zinc-950 py-16 md:py-24">
			<div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-8">
				<div className="max-w-xl">
					<p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
						À propos
					</p>
					<h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
						Des événements et des émissions qui marquent.
					</h2>
					<p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
						Maîtresse de cérémonie, journaliste et productrice d&apos;émissions,
						j&apos;accompagne vos événements et vos projets de la préparation à
						leur réalisation, avec rigueur et sens du récit.
					</p>
					<Link
						href="/a-propos"
						className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
					>
						En savoir plus
						<span aria-hidden="true" className="text-lg leading-none">
							&rarr;
						</span>
					</Link>
				</div>

				<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30">
					<Image
						src="/images/portrait-saliou.jpg"
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
