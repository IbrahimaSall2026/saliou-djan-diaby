const socialLinks = [
	{
		href: "https://www.linkedin.com/",
		label: "LinkedIn",
		color: "text-[#0A66C2] hover:bg-[#0A66C2]",
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
				<path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.5h3.8v11.2H3.3V9.5Zm6.1 0h3.6V11h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v5.8h-3.8v-5.1c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7v5.2H9.4V9.5Z" />
			</svg>
		),
	},
	{
		href: "https://www.facebook.com/share/18pvSMkmp1/",
		label: "Facebook",
		color: "text-[#1877F2] hover:bg-[#1877F2]",
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
				<path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H8v3.1h2.6v8h3.1Z" />
			</svg>
		),
	},
	{
		href: "https://www.youtube.com/",
		label: "YouTube",
		color: "text-[#FF0000] hover:bg-[#FF0000]",
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
				<path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
			</svg>
		),
	},
	{
		href: "https://www.tiktok.com/@sali.sdd?_r=1&_t=ZS-9AE1ECv7Fzw",
		label: "TikTok",
		color: "text-white hover:bg-black",
		icon: (
			<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
				<path d="M16.7 3c.3 1.8 1.3 3.1 3.3 3.2v3.1a8.2 8.2 0 0 1-3.3-1v6.2a6.5 6.5 0 1 1-5.6-6.4v3.3a3.2 3.2 0 1 0 2.4 3.1V3h3.2Z" />
			</svg>
		),
	},
] as const;

export default function Footer() {
	return (
		<footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8 lg:py-12">
				<div className="text-left">
					<p className="text-lg font-semibold tracking-wider text-white">
						Saliou Djan Diaby
					</p>
					<p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
						Formateur et conférencier, j&apos;accompagne les talents et les
						organisations dans leur progression.
					</p>
				</div>

				<div className="text-right">
					<h2 className="text-sm font-semibold uppercase tracking-wider text-white">
						Me retrouver
					</h2>
					<div className="mt-4 flex justify-end gap-3">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.label}
								className={`flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 transition-colors hover:text-white ${social.color}`}
							>
								<span className="h-5 w-5">{social.icon}</span>
							</a>
						))}
					</div>
				</div>
			</div>

			<div className="border-t border-slate-800 pt-4 pb-5 text-center">
				<p className="px-6 text-xs text-slate-400">
					© {new Date().getFullYear()} Saliou Djan Diaby. Tous droits réservés.
				</p>
			</div>
		</footer>
	);
}
