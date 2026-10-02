import { notFound } from "next/navigation";
import RealisationPage from "@/components/realisations/RealisationPage";
import { getRealisationBySlug } from "@/data/realisations";

export default function CeremonieAnimeePage() {
  const realisation = getRealisationBySlug("ceremonie-animee");

  if (!realisation) {
    notFound();
  }

  return <RealisationPage realisation={realisation} />;
}