export type ActualitesPageData = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    titleSuffix: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  firstBlock: {
    indexLabel: string;
    indexDescription: string;
    counter: string;
    category: string;
    date: string;
    dateTime: string;
    title: string;
    paragraphs: readonly string[];
    image: string;
    imageAlt: string;
    imageBadge: string;
  };
  secondBlock: {
    indexLabel: string;
    title: string;
    paragraphs: readonly string[];
    keyPoints: readonly string[];
    mediaType: "video" | "image";
    image: string;
    imageAlt: string;
    mediaLabel: string;
    mediaDescription: string;
    playAriaLabel: string;
  };
};

export const actualites = {
  hero: {
    eyebrow: "Le journal de la parole",
    title: "Actualités",
    titleAccent: "&",
    titleSuffix: "événements",
    subtitle:
      "Rencontres, prises de parole et moments forts : découvrez les histoires qui nourrissent une vision engagée de l'événementiel et de la transmission.",
    image: "/images/actualite-1.jpg",
    imageAlt: "Thierno Ila Diallo pendant un échange professionnel",
  },
  firstBlock: {
    indexLabel: "01 / Rencontre",
    indexDescription: "À la une",
    counter: "Temps fort",
    category: "Événement",
    date: "15 juin 2024",
    dateTime: "2024-06-15",
    title: "Quand la parole crée des ponts",
    paragraphs: [
      "Chaque rencontre est une occasion de faire circuler les idées, de donner confiance et de créer une énergie collective. À travers l'animation et la prise de parole, je m'attache à donner à chaque moment le rythme et la présence qu'il mérite.",
      "Retour sur un temps d'échange placé sous le signe de l'écoute, de l'engagement et de la transmission.",
    ],
    image: "/images/actualite-1.jpg",
    imageAlt: "Thierno Ila Diallo lors d'une rencontre professionnelle",
    imageBadge: "Rencontre & partage",
  },
  secondBlock: {
    indexLabel: "02 / En images",
    title: "La parole se vit aussi en mouvement",
    paragraphs: [
      "Un événement ne se résume pas à un programme. Il se construit dans les regards, les voix et les échanges qui lui donnent son énergie. Chaque détail compte pour créer une expérience sincère, fluide et mémorable.",
    ],
    keyPoints: [
      "Une présence qui donne du rythme à chaque séquence",
      "Une attention portée au public et à son énergie",
      "Des messages clairs, incarnés et fédérateurs",
    ],
    mediaType: "video",
    image: "/images/actualite-1.jpg",
    imageAlt: "Aperçu d'une rencontre animée par Thierno Ila Diallo",
    mediaLabel: "Extrait vidéo à venir",
    mediaDescription: "Retrouvez prochainement les coulisses de ces échanges.",
    playAriaLabel: "Vidéo bientôt disponible",
  },
} as const satisfies ActualitesPageData;