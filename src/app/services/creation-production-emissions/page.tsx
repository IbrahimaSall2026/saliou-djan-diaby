import { notFound } from "next/navigation";
import EditorialServicePage from "@/components/services/EditorialServicePage";
import { getServiceBySlug } from "@/data/services";

export default function CreationProductionEmissionsPage() {
  const service = getServiceBySlug("creation-production-emissions");

  if (!service) {
    notFound();
  }

  return <EditorialServicePage service={service} />;
}