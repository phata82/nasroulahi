import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import ServicesSection from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Locations from '@/components/sections/Locations';
import Testimonials from '@/components/sections/Testimonials';
import ContactQuote from '@/components/sections/ContactQuote';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <Locations />
      <Testimonials />
      <ContactQuote />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
