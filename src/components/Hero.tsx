
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center overflow-hidden pattern-overlay"
    >
      {/* Kenya-inspired flag background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-forest/20 to-terracotta/20" aria-hidden="true">
          {/* Kenyan flag-inspired stripes */}
          <div className="absolute top-0 left-0 right-0 h-[25%] bg-black"></div>
          <div className="absolute top-[25%] left-0 right-0 h-[25%] bg-terracotta"></div>
          <div className="absolute top-[50%] left-0 right-0 h-[25%] bg-forest"></div>
          <div className="absolute top-[75%] left-0 right-0 h-[25%] bg-black/70"></div>
          
          {/* Maasai shield pattern overlay */}
          <div className="absolute inset-0 opacity-20 pattern-overlay"></div>
        </div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-sand/90 pointer-events-none"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:ml-0">
          <div className="inline-block px-6 py-2 mb-6 bg-forest/10 rounded-full border border-forest/20">
            <span className="text-forest font-medium">AI + Kenyan Culture</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-forest leading-tight text-shadow">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-clay mb-8 max-w-2xl mx-auto lg:mx-0">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <a href="#chat" className="text-forest hover:text-terracotta underline underline-offset-4 font-medium">
              Try AI Chat
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Hero;
