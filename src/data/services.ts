export type ServiceSection = {
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

export type Service = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  imageAlt: string;
  heroImagePosition?: string;
  heroEyebrow: string;
  ctaLabel: string;
  secondaryCtaLabel: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sections: readonly ServiceSection[];
  videoUrl?: string;
};

export const services = [
  {
    id: 1,
    slug: "maitresse-de-ceremonie",
    title: "Maîtresse de Cérémonie (MC)",
    shortDescription: "Donner du rythme à vos événements et créer une présence qui rassemble.",
    detailedDescription:
      "J'installe le rythme, la clarté et l'élégance nécessaires pour guider chaque séquence avec précision, tout en respectant le protocole et l'identité de votre événement.",
    image: "/images/profil.jpg",
    imageAlt: "Saliou Djan Diaby lors d'une prestation de maîtresse de cérémonie",
    heroEyebrow: "Une présence qui donne le ton",
    ctaLabel: "Parlons de votre événement",
    secondaryCtaLabel: "Découvrir le savoir-faire",
    sectionEyebrow: "L'art de conduire un moment",
    sectionTitle: "Une cérémonie à votre image",
    sections: [
      {
        eyebrow: "Une présence qui donne le ton",
        title: "Le protocole au service de l'émotion",
        paragraphs: [
          "Un événement réussi commence par une atmosphère juste. En tant que Maîtresse de Cérémonie, j'installe le rythme, la clarté et l'élégance nécessaires pour que chaque séquence trouve naturellement sa place.",
          "De l'ouverture aux transitions, je veille au respect du protocole, à la fluidité des prises de parole et à la coordination avec les équipes techniques. Votre public est guidé avec précision, sans jamais perdre la spontanéité du moment.",
        ],
        mediaType: "image",
        image: "/images/profil.jpg",
        imageAlt: "Saliou Djan Diaby lors d'une prestation de maîtresse de cérémonie",
        imagePosition: "object-[center_30%]",
      },
      {
        eyebrow: "Une méthode, une voix, un impact",
        title: "Une cérémonie maîtrisée jusque dans les détails",
        paragraphs: [
          "Chaque mission commence par une écoute attentive de vos objectifs, de votre public et de l'identité de votre événement. Nous préparons ensemble le déroulé, les messages clés et les moments qui méritent une attention particulière.",
          "Vous bénéficiez d'une présence fiable, d'une expression précise et d'une capacité d'adaptation constante. Le résultat : des invités engagés, des intervenants sereins et une cérémonie qui laisse une impression durable.",
        ],
        mediaType: "video",
        image: "/images/profil.jpg",
        imageAlt: "Aperçu vidéo d'une cérémonie animée par Saliou Djan Diaby",
        imagePosition: "object-[center_65%]",
        videoLabel: "Vidéo de présentation",
        videoDescription: "Un aperçu de ma manière d'accompagner vos cérémonies.",
      },
    ],
  },
  {
    id: 2,
    slug: "publicite-valorisation-marques",
    title: "Publicité & Valorisation de marques",
    shortDescription: "Renforcer la visibilité des marques et donner de l'impact à leurs messages.",
    detailedDescription:
      "J'accompagne les marques dans la conception de messages publicitaires clairs et la valorisation de leur identité auprès de leurs publics.",
    image: "/images/format-art-oratoire.jpg",
    imageAlt: "Support de communication visuelle",
    heroEyebrow: "Des messages de marque qui marquent",
    ctaLabel: "Parlons de votre marque",
    secondaryCtaLabel: "Découvrir l'approche",
    sectionEyebrow: "Faire rayonner votre identité",
    sectionTitle: "Une communication claire et mémorable",
    sections: [
      {
        eyebrow: "Une identité qui se distingue",
        title: "Mettre en valeur votre marque",
        paragraphs: [
          "Une communication efficace repose sur une identité lisible et des messages adaptés à chaque public. Nous faisons ressortir ce qui rend votre marque singulière.",
          "Chaque proposition vise à renforcer votre visibilité et à créer une expérience cohérente avec vos objectifs et votre image.",
        ],
        mediaType: "image",
        image: "/images/format-art-oratoire.jpg",
        imageAlt: "Support de communication pour une marque",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Une stratégie adaptée à vos objectifs",
        title: "Faire entendre le bon message",
        paragraphs: [
          "De la réflexion au choix du format, nous construisons une communication cohérente avec votre marque, votre audience et le résultat recherché.",
          "Les messages sont travaillés pour être compréhensibles, reconnaissables et porteurs de votre identité.",
        ],
        mediaType: "video",
        image: "/images/format-art-oratoire.jpg",
        imageAlt: "Aperçu d'une campagne de communication",
        imagePosition: "object-center",
        videoLabel: "Présentation de l'approche",
        videoDescription: "Un aperçu des étapes de valorisation d'une marque.",
      },
    ],
  },
  {
    id: 3,
    slug: "creation-production-emissions",
    title: "Création & production d'émissions",
    shortDescription: "Imaginer et produire des émissions engageantes, de l'idée à la réalisation.",
    detailedDescription:
      "J'accompagne la création et la production d'émissions en veillant à la cohérence du concept, au rythme des séquences et à l'expérience du public.",
    image: "/images/emission-hero.jpg",
    imageAlt: "Saliou Djan Diaby en studio pendant l'enregistrement d'une émission",
    heroImagePosition: "40% center",
    heroEyebrow: "Des émissions pensées pour leur public",
    ctaLabel: "Parlons de votre émission",
    secondaryCtaLabel: "Découvrir le processus",
    sectionEyebrow: "De l'idée à l'écran",
    sectionTitle: "Créer des formats vivants et cohérents",
    sections: [
      {
        eyebrow: "Un concept avec une direction claire",
        title: "Donner forme à votre émission",
        paragraphs: [
          "Chaque émission commence par une idée, un public et une intention. Nous définissons un concept et des séquences qui donnent une identité claire au format.",
          "Le ton, le rythme et le déroulé sont pensés pour maintenir l'intérêt et servir le sujet de chaque épisode.",
        ],
        mediaType: "image",
        image: "/images/emission-plateau-radio.jpg",
        imageAlt: "Équipe réunie autour des microphones dans un studio radio",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Une production maîtrisée",
        title: "Accompagner chaque étape de production",
        paragraphs: [
          "La préparation et la coordination permettent de donner vie au concept en respectant les objectifs, le format et les contraintes du projet.",
          "Chaque étape contribue à produire une émission fluide, cohérente et adaptée à son audience.",
        ],
        mediaType: "video",
        image: "/images/emission-hero.jpg",
        imageAlt: "Aperçu d'une émission enregistrée en studio",
        imagePosition: "object-center",
        videoLabel: "Découvrir le format",
        videoDescription: "Un aperçu de la création et de la production d'une émission.",
      },
    ],
  },
] as const satisfies readonly Service[];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}