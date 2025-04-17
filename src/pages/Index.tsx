
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ChatSection from '../components/ChatSection';
import Gallery from '../components/Gallery';
import SubmitSection from '../components/SubmitSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <ChatSection />
        <MapSection />
        <Gallery />
        <SubmitSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
