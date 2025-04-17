
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Camera, PaintBrush, BookOpen, Music, Sparkles, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    title: 'Maasai Cultural Heritage',
    description: 'Explore the rich traditions, ceremonies and daily life of the Maasai people.',
    type: 'Culture',
    icon: <Users className="h-5 w-5" />,
    color: 'bg-gradient-to-br from-terracotta to-terracotta/80',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm12 12H0v6h12v-6zm0 12H0v6h12v-6zM12 0h6v6h-6V0zm0 12h6v6h-6v-6zm0 12h6v6h-6v-6zM24 0h6v6h-6V0zm0 12h6v6h-6v-6zm0 12h6v6h-6v-6zM36 0h6v6h-6V0zm0 12h6v6h-6v-6zm0 12h6v6h-6v-6zM12 36h6v6h-6v-6zm12 0h6v6h-6v-6zm12 0h6v6h-6v-6z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
  },
  {
    id: 2,
    title: 'Kikuyu Creation Myths',
    description: 'Stories of how the Kikuyu people came to be and their relationship with Mount Kenya.',
    type: 'Folklore',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'bg-gradient-to-br from-forest to-forest/80',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
  },
  {
    id: 3,
    title: 'Swahili Architecture',
    description: 'The unique blend of African, Arabic, and Indian influences in coastal Kenyan buildings.',
    type: 'Architecture',
    icon: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 8h1m-1 4h1m-1 4h1M4 21V8l8-7 8 7v13M9 21h6m-3-9h1m-1 4h1m2-8h1m-1 4h1m-1 4h1"/></svg>,
    color: 'bg-gradient-to-br from-clay to-clay/80',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h15v15H0V0zm15 15h15v15H15V15zm15-15h15v15H30V0zM15 0h15v15H15V0z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
  },
  {
    id: 4,
    title: 'Traditional Instruments',
    description: 'Exploring the nyatiti, shekere, and other instruments that form Kenya\'s musical heritage.',
    type: 'Music',
    icon: <Music className="h-5 w-5" />,
    color: 'bg-gradient-to-br from-ochre to-ochre/80',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 A30 30 0 0 1 60 30 A30 30 0 0 1 30 60 A30 30 0 0 1 0 30 A30 30 0 0 1 30 0 Z' stroke='%23ffffff' stroke-width='2' fill='none' fill-opacity='0.1' stroke-opacity='0.2'/%3E%3C/svg%3E")`
  },
  {
    id: 5,
    title: 'Kanga & Kitenge Art',
    description: 'Exploring the vibrant textiles, patterns and their cultural significance across Kenya.',
    type: 'Art',
    icon: <PaintBrush className="h-5 w-5" />,
    color: 'bg-gradient-to-br from-sunset to-sunset/80',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v8H0V0zm16 0h16v8H16V0zm16 0h16v8H32V0zm16 0h16v8H48V0zM0 8h8v16H0V8zm0 16h8v16H0v-16zm0 16h8v16H0v-16zM8 8h40v8H8V8zm0 8h8v16H8V16zm0 16h8v16H8V32zm0 16h8v8H8v-8zm8 0h40v8H16v-8zm32-8h8v8h-8v-8zm0-16h8v16h-8V24zm0-16h8v16h-8V8zm8 8h8v48h-8V16zm0-8h8v8h-8V8z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
  },
  {
    id: 6,
    title: 'Wildlife Photography',
    description: 'Stunning images of Kenya\'s diverse wildlife from the Maasai Mara to Amboseli.',
    type: 'Photography',
    icon: <Camera className="h-5 w-5" />,
    color: 'bg-gradient-to-br from-savanna to-forest/50',
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 30 0 L 40 15 L 30 30 L 20 15 Z M 30 30 L 40 45 L 30 60 L 20 45 Z M 0 15 L 10 30 L 0 45 L -10 30 Z M 60 15 L 70 30 L 60 45 L 50 30 Z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
  },
];

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pattern-kenya-shield" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-10 bg-black rounded"></div>
            <div className="h-1 w-10 bg-terracotta rounded"></div>
            <div className="h-1 w-10 bg-forest rounded"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-forest mb-4">
            {t('gallery.title')}
          </h2>
          
          <p className="text-lg text-clay max-w-2xl mx-auto">
            Explore the vibrant cultural heritage of Kenya through AI-generated representations based on authentic traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-sand/30 hover:border-terracotta/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`h-48 relative overflow-hidden ${item.color}`}>
                <div 
                  className="absolute inset-0 bg-no-repeat bg-center opacity-50" 
                  style={{backgroundImage: item.pattern}}
                  aria-hidden="true"
                ></div>
                
                {/* Kenya flag stripe accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5">
                  <div className="w-full h-1/3 bg-black"></div>
                  <div className="w-full h-1/3 bg-terracotta"></div>
                  <div className="w-full h-1/3 bg-forest"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center text-white bg-black/30 rounded-full">
                    {item.icon}
                  </div>
                </div>
                
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent h-1/2"></div>
                <div className="absolute bottom-2 left-3 bg-black/40 text-white text-xs font-medium py-1 px-2 rounded-full backdrop-blur-sm">
                  {item.type}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-forest mb-2 group-hover:text-terracotta transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-clay mb-4 text-sm">
                  {item.description}
                </p>
                
                <button className="inline-flex items-center text-sm font-medium text-forest group-hover:text-terracotta transition-colors">
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 hover:text-terracotta-800 group">
            {t('gallery.viewAll')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
