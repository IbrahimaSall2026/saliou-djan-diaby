"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPrivateRoute =
    pathname === "/login" ||
    pathname === "/admin" ||
    pathname.startsWith("/admin/");

  if (isPrivateRoute) {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollReveal />
      <WhatsAppButton />
    </>
  );
}
