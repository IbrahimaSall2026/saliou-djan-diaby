import { notFound } from "next/navigation";
import EditorialServicePage from "@/components/services/EditorialServicePage";
import { getServiceBySlug } from "@/data/services";

export default function MaitreDeCeremoniePage() {
  const service = getServiceBySlug("maitresse-de-ceremonie");

  if (!service) {
    notFound();
  }

  return <EditorialServicePage service={service} />;
}