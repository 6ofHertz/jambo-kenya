
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-forest">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-clay">
              {t('about.description')}
            </p>
            
            <p className="text-lg text-clay">
              {t('about.mission')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-sand">
                <h3 className="text-xl font-bold text-terracotta mb-2">Preservation</h3>
                <p className="text-forest">Documenting traditional knowledge, stories, and customs for future generations.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-sand">
                <h3 className="text-xl font-bold text-terracotta mb-2">Education</h3>
                <p className="text-forest">Making cultural knowledge accessible to all through interactive AI.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-sand">
                <h3 className="text-xl font-bold text-terracotta mb-2">Community</h3>
                <p className="text-forest">Building a platform for Kenyans to share and celebrate their heritage together.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-sand">
                <h3 className="text-xl font-bold text-terracotta mb-2">Innovation</h3>
                <p className="text-forest">Using cutting-edge AI to bring traditional stories to life in new ways.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            {/* Placeholder for AI generated image about Kenya's cultural heritage */}
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta/80 to-forest/80 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <h3 className="text-3xl font-display font-bold mb-4">AI Generated Imagery</h3>
                <p className="max-w-md mx-auto">This area would showcase AI-generated imagery depicting Kenyan cultural elements, created based on user prompts and descriptions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
