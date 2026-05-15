import Header from "@/components/club-v2/Header";
import Footer from "@/components/club-v2/Footer";
import RevealController from "@/components/club-v2/RevealController";
import SectionHeroInvestor from "@/components/club-v2/investor/SectionHeroInvestor";
import SectionCalculator from "@/components/club-v2/investor/SectionCalculator";
import SectionWhyNow from "@/components/club-v2/investor/SectionWhyNow";
import SectionSuccessStories from "@/components/club-v2/investor/SectionSuccessStories";
import SectionTourInside from "@/components/club-v2/investor/SectionTourInside";
import SectionLegalSafety from "@/components/club-v2/investor/SectionLegalSafety";
import SectionTours from "@/components/club-v2/SectionTours";
import SectionAsesoria from "@/components/club-v2/investor/SectionAsesoria";
import SectionTestimonialsInvestor from "@/components/club-v2/investor/SectionTestimonialsInvestor";
import SectionFAQInvestor from "@/components/club-v2/investor/SectionFAQInvestor";
import SectionCTAFinalInvestor from "@/components/club-v2/investor/SectionCTAFinalInvestor";

export const metadata = {
  title: "Inversionistas — Club Inmobiliario | Tu dinero vale 4x más en Medellín",
  description:
    "Compra propiedades en Latinoamérica con valorizaciones del 15-30% anual y rentabilidad en USD. Asesoría legal, contable y tours físicos con todo incluido.",
};

export default function InversionistasPage() {
  return (
    <>
      <Header />
      <main>
        <SectionHeroInvestor />
        <SectionCalculator />
        <SectionWhyNow />
        <SectionSuccessStories />
        <SectionTourInside />
        <SectionLegalSafety />
        <SectionTours />
        <SectionAsesoria />
        <SectionTestimonialsInvestor />
        <SectionFAQInvestor />
        <SectionCTAFinalInvestor />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
