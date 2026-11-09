import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getPublicService } from "@/lib/services";

export default async function PubliciteValorisationMarquesPage() {
  const service = await getPublicService("publicite");

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}