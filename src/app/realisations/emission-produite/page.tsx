import { notFound } from "next/navigation";
import RealisationPage from "@/components/realisations/RealisationPage";
import { getRealisationBySlug } from "@/data/realisations";

export default function EmissionProduitePage() {
  const realisation = getRealisationBySlug("emission-produite");

  if (!realisation) {
    notFound();
  }

  return <RealisationPage realisation={realisation} />;
}