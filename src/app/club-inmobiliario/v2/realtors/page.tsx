import Header from "@/components/club-v2/Header";
import Footer from "@/components/club-v2/Footer";
import RevealController from "@/components/club-v2/RevealController";
import SectionHeroRealtor from "@/components/club-v2/realtor/SectionHeroRealtor";
import SectionStateOfMarket from "@/components/club-v2/realtor/SectionStateOfMarket";
import SectionWhatYouSell from "@/components/club-v2/realtor/SectionWhatYouSell";
import SectionPricingRealtor from "@/components/club-v2/realtor/SectionPricingRealtor";
import SectionAIAgent from "@/components/club-v2/realtor/SectionAIAgent";
import SectionTestimonialsRealtor from "@/components/club-v2/realtor/SectionTestimonialsRealtor";
import SectionFAQRealtor from "@/components/club-v2/realtor/SectionFAQRealtor";
import SectionCTAFinalRealtor from "@/components/club-v2/realtor/SectionCTAFinalRealtor";

export const metadata = {
  title:
    "Agentes Inmobiliarios — Club Inmobiliario | Vende en 4 mercados con comisiones 3x más altas",
  description:
    "Suscripción mensual desde $20 USD/mes (25% OFF fundador). +40 proyectos exclusivos en LATAM y Dubai, agente IA personalizado, know-how legal y red de +900 colegas latinos en USA.",
};

export default function RealtorsPage() {
  return (
    <>
      <Header />
      <main>
        <SectionHeroRealtor />
        <SectionStateOfMarket />
        <SectionWhatYouSell />
        <SectionPricingRealtor />
        <SectionAIAgent />
        <SectionTestimonialsRealtor />
        <SectionFAQRealtor />
        <SectionCTAFinalRealtor />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
