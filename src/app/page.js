import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import NavBar from "@/components/ui/NavBar/NavBar";

import CaseStudySection from './../components/CaseStudySection/CaseStudySection';
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import Featured from "@/components/FeaturedSection/Featured";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div >
      <div > 
    
        <NavBar />
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <CaseStudySection></CaseStudySection>
        <TestimonialSection></TestimonialSection>
        <Featured></Featured>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </div>

  );
}
