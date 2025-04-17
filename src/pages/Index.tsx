
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
      <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-sand/40 to-background/80 overflow-hidden">
        {/* Kenya flag corner decorations */}
        <div className="fixed top-0 left-0 w-16 h-16 z-50 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-black"></div>
          <div className="absolute top-1/3 left-0 w-full h-1/3 bg-terracotta"></div>
          <div className="absolute top-2/3 left-0 w-full h-1/3 bg-forest"></div>
        </div>
        <div className="fixed top-0 right-0 w-16 h-16 z-50 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-full h-1/3 bg-black"></div>
          <div className="absolute top-1/3 right-0 w-full h-1/3 bg-terracotta"></div>
          <div className="absolute top-2/3 right-0 w-full h-1/3 bg-forest"></div>
        </div>
        
        {/* Kenyan shield background pattern */}
        <div className="fixed inset-0 kenya-shield-bg opacity-[0.08] pointer-events-none z-0" aria-hidden="true"></div>
        
        {/* Main Content */}
        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <div className="relative">
            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background to-transparent"></div>
            <About />
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 kenya-pattern opacity-5" aria-hidden="true"></div>
              <ChatSection />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/5 to-transparent"></div>
              <MapSection />
            </div>
            <Gallery />
            <div className="relative">
              <div className="absolute inset-0 pattern-kenya-shield opacity-5"></div>
              <SubmitSection />
            </div>
          </div>
        </main>
        
        {/* Kenya-styled divider */}
        <div className="relative h-4 w-full overflow-hidden">
          <div className="absolute inset-x-0 h-1/3 top-0 bg-black"></div>
          <div className="absolute inset-x-0 h-1/3 top-1/3 bg-terracotta"></div>
          <div className="absolute inset-x-0 h-1/3 top-2/3 bg-forest"></div>
        </div>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
