import Navbar from "@/components/Navbar";
import HeroV2 from "@/components/v2/HeroV2";
import dynamic from "next/dynamic";

// Lazy load below-fold components
const InvestBanner = dynamic(() => import("@/components/v2/InvestBanner"));
const CountriesBanner = dynamic(() => import("@/components/v2/CountriesBanner"));
const PricingV2 = dynamic(() => import("@/components/v2/PricingV2"));
const AgendaV2 = dynamic(() => import("@/components/v2/AgendaV2"));
const Organizer = dynamic(() => import("@/components/Organizer"));
const RegistrationV2 = dynamic(() => import("@/components/v2/RegistrationV2"));
const Sponsors = dynamic(() => import("@/components/Sponsors"));
const ProximosEventos = dynamic(() => import("@/components/ProximosEventos"));
const Footer = dynamic(() => import("@/components/Footer"));
const SofiaChat = dynamic(() => import("@/components/SofiaChat"));

export const metadata = {
  title: "Convención Inmobiliaria 2026 — Invierte en el Exterior",
  description:
    "Conecta con proyectos en Colombia, Miami, República Dominicana y México. Acceso 100% gratuito. Barranquilla 22 Abr · Medellín 24 Abr.",
};

export default function V2Page() {
  return (
    <>
      <Navbar />
      <HeroV2 />
      <InvestBanner />
      <CountriesBanner />
      <PricingV2 />
      <AgendaV2 />
      <Organizer />
      <RegistrationV2 />
      <Sponsors />
      <ProximosEventos />
      <Footer />
      <SofiaChat pageSource="v2-asistentes" />
    </>
  );
}
