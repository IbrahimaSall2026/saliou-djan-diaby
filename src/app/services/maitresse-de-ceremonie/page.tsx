import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getServiceBySlug } from "@/data/services";

export default function MaitreDeCeremoniePage() {
  const service = getServiceBySlug("maitresse-de-ceremonie");

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}