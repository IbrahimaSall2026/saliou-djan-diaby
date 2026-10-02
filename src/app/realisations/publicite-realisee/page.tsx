import { notFound } from "next/navigation";
import RealisationPage from "@/components/realisations/RealisationPage";
import { getRealisationBySlug } from "@/data/realisations";

export default function PubliciteRealiseePage() {
  const realisation = getRealisationBySlug("publicite-realisee");

  if (!realisation) {
    notFound();
  }

  return <RealisationPage realisation={realisation} />;
}
