import Navbar from "@/components/Navbar";
import SponsorHero from "@/components/sponsors/SponsorHero";
import SponsorBenefits from "@/components/sponsors/SponsorBenefits";
import SponsorPackages from "@/components/sponsors/SponsorPackages";
import SponsorRegistration from "@/components/sponsors/SponsorRegistration";
import Sponsors from "@/components/Sponsors";
import EventCarousel from "@/components/EventCarousel";
import Footer from "@/components/Footer";
import SofiaChat from "@/components/SofiaChat";
import SponsorWhatsApp from "@/components/sponsors/SponsorWhatsApp";
import ProximosEventos from "@/components/ProximosEventos";

export const metadata = {
  title: "Ser Sponsor — Convención Inmobiliaria 2026",
  description:
    "Posiciona tu marca ante inversionistas internacionales. Paquetes de sponsorship exclusivos para la Convención Inmobiliaria 2026 en Punta Cana y Cancún.",
};

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <SponsorHero />
      <SponsorBenefits />
      <SponsorRegistration />
      <SponsorPackages />
      <EventCarousel />
      <Sponsors />
      <SponsorRegistration />
      <ProximosEventos />
      <Footer />
      <SofiaChat pageSource="sponsors" />
      <SponsorWhatsApp />
    </>
  );
}
