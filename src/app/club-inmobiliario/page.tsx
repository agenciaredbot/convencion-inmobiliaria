import ClubHero from "@/components/club/ClubHero";
import ClubBenefits from "@/components/club/ClubBenefits";
import ClubExperience from "@/components/club/ClubExperience";
import ClubPricing from "@/components/club/ClubPricing";
import ClubRegistration from "@/components/club/ClubRegistration";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Club Inmobiliario — Convención Inmobiliaria 2026",
  description:
    "Únete al grupo exclusivo de inversionistas, realtors y actores del ecosistema de Real Estate que toman las mejores decisiones. Pre-inscríbete y obtén un 30% de descuento.",
};

export default function ClubPage() {
  return (
    <>
      <ClubHero />
      <ClubBenefits />
      <ClubExperience />
      <ClubPricing />
      <ClubRegistration />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
