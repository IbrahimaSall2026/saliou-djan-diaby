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
  heroImagePositionMobile?: string;
  heroEyebrow: string;
  ctaLabel: string;
  secondaryCtaLabel?: string;
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
    shortDescription: "Une présence élégante, une parole maîtrisée et un sens aigu du protocole pour faire de chaque événement un moment fort.",
    detailedDescription:
      "Des cérémonies institutionnelles aux événements grand public, je prépare le déroulé, présente les intervenants et conduis chaque séquence avec éloquence. Ma maîtrise du protocole et de la scène donne un rythme fluide à votre événement et une place juste à chaque prise de parole.",
    image: "/images/mc-hero.jpg",
    imageAlt: "Saliou Djan Diaby lors d'une prestation de maîtresse de cérémonie",
    heroImagePosition: "35% center",
    heroImagePositionMobile: "36% center",
    heroEyebrow: "Une présence qui donne le ton",
    ctaLabel: "Parlons de votre événement",
    sectionEyebrow: "Maîtrise de scène et sens du protocole",
    sectionTitle: "Le soin du détail, l'énergie du direct",
    sections: [
      {
        eyebrow: "Protocole et présence scénique",
        title: "Donner à chaque séquence sa juste place",
        paragraphs: [
          "En amont, je prépare avec rigueur le déroulé, les préséances, les noms et les prises de parole. Qu'il s'agisse d'une cérémonie institutionnelle, d'une conférence ou d'un événement grand public, cette préparation me permet d'enchaîner les temps forts avec fluidité et de respecter le ton que vous souhaitez donner à votre événement.",
          "Sur scène, ma diction claire, ma posture assurée et mon écoute attentive installent une relation de confiance avec les invités comme avec les intervenants, tout en valorisant chaque prise de parole.",
        ],
        mediaType: "image",
        image: "/images/mc-hero.jpg",
        imageAlt: "Saliou Djan Diaby au pupitre pendant une prise de parole sur scène",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Éloquence et énergie du direct",
        title: "Captiver le public, accompagner l'instant",
        paragraphs: [
          "Comme maîtresse de cérémonie, je fais vivre le programme sans en détourner l'attention. Je choisis une introduction juste, une transition naturelle ou une relance bien placée pour maintenir le rythme et créer un lien avec le public.",
          "Je m'adapte aux imprévus et à l'énergie de la salle avec calme et discernement. De la rencontre professionnelle au rendez-vous grand public, je transforme le protocole en une expérience accueillante, vivante et mémorable.",
        ],
        mediaType: "video",
        image: "/images/mc-hero.jpg",
        imageAlt: "Saliou Djan Diaby en scène, conduisant une cérémonie au micro",
        imagePosition: "object-center",
        videoLabel: "Vidéo de présentation",
        videoDescription: "Découvrez une présence scénique élégante, attentive au protocole et à l'énergie du public.",
      },
    ],
  },
  {
    id: 2,
    slug: "publicite-valorisation-marques",
    title: "Publicité & Valorisation de marques",
    shortDescription: "Faire émerger l'identité de votre marque grâce à une communication claire, incarnée et mémorable.",
    detailedDescription:
      "De la réflexion éditoriale à ma présence devant la caméra, je crée des contenus publicitaires cohérents avec votre univers. Chaque prise de parole met en valeur votre projet et rapproche votre message de votre public.",
    image: "/images/publicite-tournage.jpg",
    imageAlt: "Saliou assise sur un canapé pendant un tournage publicitaire, avec l'équipe et le matériel de production",
    heroImagePosition: "center 30%",
    heroImagePositionMobile: "28% center",
    heroEyebrow: "Communication, publicité & image de marque",
    ctaLabel: "Parlons de votre marque",
    secondaryCtaLabel: "Découvrir l'approche",
    sectionEyebrow: "Une présence au service de votre projet",
    sectionTitle: "Donner du sens et de l'impact à votre message",
    sections: [
      {
        eyebrow: "Des coulisses à la campagne",
        title: "Incarner votre message avec justesse",
        paragraphs: [
          "Je prépare chaque prise de parole en précisant le message, le ton et le public visé avant le tournage. Je veille à créer un contenu fidèle à l'identité de votre marque et facile à comprendre.",
          "À l'image, je porte votre message avec naturel et présence. En lien avec l'équipe de production, je veille à la cohérence entre le discours, l'univers visuel et les objectifs de votre projet.",
        ],
        mediaType: "image",
        image: "/images/publicite-hero.jpg",
        imageAlt: "Saliou assise sur un canapé pendant la préparation d'un contenu publicitaire",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Une stratégie adaptée à vos objectifs",
        title: "Valoriser les projets et les marques",
        paragraphs: [
          "Je donne à chaque projet une prise de parole qui lui ressemble. J'adapte le format et les mots à votre identité, à votre audience et au contexte de diffusion.",
          "Que vous souhaitiez présenter une marque, raconter un projet ou mettre en lumière une initiative, je vous aide à transmettre une idée claire et à créer un lien durable avec votre public.",
        ],
        mediaType: "video",
        image: "/images/publicite-tournage.jpg",
        imageAlt: "Équipe de tournage et matériel de studio autour de Saliou pendant une production publicitaire",
        imagePosition: "object-center",
        videoLabel: "Présentation de l'approche",
        videoDescription: "Un aperçu de la préparation, de la prise de parole et du travail d'équipe au service de votre image.",
      },
    ],
  },
  {
    id: 3,
    slug: "creation-production-emissions",
    title: "Création & production d'émissions",
    shortDescription: "De l'idée au plateau, concevoir des émissions claires, vivantes et pensées pour leur public.",
    detailedDescription:
      "J'accompagne la conception éditoriale, l'écriture et la production de formats radio, télévisuels et numériques. Du choix du sujet à la conduite du plateau, je veille à construire un récit cohérent et des échanges qui donnent envie d'écouter.",
    image: "/images/emission-hero.jpg",
    imageAlt: "Saliou Djan Diaby en studio pendant l'enregistrement d'une émission",
    heroImagePosition: "40% center",
    heroEyebrow: "Conception éditoriale, écriture & production",
    ctaLabel: "Parlons de votre émission",
    secondaryCtaLabel: "Explorer les coulisses",
    sectionEyebrow: "De l'écriture au plateau",
    sectionTitle: "Une idée forte, un format qui prend vie",
    sections: [
      {
        eyebrow: "Conception & écriture",
        title: "Donner une identité à chaque émission",
        paragraphs: [
          "Je commence chaque production par une intention claire : définir le sujet, le ton, la promesse éditoriale et le public auquel je m'adresse. Ces choix donnent au format sa personnalité et orientent son écriture.",
          "Je travaille le conducteur, les rubriques, les questions, les lancements et les transitions pour construire un récit fluide, garder le fil du sujet et laisser une place naturelle aux échanges.",
        ],
        mediaType: "image",
        image: "/images/emission-plateau-radio.jpg",
        imageAlt: "Équipe réunie autour des microphones pendant la préparation d'une émission radio",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Production & animation",
        title: "Faire vivre le format sur le plateau",
        paragraphs: [
          "Je prépare les séquences, coordonne les invités et rythme les prises de parole pour donner corps au projet. À l'animation, je veille à la qualité de l'écoute, relance les échanges et accompagne le déroulé avec naturel.",
          "En studio radio, sur un plateau télévisé ou pour un format numérique, je veille à ce que chaque choix de production soutienne le propos et l'expérience du public, de l'enregistrement jusqu'à la diffusion.",
        ],
        mediaType: "video",
        image: "/images/emission-plateau-radio.jpg",
        imageAlt: "Équipe de production réunie en studio autour des microphones pendant l'enregistrement d'une émission",
        imagePosition: "object-center",
        videoLabel: "Dans les coulisses d'une production",
        videoDescription: "Un aperçu de l'écriture, de la préparation du plateau et des échanges qui donnent vie au programme.",
      },
    ],
  },
] as const satisfies readonly Service[];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}