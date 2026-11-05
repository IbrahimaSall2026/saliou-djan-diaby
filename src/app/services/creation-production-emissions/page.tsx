import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getPublicService } from "@/lib/services";

export default async function ConferencierPage() {
  const service = await getPublicService("emission");

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}