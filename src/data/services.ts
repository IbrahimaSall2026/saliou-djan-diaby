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
    shortDescription: "Une présence élégante, une parole maîtrisée et un sens aigu du protocole pour faire de chaque événement un moment fort.",
    detailedDescription:
      "Des cérémonies institutionnelles aux événements grand public, Saliou prépare le déroulé, présente les intervenants et conduit chaque séquence avec éloquence. Sa maîtrise du protocole et de la scène donne un rythme fluide à l'événement et une place juste à chaque prise de parole.",
    image: "/images/mc-hero.jpg",
    imageAlt: "Saliou Djan Diaby lors d'une prestation de maîtresse de cérémonie",
    heroImagePosition: "35% center",
    heroImagePositionMobile: "36% center",
    heroEyebrow: "Une présence qui donne le ton",
    ctaLabel: "Parlons de votre événement",
    secondaryCtaLabel: "Découvrir le savoir-faire",
    sectionEyebrow: "Maîtrise de scène et sens du protocole",
    sectionTitle: "Le soin du détail, l'énergie du direct",
    sections: [
      {
        eyebrow: "Protocole et présence scénique",
        title: "Donner à chaque séquence sa juste place",
        paragraphs: [
          "En amont, le déroulé, les préséances, les noms et les prises de parole sont préparés avec rigueur. Qu'il s'agisse d'une cérémonie institutionnelle, d'une conférence ou d'un événement grand public, cette préparation permet d'enchaîner les temps forts avec fluidité et de respecter le ton de votre événement.",
          "Sur scène, une diction claire, une posture assurée et une écoute attentive installent une relation de confiance avec les invités comme avec les intervenants, tout en valorisant chaque prise de parole.",
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
          "Une maîtresse de cérémonie fait vivre le programme sans en détourner l'attention. Une introduction juste, une transition naturelle ou une relance bien placée maintiennent le rythme et créent un lien avec le public.",
          "Saliou s'adapte aux imprévus et à l'énergie de la salle avec calme et discernement. De la rencontre professionnelle au rendez-vous grand public, cette présence attentive transforme le protocole en une expérience accueillante, vivante et mémorable.",
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
      "De la réflexion éditoriale à la présence devant la caméra, Saliou contribue à créer des contenus publicitaires cohérents avec votre univers. Chaque prise de parole met en valeur votre projet et rapproche votre message de son public.",
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
          "La préparation éditoriale permet de préciser le message, le ton et le public visé avant le tournage. Chaque choix contribue à créer un contenu fidèle à l'identité de votre marque et facile à comprendre.",
          "À l'image, Saliou porte votre message avec naturel et présence. En lien avec l'équipe de production, elle veille à la cohérence entre le discours, l'univers visuel et les objectifs de votre projet.",
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
          "Chaque projet mérite une prise de parole qui lui ressemble. Le choix du format et des mots s'adapte à votre identité, à votre audience et au contexte de diffusion.",
          "Qu'il s'agisse de présenter une marque, de raconter un projet ou de mettre en lumière une initiative, l'objectif est de transmettre une idée claire et de créer un lien durable avec le public.",
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
      "Saliou accompagne la conception éditoriale, l'écriture et la production de formats radio, télévisuels et numériques. Du choix du sujet à la conduite du plateau, chaque étape sert un récit cohérent et des échanges qui donnent envie d'écouter.",
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
          "Chaque production commence par une intention claire : définir le sujet, le ton, la promesse éditoriale et le public auquel l'émission s'adresse. Ces choix donnent au format sa personnalité et orientent son écriture.",
          "Conducteur, rubriques, questions, lancements et transitions sont travaillés pour construire un récit fluide, garder le fil du sujet et laisser une place naturelle aux échanges.",
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
          "La préparation des séquences, la coordination des invités et le rythme des prises de parole donnent corps au projet. À l'animation, Saliou veille à la qualité de l'écoute, relance les échanges et accompagne le déroulé avec naturel.",
          "En studio radio, sur un plateau télévisé ou pour un format numérique, chaque choix de production soutient le propos et l'expérience du public, de l'enregistrement jusqu'à la diffusion.",
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