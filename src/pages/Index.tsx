
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
// import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FlipCardsSection from '@/components/flip-cards-section';
import FabricCollection from '@/components/Fabric-collection';
import TailoredsuitCollection from '@/components/Tailoredsuit';
import Customer from '@/components/Customer';
import Gallery from '@/components/gallery';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Customer />
      <Services />
      <Gallery />
      <FabricCollection />
      <FlipCardsSection />
      <TailoredsuitCollection />
      {/* <Testimonials /> */}

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
