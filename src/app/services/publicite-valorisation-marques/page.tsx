import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getServiceBySlug } from "@/data/services";

export default function FormateurEnArtOratoirePage() {
  const service = getServiceBySlug("publicite-valorisation-marques");

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}