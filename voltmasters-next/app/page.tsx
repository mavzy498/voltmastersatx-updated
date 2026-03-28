import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { BrandsSupported } from '@/components/BrandsSupported';
import { Features } from '@/components/Features';
import { RebateHighlight } from '@/components/RebateHighlight';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Services } from '@/components/Services';
import { ChargerComparison } from '@/components/ChargerComparison';
import { WorkGallery } from '@/components/WorkGallery';
import { ServiceArea } from '@/components/ServiceArea';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <BrandsSupported />
      <Features />
      <RebateHighlight />
      <ProcessSteps />
      <Services />
      <ChargerComparison />
      <WorkGallery />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
