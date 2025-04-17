
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
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Kenya flag corners */}
        <div className="fixed top-0 left-0 w-16 h-16 z-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-black"></div>
          <div className="absolute top-1/3 left-0 w-full h-1/3 bg-terracotta"></div>
          <div className="absolute top-2/3 left-0 w-full h-1/3 bg-forest"></div>
        </div>
        <div className="fixed top-0 right-0 w-16 h-16 z-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-full h-1/3 bg-black"></div>
          <div className="absolute top-1/3 right-0 w-full h-1/3 bg-terracotta"></div>
          <div className="absolute top-2/3 right-0 w-full h-1/3 bg-forest"></div>
        </div>
        
        <Navbar />
        <Hero />
        <About />
        <ChatSection />
        <MapSection />
        <Gallery />
        <SubmitSection />
        <Footer />
        
        <div className="kenya-shield-bg fixed inset-0 pointer-events-none z-0 opacity-20" aria-hidden="true"></div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
