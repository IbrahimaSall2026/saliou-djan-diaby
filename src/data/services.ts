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
      "De la cérémonie institutionnelle au gala, Saliou conduit le programme avec éloquence, tient la scène avec assurance et capte l'attention du public, tout en donnant à chaque intervenant la place qui lui revient.",
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
          "En amont, le déroulé, les préséances, les noms et les prises de parole sont préparés avec rigueur. Le jour J, cette maîtrise du protocole permet d'enchaîner les temps forts avec fluidité et de préserver le ton propre à votre événement.",
          "Sur scène, une diction claire, une posture assurée et une écoute attentive installent une relation de confiance avec les invités comme avec les intervenants.",
        ],
        mediaType: "image",
        image: "/images/mc-scene.jpg",
        imageAlt: "Saliou Djan Diaby au pupitre pendant une prise de parole sur scène",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Éloquence et énergie du direct",
        title: "Captiver le public, accompagner l'instant",
        paragraphs: [
          "Une maîtresse de cérémonie sait faire vivre le programme sans en détourner l'attention. Une introduction juste, une transition naturelle ou une relance bien placée maintiennent le rythme et valorisent chaque séquence.",
          "Saliou s'adapte aux imprévus et à l'énergie de la salle avec calme et discernement. Cette présence attentive transforme le protocole en une expérience accueillante, vivante et mémorable.",
        ],
        mediaType: "video",
        image: "/images/mc-scene.jpg",
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
    shortDescription: "Renforcer la visibilité des marques et donner de l'impact à leurs messages.",
    detailedDescription:
      "J'accompagne les marques dans la conception de messages publicitaires clairs et la valorisation de leur identité auprès de leurs publics.",
    image: "/images/publicite-tournage.jpg",
    imageAlt: "Saliou assise sur un canapé pendant un tournage publicitaire, avec l'équipe et le matériel de production",
    heroImagePosition: "center",
    heroEyebrow: "Des messages de marque qui marquent",
    ctaLabel: "Parlons de votre marque",
    secondaryCtaLabel: "Découvrir l'approche",
    sectionEyebrow: "Faire rayonner votre identité",
    sectionTitle: "Une communication claire et mémorable",
    sections: [
      {
        eyebrow: "Des coulisses à la campagne",
        title: "Donner vie à votre message sur le plateau",
        paragraphs: [
          "De la préparation au tournage, chaque détail contribue à traduire l'identité de votre marque en images et en messages qui parlent à votre public.",
          "En collaboration avec l'équipe de production, je porte votre message avec naturel et veille à ce que le contenu reste fidèle à votre image et à vos objectifs.",
        ],
        mediaType: "image",
        image: "/images/publicite-hero.jpg",
        imageAlt: "Saliou assise sur un canapé pendant la préparation d'un contenu publicitaire",
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
        image: "/images/publicite-tournage.jpg",
        imageAlt: "Équipe de tournage et matériel de studio autour de Saliou pendant une production publicitaire",
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
    shortDescription: "Concevoir des émissions singulières et accompagner leur production, du premier conducteur à la diffusion.",
    detailedDescription:
      "Talk-shows, plateaux radio ou TV, formats digitaux : chaque projet prend forme autour d'un concept éditorial clair, d'un déroulé maîtrisé et d'une expérience pensée pour son public.",
    image: "/images/emission-hero.jpg",
    imageAlt: "Saliou Djan Diaby en studio pendant l'enregistrement d'une émission",
    heroImagePosition: "40% center",
    heroEyebrow: "De l'idée au rendez-vous avec le public",
    ctaLabel: "Parlons de votre émission",
    secondaryCtaLabel: "Découvrir le processus",
    sectionEyebrow: "Conception éditoriale et production",
    sectionTitle: "Des formats construits pour captiver",
    sections: [
      {
        eyebrow: "Concept et ligne éditoriale",
        title: "Poser les bases d'un format reconnaissable",
        paragraphs: [
          "Le travail de création précise le thème, la promesse éditoriale, le ton et le public visé. Ces choix donnent à l'émission sa personnalité, qu'il s'agisse d'un talk-show, d'un rendez-vous radio ou d'un programme digital.",
          "Rubriques, invités, transitions et conducteur sont structurés pour créer un fil narratif clair et installer un rythme adapté au sujet comme au canal de diffusion.",
        ],
        mediaType: "image",
        image: "/images/emission-plateau-radio.jpg",
        imageAlt: "Équipe réunie autour des microphones dans un studio radio",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Du plateau à la diffusion",
        title: "Orchestrer une production fluide",
        paragraphs: [
          "Préparation des séquences, coordination des intervenants et conduite du plateau : chaque étape fait avancer l'émission sans perdre de vue son intention éditoriale.",
          "À la radio, à la télévision ou en ligne, le format et le dispositif technique s'accordent pour livrer un programme cohérent, vivant et prêt à rencontrer son audience.",
        ],
        mediaType: "video",
        image: "/images/emission-plateau-radio.jpg",
        imageAlt: "Équipe réunie autour des microphones dans un studio radio pendant la production d'une émission",
        imagePosition: "object-center",
        videoLabel: "Les coulisses du plateau",
        videoDescription: "Un aperçu du travail d'équipe et du rythme d'une production en studio.",
      },
    ],
  },
] as const satisfies readonly Service[];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}