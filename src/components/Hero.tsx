
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
      style={{
        backgroundImage: "linear-gradient(to right, rgba(229, 209, 184, 0.9), rgba(201, 188, 142, 0.9)), url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}
    >
      {/* AI Generated Image Placeholder - would normally be dynamically generated */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-sand/90 pointer-events-none"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:ml-0">
          <div className="inline-block px-6 py-2 mb-6 bg-forest/10 rounded-full">
            <span className="text-forest font-medium">AI + Kenyan Culture</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-forest leading-tight">
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
