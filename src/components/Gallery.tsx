
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    title: 'Maasai Cultural Practices',
    description: 'Traditional ceremonies and daily life of the Maasai people.',
    type: 'Culture',
    color: 'bg-terracotta',
  },
  {
    id: 2,
    title: 'Kikuyu Creation Myths',
    description: 'Stories of how the Kikuyu people came to be and their relationship with Mount Kenya.',
    type: 'Folklore',
    color: 'bg-forest',
  },
  {
    id: 3,
    title: 'Swahili Architecture',
    description: 'The unique blend of African, Arabic, and Indian influences in coastal Kenyan buildings.',
    type: 'Architecture',
    color: 'bg-clay',
  },
  {
    id: 4,
    title: 'Traditional Musical Instruments',
    description: 'Exploring the sounds and craftsmanship of Kenyan musical heritage.',
    type: 'Music',
    color: 'bg-ochre',
  },
  {
    id: 5,
    title: 'Kenyan Textiles & Patterns',
    description: 'The vibrant fabrics and meaningful designs across different communities.',
    type: 'Art',
    color: 'bg-sunset',
  },
  {
    id: 6,
    title: 'Wildlife in Kenyan Mythology',
    description: 'How animals feature in traditional stories and cultural beliefs.',
    type: 'Folklore',
    color: 'bg-forest',
  },
];

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-clay max-w-2xl mx-auto">
            Explore visual and written representations of Kenya's diverse cultural heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-sand hover:border-terracotta/30"
            >
              <div className="h-48 relative overflow-hidden">
                <div className={`absolute inset-0 ${item.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">AI Generated Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-forest">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-clay mb-4">{item.description}</p>
                <button className="text-terracotta hover:text-terracotta/80 font-medium flex items-center">
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-terracotta text-terracotta hover:text-white hover:bg-terracotta/90">
            {t('gallery.viewAll')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
