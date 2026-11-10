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
  secondaryCtaLabel?: string;
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
    description: "Sur scène, je fais de chaque cérémonie un rendez-vous vivant : je guide les invités, rythme les prises de parole et donne à chaque temps fort sa juste place.",
    detailedDescription:
      "De la maîtrise de cérémonie aux galas, j'orchestre les prises de parole et les temps forts avec précision. Mon expérience de terrain contribue à un programme fluide, vivant et pensé pour votre public.",
    image: "/images/mc-hero.jpg",
    imageAlt: "Saliou Djan Diaby lors d'une prise de parole sur scène, micro en main",
    heroImagePositionMobile: "36% center",
    heroEyebrow: "Réalisations",
    ctaLabel: "Organiser votre cérémonie",
    sectionEyebrow: "Des cérémonies vécues sur le terrain",
    sectionTitle: "Des prises de parole qui font avancer l'événement",
    sections: [
      {
        eyebrow: "Au pupitre, au cœur de l'action",
        title: "Guider les temps forts avec justesse",
        paragraphs: [
          "Lors de cérémonies et d'événements professionnels, je veille au bon déroulement du programme : annonces, présentations, interventions et transitions s'enchaînent avec fluidité.",
          "Je lis la salle et reste attentive aux intervenants pour maintenir le lien avec le public, tout en laissant à chaque moment sa tonalité propre.",
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
          "Je mesure la réussite d'une animation à la fluidité de l'événement et à la qualité de l'attention dans la salle. Des transitions claires et un rythme bien tenu aident les invités à rester présents, du premier accueil au dernier temps fort.",
          "En coordination avec les organisateurs et les équipes techniques, j'ajuste ma conduite aux réalités du direct pour offrir une cérémonie cohérente, accueillante et mémorable.",
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
    description: "Sur un vrai plateau, je prête ma présence et ma voix à une campagne qui met votre marque en valeur.",
    detailedDescription:
      "Face caméra, j'incarne votre message avec aisance et m'adapte au rythme de l'équipe de réalisation. Je contribue à créer un contenu publicitaire qui présente votre marque et son univers à votre public.",
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
          "Sur ce plateau, je prends la parole devant la caméra pour transmettre l'univers et le message de votre marque avec justesse. Caméra, lumière et équipe de production se réunissent autour de chaque prise pour donner vie au récit de la campagne.",
          "Mon aisance face caméra, ma diction et mon écoute des consignes me permettent d'ajuster mon interprétation au ton recherché, tout en gardant une présence naturelle à l'écran.",
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
          "Mon travail ne s'arrête pas au tournage : nous pouvons rapprocher la portée, les vues, les interactions ou les demandes générées des objectifs définis avec votre marque.",
          "Ces indicateurs nous aident à comprendre comment le public reçoit la campagne et à orienter les prochaines prises de parole. Les résultats chiffrés varient selon les données de diffusion accessibles pour chaque projet.",
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
    description: "Je réalise des émissions qui font vivre les idées, donnent la parole aux invités et créent un rendez-vous avec le public.",
    detailedDescription:
      "Du plateau radio aux formats de discussion, je m'appuie sur une animation attentive, des échanges structurés et un rythme qui rend les sujets accessibles.",
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
          "Je donne un cadre aux conversations et crée un espace où les invités peuvent partager leurs expériences et leurs points de vue. Je construis un échange vivant autour d'un sujet et de voix qui le font avancer.",
          "À l'animation, je veille à la qualité de l'écoute, relance les discussions et fais circuler la parole pour transformer chaque séquence en un moment clair et engageant.",
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
          "Je prépare le conducteur, les transitions et la coordination des intervenants pour donner une structure fluide à chaque émission, sans brider la spontanéité des échanges.",
          "Je construis l'impact dans la durée : des sujets mieux compris, des invités impliqués et un public qui a envie de suivre la conversation. Chaque réalisation affirme ainsi un format reconnaissable et ouvre la voie à de nouveaux rendez-vous.",
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