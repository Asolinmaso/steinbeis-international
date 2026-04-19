import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Offerings from '@/components/Offerings';
import Features from '@/components/Features';
import Advantage from '@/components/Advantage';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100%' }}>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Offerings />
      <Features />
      <Advantage />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
