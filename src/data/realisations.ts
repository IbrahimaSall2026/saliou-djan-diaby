export type RealisationCategory =
  | "Maîtrise de cérémonie"
  | "Formation"
  | "Conférence";

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
    slug: "animation-de-ceremonies",
    title: "Animation de Cérémonies",
    category: "Maîtrise de cérémonie",
    description: "Une animation élégante, rythmée et maîtrisée pour donner de l'impact à vos événements institutionnels et galas.",
    detailedDescription:
      "Je veille au rythme, au protocole et à la fluidité des prises de parole pour faire de chaque cérémonie un moment clair et mémorable.",
    image: "/images/animation-ceremonie.jpg",
    imageAlt: "Animation d'une cérémonie sur scène",
    heroEyebrow: "Réalisations",
    ctaLabel: "Organiser votre cérémonie",
    secondaryCtaLabel: "Découvrir le savoir-faire",
    sectionEyebrow: "Une présence qui donne le ton",
    sectionTitle: "La maîtrise de chaque moment",
    sections: [
      {
        eyebrow: "Protocole et prestance",
        title: "Porter l'événement avec assurance",
        paragraphs: [
          "Une cérémonie réussie repose sur une présence qui sait guider sans effacer l'instant. Au pupitre, notamment lors d'événements à l'Hôtel Kaloum, chaque prise de parole est préparée avec précision et portée avec naturel.",
          "Le protocole, les transitions et la gestion du public sont maîtrisés pour maintenir l'attention, donner de la fluidité au programme et laisser à chaque intervenant la place qui lui revient.",
        ],
        mediaType: "image",
        image: "/images/animation-ceremonie.jpg",
        imageAlt: "Aperçu d'une cérémonie animée avec élégance",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Rythme et direction artistique",
        title: "Créer une expérience qui reste en mémoire",
        paragraphs: [
          "Le dynamisme naît d'un timing juste: les séquences s'enchaînent avec énergie, les silences sont maîtrisés et les temps forts trouvent leur relief. L'animation accompagne le public sans jamais le brusquer.",
          "En lien avec les équipes et les contraintes techniques, la direction artistique crée une atmosphère cohérente, élégante et fidèle à l'identité de votre événement.",
        ],
        mediaType: "video",
        image: "/images/animation-ceremonie.jpg",
        imageAlt: "Aperçu vidéo d'une animation de cérémonie",
        imagePosition: "object-center",
        videoLabel: "Voir une animation",
        videoDescription: "Un aperçu du rythme, de la présence et de l'attention portée à chaque détail.",
      },
    ],
  },
  {
    id: 2,
    slug: "formations-dispensees",
    title: "Formations dispensées",
    category: "Formation",
    description: "Transmettre la puissance de la parole pour révéler des voix capables d'inspirer, de convaincre et de créer un impact durable.",
    detailedDescription:
      "J'accompagne chaque participant avec une pédagogie concrète, exigeante et bienveillante, de la technique à la pleine expression.",
    image: "/images/formations-dispensees.jpg",
    imageAlt: "Formation à l'art oratoire",
    heroEyebrow: "Réalisations",
    ctaLabel: "Réserver une formation",
    secondaryCtaLabel: "Découvrir la pédagogie",
    sectionEyebrow: "Une pédagogie qui révèle",
    sectionTitle: "Faire de chaque voix une force",
    sections: [
      {
        eyebrow: "Approche pédagogique",
        title: "Accompagner les talents vers leur pleine expression",
        paragraphs: [
          "Une parole forte ne s'improvise pas. Elle se construit à partir de la personnalité, des objectifs et de l'expérience de chaque participant.",
          "Les exercices pratiques, les retours précis et la mise en situation permettent de gagner en clarté, en confiance et en présence, tout en respectant une voix singulière.",
        ],
        mediaType: "image",
        image: "/images/format-art-oratoire.jpg",
        imageAlt: "Participant accompagné pendant une formation à l'art oratoire",
        imagePosition: "object-center",
      },
      {
        eyebrow: "De la technique à l'impact",
        title: "Transformer la prise de parole en expérience",
        paragraphs: [
          "Respiration, structure, diction et langage corporel deviennent des outils concrets pour mieux faire passer une idée et toucher un public.",
          "Chaque formation crée un espace d'expérimentation exigeant et bienveillant, où la progression se mesure dans la confiance retrouvée et l'impact réel des messages.",
        ],
        mediaType: "video",
        image: "/images/formations-dispensees.jpg",
        imageAlt: "Aperçu vidéo d'une formation à l'art oratoire",
        imagePosition: "object-center",
        videoLabel: "Extrait de formation",
        videoDescription: "Découvrez une séquence dédiée à la présence, à la voix et à la transmission d'un message.",
      },
    ],
  },
  {
    id: 3,
    slug: "interventions-dexpert",
    title: "Interventions d'expert",
    category: "Conférence",
    description: "Éclairer les décisions stratégiques, faire dialoguer les perspectives et accompagner les ambitions qui façonnent le développement économique.",
    detailedDescription:
      "Je transforme les sujets complexes en perspectives accessibles et directement utiles à la décision, dans un dialogue vivant avec les publics.",
    image: "/images/intervention-panel-simandou.jpg",
    imageAlt: "Intervention d'expert lors d'une table ronde sur le développement économique",
    heroEyebrow: "Réalisations",
    ctaLabel: "Échanger sur votre projet",
    secondaryCtaLabel: "Découvrir l'expertise",
    sectionEyebrow: "Analyse et transmission",
    sectionTitle: "Mettre l'expertise en mouvement",
    sections: [
      {
        eyebrow: "Conseil stratégique",
        title: "Partager une lecture claire des enjeux",
        paragraphs: [
          "Une intervention d'expert transforme des sujets complexes en perspectives accessibles et directement utiles à la décision.",
          "À travers des analyses concrètes, des échanges ciblés et un regard indépendant, chaque intervention aide les équipes à clarifier leurs priorités et à faire émerger des pistes d'action solides.",
        ],
        mediaType: "image",
        image: "/images/intervention-costume-noir.jpg",
        imageAlt: "Expert partageant son analyse lors d'une intervention professionnelle",
        imagePosition: "object-top",
      },
      {
        eyebrow: "Tables rondes et développement",
        title: "Faire circuler les idées pour construire l'avenir",
        paragraphs: [
          "Les tables rondes créent un dialogue vivant entre décideurs, acteurs de terrain et nouvelles voix. La parole devient un levier pour confronter les expériences et faire avancer les projets.",
          "La modération donne du rythme aux échanges, fait ressortir les convergences et ouvre des conversations utiles au développement économique et social.",
        ],
        mediaType: "video",
        image: "/images/intervention-panel-simandou.jpg",
        imageAlt: "Aperçu vidéo d'une intervention d'expert",
        imagePosition: "object-center",
        videoLabel: "Voir une intervention",
        videoDescription: "Un aperçu de la présence, de l'analyse et de la dynamique d'un échange d'expert.",
      },
    ],
  },
] as const satisfies readonly Realisation[];

export function getRealisationBySlug(slug: string) {
  return realisations.find((realisation) => realisation.slug === slug);
}