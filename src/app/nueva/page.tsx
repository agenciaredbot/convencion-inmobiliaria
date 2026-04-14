import Navbar from "@/components/Navbar";
import HeroV2 from "@/components/v2/HeroV2";
import InvestBanner from "@/components/v2/InvestBanner";
import CountriesBanner from "@/components/v2/CountriesBanner";
import PricingV2 from "@/components/v2/PricingV2";
import AgendaV2 from "@/components/v2/AgendaV2";
import RegistrationV2 from "@/components/v2/RegistrationV2";
import Organizer from "@/components/Organizer";
import Sponsors from "@/components/Sponsors";
import ProximosEventos from "@/components/ProximosEventos";
import Footer from "@/components/Footer";
import SofiaChat from "@/components/SofiaChat";

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
