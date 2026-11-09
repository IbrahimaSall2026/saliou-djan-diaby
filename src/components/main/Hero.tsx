import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="bg-blue-950 px-6 py-16 md:px-8 md:py-24">
			<div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col items-start justify-center rounded-[2rem] border border-blue-800 bg-gradient-to-br from-blue-900 to-indigo-950 p-7 shadow-2xl shadow-black/20 sm:p-10 lg:p-12">
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
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Link
							href="/contact"
							className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors duration-300 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
						>
							Me contacter
						</Link>
						<Link
							href="/services"
							className="inline-flex items-center rounded-full border border-blue-200/50 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
						>
							Découvrir mes services
						</Link>
					</div>
				</div>

				<div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-blue-300/20 bg-blue-900 shadow-2xl shadow-black/30">
					<Image
						src="/images/hero-profile.jpg"
						alt="Saliou Djan Diaby lors d’une rencontre professionnelle"
						width={720}
						height={1080}
						sizes="(max-width: 1024px) 100vw, 50vw"
						preload
						className="h-auto w-full object-contain"
					/>
				</div>
			</div>
		</section>
	);
}
