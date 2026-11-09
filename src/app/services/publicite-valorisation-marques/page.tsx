import { notFound } from "next/navigation";
import EditorialServicePage from "@/components/services/EditorialServicePage";
import { getServiceBySlug } from "@/data/services";

export default function PubliciteValorisationMarquesPage() {
  const service = getServiceBySlug("publicite-valorisation-marques");

  if (!service) {
    notFound();
  }

  return <EditorialServicePage service={service} />;
}