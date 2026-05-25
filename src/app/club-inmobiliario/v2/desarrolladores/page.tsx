import Header from "@/components/club-v2/Header";
import Footer from "@/components/club-v2/Footer";
import RevealController from "@/components/club-v2/RevealController";
import SectionHeroDeveloper from "@/components/club-v2/developer/SectionHeroDeveloper";
import SectionProblemB2B from "@/components/club-v2/developer/SectionProblemB2B";
import SectionSolutionClub from "@/components/club-v2/developer/SectionSolutionClub";
import SectionPricingDeveloper from "@/components/club-v2/developer/SectionPricingDeveloper";
import SectionCasesB2B from "@/components/club-v2/developer/SectionCasesB2B";
import SectionProcessB2B from "@/components/club-v2/developer/SectionProcessB2B";
import SectionFAQDeveloper from "@/components/club-v2/developer/SectionFAQDeveloper";
import SectionCTADeveloper from "@/components/club-v2/developer/SectionCTADeveloper";

export const metadata = {
  title:
    "Desarrolladores — Club Inmobiliario | Pon tu proyecto frente a +10,000 ojos con dólares",
  description:
    "Canal B2B de distribución para desarrolladores inmobiliarios. Conecta tu proyecto con +900 agentes inmobiliarios latinos en USA y +10,000 operadores en LATAM. Membresías anuales desde $3K USD. ROI 4-7x.",
};

export default function DesarrolladoresPage() {
  return (
    <>
      <Header />
      <main>
        <SectionHeroDeveloper />
        <SectionProblemB2B />
        <SectionSolutionClub />
        <SectionPricingDeveloper />
        <SectionCasesB2B />
        <SectionProcessB2B />
        <SectionFAQDeveloper />
        <SectionCTADeveloper />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
