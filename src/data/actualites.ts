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
    title: "Bonne fête de l'indépendance à notre chère Guinée",
    titleAccent: "",
    titleSuffix: "",
    subtitle:
      "Pour moi, célébrer la patrie, c'est honorer le travail quotidien, la sueur et l'engagement de chaque citoyen pour bâtir un avenir prospère et uni.",
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
      "Célébrer l'indépendance de la Guinée, c'est honorer l'histoire de mon beau pays et réaffirmer mon engagement pour son avenir. En tant que journaliste, je raconte nos histoires, mets en lumière nos talents et porte la voix de notre peuple avec intégrité. En tant que maîtresse de cérémonie, j'ai le privilège de faire vibrer nos grands moments de communion, de dynamiser nos scènes et de célébrer l'excellence guinéenne. Enfin, comme créatrice de contenu, je valorise notre culture, notre patrimoine et notre énergie à travers le numérique. Par mes mots, chaque micro tendu et chaque création partagée, je contribue à faire rayonner l'âme de la Guinée. Joyeuse fête nationale à toutes et à tous ! Que la paix, l'unité et la prospérité continuent d'illuminer notre nation. ✨",
    ],
    image: "/images/actualite-independance-guinee.jpg",
    imageAlt: "Célébration de la fête de l'Indépendance de la Guinée",
    imageBadge: "Fête de l'Indépendance",
  },
  secondBlock: {
    indexLabel: "02 / En images",
    title: "La parole se vit aussi en mouvement",
    paragraphs: [
      "Un événement national ne se résume pas à un programme. Je le vois se construire dans les regards, les voix et l'énergie de celles et ceux qui œuvrent pour le pays. Chaque action compte pour faire rayonner la Guinée au travail.",
    ],
    keyPoints: [
      "J'insuffle l'énergie et la dynamique du travail bien fait par ma présence.",
      "Je m'engage à porter haut les valeurs et l'identité guinéennes.",
      "Je porte des messages clairs, fédérateurs et tournés vers le développement de notre nation.",
    ],
    mediaType: "video",
    image: "/images/actualite-independance-guinee.jpg",
    imageAlt: "Saliou Djan Diaby drapée aux couleurs du drapeau guinéen",
    mediaLabel: "Extrait vidéo à venir",
    mediaDescription: "Retrouvez prochainement les coulisses de ces échanges.",
    playAriaLabel: "Vidéo bientôt disponible",
  },
} as const satisfies ActualitesPageData;