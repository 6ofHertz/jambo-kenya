
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Map, MapPin } from 'lucide-react';

const MapSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Cultural Map of Kenya
          </h2>
          <p className="text-lg text-clay max-w-2xl mx-auto">
            Explore the geographical distribution of Kenya's diverse cultural practices, stories, and traditions.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sand">
          <div className="h-[500px] relative">
            {/* Map placeholder - would be replaced with Google Maps integration */}
            <div className="absolute inset-0 bg-gradient-to-br from-ochre/20 to-forest/20 flex items-center justify-center">
              <div className="text-center p-8 max-w-md">
                <Map className="h-16 w-16 text-forest mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-forest mb-4">Interactive Cultural Map</h3>
                <p className="mb-6 text-clay">
                  This area would feature an interactive map using Google Maps API, showing cultural points of interest across Kenya.
                </p>
                <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  View Demo Map
                </Button>
              </div>
            </div>
            
            {/* Sample map pins - these would be dynamic in the real implementation */}
            <div className="absolute top-1/4 left-1/3 animate-pulse-slow">
              <div className="w-4 h-4 bg-terracotta rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 animate-pulse-slow" style={{ animationDelay: '0.7s' }}>
              <div className="w-4 h-4 bg-forest rounded-full"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 animate-pulse-slow" style={{ animationDelay: '1.3s' }}>
              <div className="w-4 h-4 bg-sunset rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          A full implementation would connect to Google Maps API to display cultural data points across Kenya.
        </div>
      </div>
    </section>
  );
};

export default MapSection;
