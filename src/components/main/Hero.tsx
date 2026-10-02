import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="bg-neutral-950 py-16 md:py-24">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
				<div className="flex flex-col items-start">
					<p className="hero-badge-animation mb-5 cursor-pointer rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-200 transition duration-300 hover:border-slate-500 hover:bg-slate-900/80 hover:text-white">
						MAÎTRE DE CÉRÉMONIE (MC) • FORMATEUR EN ART ORATOIRE
					</p>
					<h1 className="text-4xl font-bold text-white md:text-6xl">
						Diallo Thierno Ila
					</h1>
					<p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
						Sublimez vos événements et captivez votre public. J&apos;allie art
						oratoire, charisme et maîtrise du protocole pour transformer chaque
						intervention en un moment mémorable.
					</p>
					<div className="mt-8 flex w-full justify-center">
						<Link
							href="/contact"
							className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
						>
							Me contacter
						</Link>
					</div>
				</div>

				<div className="relative h-[300px] w-full overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl shadow-black/30 sm:h-[400px] lg:h-[580px]">
					<Image
						src="/images/profil.jpg"
						alt="Portrait de Diallo Thierno Ila"
						fill
						sizes="(max-width: 768px) 100vw, 448px"
						priority
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
