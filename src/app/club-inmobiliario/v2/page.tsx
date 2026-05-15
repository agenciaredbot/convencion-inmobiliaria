import Header from "@/components/club-v2/Header";
import Footer from "@/components/club-v2/Footer";
import RevealController from "@/components/club-v2/RevealController";
import SectionHero from "@/components/club-v2/SectionHero";
import SectionTicker from "@/components/club-v2/SectionTicker";
import SectionArbitrage from "@/components/club-v2/SectionArbitrage";
import SectionNumbers from "@/components/club-v2/SectionNumbers";
import SectionPaths from "@/components/club-v2/SectionPaths";
import SectionDestinos from "@/components/club-v2/SectionDestinos";
import SectionClaudia from "@/components/club-v2/SectionClaudia";
import SectionHowItWorks from "@/components/club-v2/SectionHowItWorks";
import SectionTours from "@/components/club-v2/SectionTours";
import SectionTestimonials from "@/components/club-v2/SectionTestimonials";
import SectionWebinar from "@/components/club-v2/SectionWebinar";
import SectionFAQ from "@/components/club-v2/SectionFAQ";
import SectionCTAFinal from "@/components/club-v2/SectionCTAFinal";

export default function ClubV2HomePage() {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionTicker />
        <SectionArbitrage />
        <SectionNumbers />
        <SectionPaths />
        <SectionDestinos />
        <SectionClaudia />
        <SectionHowItWorks />
        <SectionTours />
        <SectionTestimonials />
        <SectionWebinar />
        <SectionFAQ />
        <SectionCTAFinal />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
