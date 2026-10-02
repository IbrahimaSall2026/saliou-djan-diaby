export type RealisationCategory =
  | "Cérémonie animée"
  | "Publicité réalisée"
  | "Émission produite";

export type RealisationSection = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  mediaType: "image" | "video";
  image: string;
  imageAlt: string;
  imagePosition?: string;
  videoLabel?: string;
  videoDescription?: string;
};

export type Realisation = {
  id: number;
  slug: string;
  title: string;
  category: RealisationCategory;
  description: string;
  detailedDescription: string;
  image: string;
  imageAlt: string;
  heroImagePosition?: "object-center" | "object-top";
  heroImagePositionMobile?: string;
  heroEyebrow: string;
  ctaLabel: string;
  secondaryCtaLabel: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sections: readonly RealisationSection[];
  videoUrl?: string;
}

export const realisations = [
  {
    id: 1,
    slug: "ceremonie-animee",
    title: "Cérémonie animée",
    category: "Cérémonie animée",
    description: "Sur scène, chaque cérémonie devient un rendez-vous vivant : les invités sont guidés, les prises de parole s'enchaînent et les temps forts trouvent leur place.",
    detailedDescription:
      "Des événements institutionnels aux galas, notamment à l'Hôtel Kaloum, Saliou s'appuie sur son expérience de terrain pour accompagner le programme avec précision et créer une expérience fluide pour le public.",
    image: "/images/mc-hero.jpg",
    imageAlt: "Saliou Djan Diaby lors d'une prise de parole sur scène, micro en main",
    heroImagePositionMobile: "36% center",
    heroEyebrow: "Réalisations",
    ctaLabel: "Organiser votre cérémonie",
    secondaryCtaLabel: "Découvrir le savoir-faire",
    sectionEyebrow: "Des cérémonies vécues sur le terrain",
    sectionTitle: "Des prises de parole qui font avancer l'événement",
    sections: [
      {
        eyebrow: "Au pupitre, au cœur de l'action",
        title: "Guider les temps forts avec justesse",
        paragraphs: [
          "Lors des cérémonies animées à l'Hôtel Kaloum et sur d'autres scènes événementielles, Saliou accompagne concrètement le déroulé : annonces, entrées, interventions et transitions se succèdent dans le respect du programme.",
          "La lecture de la salle et l'attention portée aux intervenants permettent de maintenir le lien avec le public, tout en laissant à chaque moment sa tonalité propre.",
        ],
        mediaType: "image",
        image: "/images/mc-realisation.jpg",
        imageAlt: "Saliou Djan Diaby animant une cérémonie au micro, au contact du public",
        imagePosition: "object-center",
      },
      {
        eyebrow: "L'impact d'une animation maîtrisée",
        title: "Transformer un programme en expérience collective",
        paragraphs: [
          "Une animation réussie se mesure à la fluidité de l'événement et à la qualité de l'attention dans la salle. Des transitions claires et un rythme bien tenu aident les invités à rester présents, du premier accueil au dernier temps fort.",
          "En coordination avec les organisateurs et les équipes techniques, Saliou ajuste sa conduite aux réalités du direct. Chaque prestation contribue ainsi à une cérémonie cohérente, accueillante et dont le public se souvient.",
        ],
        mediaType: "video",
        image: "/images/mc-realisation.jpg",
        imageAlt: "Aperçu d'une cérémonie animée par Saliou Djan Diaby devant son public",
        imagePosition: "object-center",
        videoLabel: "Voir une animation",
        videoDescription: "Un aperçu de l'expérience de terrain, du rythme et du lien créé avec le public lors d'une cérémonie.",
      },
    ],
  },
  {
    id: 2,
    slug: "publicite-realisee",
    title: "Publicité réalisée",
    category: "Publicité réalisée",
    description: "Une campagne tournée sur un vrai plateau, où Saliou prête sa présence et sa voix à la mise en valeur d'une marque.",
    detailedDescription:
      "Face caméra, elle incarne le message avec aisance et s'adapte au rythme de l'équipe de réalisation. Le tournage donne forme à un contenu publicitaire conçu pour présenter la marque et son univers à son public.",
    image: "/images/publicite-tournage.jpg",
    imageAlt: "Saliou assise sur un canapé pendant un tournage publicitaire, entourée de l'équipe et du matériel de production",
    heroEyebrow: "Réalisations",
    ctaLabel: "Parlons de votre marque",
    secondaryCtaLabel: "Découvrir les coulisses",
    sectionEyebrow: "Une réalisation en images",
    sectionTitle: "Du plateau à la rencontre avec le public",
    sections: [
      {
        eyebrow: "Au cœur du tournage",
        title: "Une présence au service du récit de marque",
        paragraphs: [
          "Sur ce plateau, Saliou intervient devant la caméra pour faire passer l'univers et le message de la marque avec justesse. Caméra, lumière et équipe de production réunies autour d'elle : chaque prise contribue au récit de la campagne.",
          "Son aisance face caméra, sa diction et son écoute des consignes lui permettent d'ajuster son interprétation au ton recherché, tout en gardant une présence naturelle à l'écran.",
        ],
        mediaType: "image",
        image: "/images/publicite-hero.jpg",
        imageAlt: "Saliou assise sur un canapé pendant la préparation d'un contenu publicitaire",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Le bilan après diffusion",
        title: "Évaluer l'écho de la campagne",
        paragraphs: [
          "Le travail ne s'arrête pas au tournage : la portée, les vues, les interactions ou les demandes générées peuvent être rapprochées des objectifs définis avec la marque.",
          "Ces indicateurs aident à comprendre comment le public reçoit la campagne et à orienter les prochaines prises de parole. Les résultats chiffrés varient selon les données de diffusion accessibles pour chaque projet.",
        ],
        mediaType: "video",
        image: "/images/publicite-hero.jpg",
        imageAlt: "Saliou assise sur un canapé pendant la préparation d'un contenu publicitaire",
        imagePosition: "object-center",
        videoLabel: "Les coulisses de la campagne",
        videoDescription: "Le plateau et les choix d'interprétation qui donnent corps au message publicitaire.",
      },
    ],
  },
  {
    id: 3,
    slug: "emission-produite",
    title: "Émission produite",
    category: "Émission produite",
    description: "Des émissions réalisées pour faire vivre les idées, donner la parole aux invités et créer un rendez-vous avec le public.",
    detailedDescription:
      "Du plateau radio aux formats de discussion, chaque projet mené à bien s'appuie sur une animation attentive, des échanges structurés et un rythme qui rend les sujets accessibles.",
    image: "/images/emission-hero.jpg",
    imageAlt: "Saliou Djan Diaby en studio pendant l'enregistrement d'une émission",
    heroImagePosition: "object-top",
    heroEyebrow: "Réalisations",
    ctaLabel: "Créer votre émission",
    secondaryCtaLabel: "Voir les coulisses",
    sectionEyebrow: "Des projets réalisés en studio",
    sectionTitle: "Des échanges conçus pour laisser une empreinte",
    sections: [
      {
        eyebrow: "Une émission, un rendez-vous",
        title: "Faire émerger les idées par la conversation",
        paragraphs: [
          "Les émissions réalisées donnent un cadre aux conversations et créent un espace où les invités peuvent partager leurs expériences et leurs points de vue. Le public suit un échange vivant, construit autour d'un sujet et de voix qui le font avancer.",
          "À l'animation, Saliou veille à la qualité de l'écoute, relance les discussions et fait circuler la parole pour transformer chaque séquence en un moment clair et engageant.",
        ],
        mediaType: "image",
        image: "/images/emission-plateau-radio.jpg",
        imageAlt: "Équipe réunie autour des microphones pendant l'enregistrement d'une émission radio",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Un projet mené du plateau à l'audience",
        title: "Installer un rythme qui retient l'attention",
        paragraphs: [
          "La préparation du conducteur, les transitions et la coordination des intervenants donnent une structure fluide à chaque émission, sans brider la spontanéité des échanges.",
          "L'impact se construit dans la durée : des sujets mieux compris, des invités impliqués et un public qui a envie de suivre la conversation. Chaque réalisation affirme ainsi un format reconnaissable et ouvre la voie à de nouveaux rendez-vous.",
        ],
        mediaType: "video",
        image: "/images/emission-plateau-radio.jpg",
        imageAlt: "Aperçu du plateau radio et de l'équipe en production d'émission",
        imagePosition: "object-center",
        videoLabel: "Les coulisses d'une émission",
        videoDescription: "Le plateau, les échanges et le travail d'équipe qui donnent vie aux émissions réalisées.",
      },
    ],
  },
] as const satisfies readonly Realisation[];

export function getRealisationBySlug(slug: string) {
  return realisations.find((realisation) => realisation.slug === slug);
}