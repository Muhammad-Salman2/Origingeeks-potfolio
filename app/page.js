import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navbar from "@/components/ui/Nabar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <ContactForm/>
    <Footer/>
    </>
  );
}
