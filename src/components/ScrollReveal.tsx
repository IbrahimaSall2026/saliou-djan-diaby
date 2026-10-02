"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
	useEffect(() => {
		if (
			window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
			!("IntersectionObserver" in window)
		) {
			return;
		}

		const observedSections = new WeakSet<HTMLElement>();
		const revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					(entry.target as HTMLElement).dataset.scrollReveal = "visible";
					revealObserver.unobserve(entry.target);
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
		);

		const observeNewSections = () => {
			document.querySelectorAll<HTMLElement>("main > section").forEach((section) => {
				if (observedSections.has(section)) return;
				observedSections.add(section);

				if (section.getBoundingClientRect().top <= window.innerHeight) return;

				section.dataset.scrollReveal = "pending";
				revealObserver.observe(section);
			});
		};

		observeNewSections();

		const pageObserver = new MutationObserver(observeNewSections);
		pageObserver.observe(document.body, { childList: true, subtree: true });

		return () => {
			pageObserver.disconnect();
			revealObserver.disconnect();
		};
	}, []);

	return null;
}