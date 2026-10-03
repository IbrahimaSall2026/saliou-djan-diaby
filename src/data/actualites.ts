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
    image: "/images/actualite-independance-guinee.jpg",
    imageAlt: "Saliou Djan Diaby drapée aux couleurs du drapeau guinéen",
  },
  firstBlock: {
    indexLabel: "01 / Fête nationale",
    indexDescription: "À la une",
    counter: "2 octobre",
    category: "Célébration nationale",
    date: "2 octobre 2026",
    dateTime: "2026-10-02",
    title: "Bonne fête de l'Indépendance à notre chère Guinée ! 🇬🇳",
    paragraphs: [
      "Célébrer l'indépendance de la Guinée, c'est honorer l'histoire de notre beau pays, mais c'est aussi réaffirmer notre engagement pour son avenir. En tant que journaliste, mon rôle est de raconter nos histoires, de mettre en lumière nos talents et de porter la voix de notre peuple avec intégrité. En tant que MC, c'est un privilège de faire vibrer nos grands moments de communion, de dynamiser nos scènes et de célébrer l'excellence guinéenne. Enfin, en tant que créatrice de contenu, c'est une fierté quotidienne de valoriser notre culture, notre patrimoine et notre énergie à travers le numérique. À travers chaque mot, chaque micro tendu et chaque création partagée, c'est l'âme de la Guinée que nous faisons rayonner. Joyeuse fête nationale à toutes et à tous ! Que la paix, l'unité et la prospérité continuent d'illuminer notre nation. ✨",
    ],
    image: "/images/actualite-independance-guinee.jpg",
    imageAlt: "Célébration de la fête de l'Indépendance de la Guinée",
    imageBadge: "Fête de l'Indépendance",
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
    image: "/images/actualite-independance-guinee.jpg",
    imageAlt: "Saliou Djan Diaby drapée aux couleurs du drapeau guinéen",
    mediaLabel: "Extrait vidéo à venir",
    mediaDescription: "Retrouvez prochainement les coulisses de ces échanges.",
    playAriaLabel: "Vidéo bientôt disponible",
  },
} as const satisfies ActualitesPageData;