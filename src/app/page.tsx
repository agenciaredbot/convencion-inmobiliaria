import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import About from "@/components/About";
import Countries from "@/components/Countries";
import ForWho from "@/components/ForWho";
import Agenda from "@/components/Agenda";
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
      <Countries />
      <ForWho />
      <Agenda />
      <Organizer />
      <Registration />
      <Sponsors />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
