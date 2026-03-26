import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import About from "@/components/About";
import EventCarousel from "@/components/EventCarousel";
import Countries from "@/components/Countries";
import ForWho from "@/components/ForWho";
import Agenda from "@/components/Agenda";
import Pricing from "@/components/Pricing";
import Organizer from "@/components/Organizer";
import Registration from "@/components/Registration";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoBar />
      <About />
      <EventCarousel />
      <Countries />
      <ForWho />
      <Agenda />
      <Pricing />
      <Organizer />
      <Registration />
      <Sponsors />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
