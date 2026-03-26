import Navbar from "@/components/Navbar";
import SponsorHero from "@/components/sponsors/SponsorHero";
import SponsorBenefits from "@/components/sponsors/SponsorBenefits";
import SponsorPackages from "@/components/sponsors/SponsorPackages";
import SponsorRegistration from "@/components/sponsors/SponsorRegistration";
import Sponsors from "@/components/Sponsors";
import EventCarousel from "@/components/EventCarousel";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Ser Sponsor — Convención Inmobiliaria 2026",
  description:
    "Posiciona tu marca ante inversionistas internacionales. Paquetes de sponsorship exclusivos para la Convención Inmobiliaria 2026 en Barranquilla y Medellín.",
};

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <SponsorHero />
      <SponsorBenefits />
      <SponsorPackages />
      <SponsorRegistration />
      <EventCarousel />
      <Sponsors />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
