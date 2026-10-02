import { notFound } from "next/navigation";
import RealisationPage from "@/components/realisations/RealisationPage";
import { getRealisationBySlug } from "@/data/realisations";

export default function AnimationDeCeremoniesPage() {
  const realisation = getRealisationBySlug("animation-de-ceremonies");

  if (!realisation) {
    notFound();
  }

  return <RealisationPage realisation={realisation} />;
}