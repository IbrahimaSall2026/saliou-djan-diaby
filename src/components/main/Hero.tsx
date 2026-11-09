import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="bg-blue-950 py-16 md:py-24">
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
				<div className="flex flex-col items-start">
					<p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200 sm:text-sm">
						MAÎTRESSE DE CÉRÉMONIE • JOURNALISTE • PRODUCTRICE D&apos;ÉMISSIONS
					</p>
					<h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
						Bienvenue, je suis Saliou Djan Diaby
					</h1>
					<p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
						Maîtresse de cérémonie, journaliste et productrice d&apos;émissions,
						je vous accompagne avec écoute et enthousiasme pour faire de vos
						événements et de vos projets des moments vivants, fluides et mémorables.
					</p>
					<div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
						<Link
							href="/contact"
							className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors duration-300 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
						>
							Me contacter
						</Link>
						<Link
							href="/realisations"
							className="inline-flex items-center rounded-full border border-blue-200/50 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
						>
							Voir mes réalisations
						</Link>
					</div>
				</div>

				<div className="relative mx-auto h-[360px] w-full max-w-xl sm:h-[480px] lg:h-[580px]">
					<div
						aria-hidden="true"
						className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-indigo-400/10 blur-2xl"
					/>
					<div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-800 to-indigo-950 shadow-2xl shadow-black/30">
						<Image
							src="/images/hero-profile.jpg"
							alt="Saliou Djan Diaby lors d’une rencontre professionnelle"
							fill
							sizes="(max-width: 768px) 100vw, 576px"
							preload
							className="object-cover object-[center_35%]"
						/>
						<div
							aria-hidden="true"
							className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-blue-950/10"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
