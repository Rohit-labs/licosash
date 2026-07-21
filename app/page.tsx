import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import FeaturedWork from "@/components/FeaturedWork";
import Creators from "@/components/Creators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandMarquee />
        <About />
        <Capabilities />
        <FeaturedWork />
        <Creators />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
