import Blog from "@/components/blog";
import FAQ from "@/components/FAQ";
import Features02 from "@/components/feature-02";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LayoutGrid from "@/components/layout-grid";
import Navbar from "@/components/navbar";
import { LogoMarquee } from "@/components/slider";
import Testimonials from "@/components/testiumonials";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <LogoMarquee/>
    <Features/>
    <Features02/>
    <LayoutGrid/>
    <Testimonials/>
    <Blog/>
    <FAQ/>
    <Footer/>
   </div>
  );
}
