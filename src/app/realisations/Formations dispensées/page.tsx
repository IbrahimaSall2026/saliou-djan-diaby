import { notFound } from "next/navigation";
import RealisationPage from "@/components/realisations/RealisationPage";
import { getRealisationBySlug } from "@/data/realisations";

export default function LegacyFormationsDispenseesPage() {
  const realisation = getRealisationBySlug("formations-dispensees");

  if (!realisation) {
    notFound();
  }

  return <RealisationPage realisation={realisation} />;
}