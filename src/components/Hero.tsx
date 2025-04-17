
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Kenya-inspired background pattern with flag colors */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Kenyan flag-inspired stripes */}
        <div className="absolute top-0 left-0 right-0 h-[25%] bg-black"></div>
        <div className="absolute top-[25%] left-0 right-0 h-[25%] bg-terracotta"></div>
        <div className="absolute top-[50%] left-0 right-0 h-[25%] bg-forest"></div>
        <div className="absolute top-[75%] left-0 right-0 h-[25%] bg-black/70"></div>
        
        {/* Maasai shield pattern overlay */}
        <div className="absolute inset-0 bg-center bg-repeat-space mix-blend-soft-light opacity-20" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvsg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M30 40 L70 40 L70 60 L30 60 Z' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`}}
             aria-hidden="true">
        </div>
      </div>

      {/* Content overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-sand/80 pointer-events-none" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-block bg-terracotta/20 backdrop-blur-sm border border-terracotta/30 rounded-lg px-4 py-2 mb-4">
            <span className="text-white font-medium">🇰🇪 Discover Kenya's Cultural Heritage</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-md">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-sand mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white font-medium px-8 shadow-lg transition-all hover:scale-105">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a href="#chat" className="group flex items-center text-sand hover:text-white transition-colors">
              <span className="underline-offset-4 decoration-2 group-hover:underline">Try JamboAI Assistant</span>
              <span className="ml-2 bg-sand/20 p-1.5 rounded-full group-hover:bg-terracotta/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </span>
            </a>
          </div>
          
          {/* Kenya Shield Decoration */}
          <div className="absolute -bottom-16 right-10 w-64 h-64 opacity-10 bg-no-repeat bg-contain rotate-12 hidden lg:block" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cpath d='M50 5 L90 25 L90 95 L50 115 L10 95 L10 25 Z' fill='none' stroke='%23ffffff' stroke-width='3'/%3E%3Cpath d='M30 40 L70 40 M70 40 L70 80 M70 80 L30 80 M30 80 L30 40' stroke='%23ffffff' stroke-width='2' fill='none'/%3E%3Cpath d='M50 25 L50 95' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E")`}} 
               aria-hidden="true">
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
