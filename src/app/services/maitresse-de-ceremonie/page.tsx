import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getPublicService } from "@/lib/services";

export default async function MaitreDeCeremoniePage() {
  const service = await getPublicService("mc");

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}