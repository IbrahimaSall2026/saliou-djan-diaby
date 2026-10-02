import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getServiceBySlug } from "@/data/services";

export default function ConferencierPage() {
  const service = getServiceBySlug("conferencier");

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}