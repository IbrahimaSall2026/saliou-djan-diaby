import { notFound } from "next/navigation";
import RealisationPage from "@/components/realisations/RealisationPage";
import { getRealisationBySlug } from "@/data/realisations";

export default function InterventionsDExpertPage() {
  const realisation = getRealisationBySlug("interventions-dexpert");

  if (!realisation) {
    notFound();
  }

  return <RealisationPage realisation={realisation} />;
}