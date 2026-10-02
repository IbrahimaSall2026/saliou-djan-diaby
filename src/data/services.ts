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
    slug: "maitre-de-ceremonie",
    title: "Maître de Cérémonie",
    shortDescription: "Donner du rythme à vos événements et créer une présence qui rassemble.",
    detailedDescription:
      "J'installe le rythme, la clarté et l'élégance nécessaires pour guider chaque séquence avec précision, tout en respectant le protocole et l'identité de votre événement.",
    image: "/images/profil.jpg",
    imageAlt: "Saliou Djan Diaby, Maître de Cérémonie",
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
          "Un événement réussi commence par une atmosphère juste. En tant que Maître de Cérémonie, j'installe le rythme, la clarté et l'élégance nécessaires pour que chaque séquence trouve naturellement sa place.",
          "De l'ouverture aux transitions, je veille au respect du protocole, à la fluidité des prises de parole et à la coordination avec les équipes techniques. Votre public est guidé avec précision, sans jamais perdre la spontanéité du moment.",
        ],
        mediaType: "image",
        image: "/images/profil.jpg",
        imageAlt: "Saliou Djan Diaby, Maître de Cérémonie",
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
    slug: "formateur-en-art-oratoire",
    title: "Formateur en Art Oratoire",
    shortDescription: "Dompter sa voix, maîtriser son souffle et captiver son auditoire avec assurance.",
    detailedDescription:
      "Je transmets des outils pratiques pour structurer les idées, poser la voix, maîtriser le souffle et prendre sa place avec une présence naturelle.",
    image: "/images/format-art-oratoire.jpg",
    imageAlt: "Formation en art oratoire",
    heroEyebrow: "L'art de convaincre avec justesse",
    ctaLabel: "Réserver une formation",
    secondaryCtaLabel: "Découvrir la méthode",
    sectionEyebrow: "L'art de convaincre avec justesse",
    sectionTitle: "Une prise de parole qui vous ressemble",
    sections: [
      {
        eyebrow: "Une parole qui s'affirme",
        title: "Transformer sa voix en présence",
        paragraphs: [
          "La voix, le souffle et la posture forment le socle d'une prise de parole convaincante. Vous apprenez à poser votre voix, maîtriser votre respiration et occuper l'espace avec naturel.",
          "Des exercices progressifs vous permettent de gagner en précision, en assurance et en expressivité, quel que soit votre niveau de départ.",
        ],
        mediaType: "image",
        image: "/images/format-art-oratoire.jpg",
        imageAlt: "Participant pendant une formation en art oratoire",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Une méthode orientée pratique",
        title: "Progresser par l'entraînement et le feedback",
        paragraphs: [
          "Chaque session alterne apports ciblés, mises en situation et retours personnalisés. Vous explorez des situations proches de vos prises de parole professionnelles et de vos enjeux réels.",
          "Vous repartez avec des outils concrets pour structurer vos idées, captiver votre auditoire et vous exprimer avec plus de clarté et d'authenticité.",
        ],
        mediaType: "video",
        image: "/images/format-art-oratoire.jpg",
        imageAlt: "Aperçu vidéo d'une formation en art oratoire",
        imagePosition: "object-center",
        videoLabel: "Démonstration vidéo",
        videoDescription: "Un aperçu d'une séance de formation en art oratoire.",
      },
    ],
  },
  {
    id: 3,
    slug: "conferencier",
    title: "Conférencier",
    shortDescription: "Des prises de parole fortes et accessibles pour transformer l'inspiration en action.",
    detailedDescription:
      "Je construis des conférences claires, incarnées et adaptées à chaque auditoire pour éveiller les idées, faire naître l'engagement et ouvrir de nouvelles perspectives.",
    image: "/images/conferencier.jpg",
    imageAlt: "Saliou Djan Diaby pendant une conférence",
    heroEyebrow: "Conférences qui font avancer",
    ctaLabel: "Inviter le conférencier",
    secondaryCtaLabel: "Découvrir l'approche",
    sectionEyebrow: "Une parole qui rassemble",
    sectionTitle: "Donner du sens aux messages essentiels",
    sections: [
      {
        eyebrow: "Une énergie communicative",
        title: "Captiver un public, ouvrir de nouvelles perspectives",
        paragraphs: [
          "Une conférence ne se contente pas de transmettre des informations: elle crée un déclic. Chaque intervention est construite autour de vos enjeux pour donner à votre public des repères concrets et une envie durable d'agir.",
          "Avec une parole claire, incarnée et adaptée à chaque auditoire, les idées deviennent accessibles, mémorables et directement utiles.",
        ],
        mediaType: "image",
        image: "/images/conferencier.jpg",
        imageAlt: "Intervention de Saliou Djan Diaby sur scène",
        imagePosition: "object-center",
      },
      {
        eyebrow: "Une intervention sur mesure",
        title: "Des idées qui restent après la scène",
        paragraphs: [
          "De la motivation à l'excellence professionnelle, chaque format s'adapte à votre culture, à votre temps disponible et au niveau d'engagement attendu de vos équipes.",
          "Le travail préparatoire permet de relier le propos à votre réalité et de faire de la rencontre un moment réellement fédérateur.",
        ],
        mediaType: "video",
        image: "/images/conferencier.jpg",
        imageAlt: "Aperçu vidéo d'une conférence",
        imagePosition: "object-center",
        videoLabel: "Voir une intervention",
        videoDescription: "Un aperçu de l'énergie et de la précision apportées à chaque conférence.",
      },
    ],
  },
] as const satisfies readonly Service[];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}