import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import dynamic from "next/dynamic";

// Lazy load below-fold components to reduce initial bundle
const About = dynamic(() => import("@/components/About"));
const EventCarousel = dynamic(() => import("@/components/EventCarousel"));
const Countries = dynamic(() => import("@/components/Countries"));
const ForWho = dynamic(() => import("@/components/ForWho"));
const Agenda = dynamic(() => import("@/components/Agenda"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Organizer = dynamic(() => import("@/components/Organizer"));
const Registration = dynamic(() => import("@/components/Registration"));
const Sponsors = dynamic(() => import("@/components/Sponsors"));
const ProximosEventos = dynamic(() => import("@/components/ProximosEventos"));
const Footer = dynamic(() => import("@/components/Footer"));
const SofiaChat = dynamic(() => import("@/components/SofiaChat"));
const SponsorFloat = dynamic(() => import("@/components/SponsorFloat"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoBar />
      <About />
      <Pricing />
      <EventCarousel />
      <Countries />
      <ForWho />
      <Agenda />
      <Organizer />
      <Registration />
      <Sponsors />
      <ProximosEventos />
      <Footer />
      <SofiaChat pageSource="asistentes" />
      <SponsorFloat />
    </>
  );
}
