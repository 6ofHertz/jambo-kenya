
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English and Swahili translations
const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.chat': 'AI Chat',
    'nav.gallery': 'Gallery',
    'nav.submit': 'Submit Content',
    
    // Hero Section
    'hero.title': 'Discover Kenya Through AI',
    'hero.subtitle': 'Explore rich cultural heritage with modern technology',
    'hero.cta': 'Start Exploring',
    
    // About Section
    'about.title': 'Preserving Cultural Heritage',
    'about.description': 'JamboKenya uses artificial intelligence to celebrate and preserve Kenyan cultural heritage for future generations.',
    'about.mission': 'Our mission is to document, share, and promote the rich diversity of Kenyan traditions, stories, and art.',
    
    // Chat Section
    'chat.title': 'Chat with JamboAI',
    'chat.placeholder': 'Ask about Kenyan folklore, traditions, or history...',
    'chat.button': 'Send',
    'chat.intro': 'Hello! I\'m JamboAI. Ask me about Kenyan folklore and traditions!',
    
    // Gallery
    'gallery.title': 'Cultural Gallery',
    'gallery.viewAll': 'View All',
    
    // Submission
    'submit.title': 'Share Your Story',
    'submit.description': 'Contribute to our cultural repository by sharing stories, artwork, or photographs.',
    'submit.name': 'Your Name',
    'submit.email': 'Email Address',
    'submit.type': 'Submission Type',
    'submit.story': 'Story',
    'submit.artwork': 'Artwork',
    'submit.photo': 'Photo',
    'submit.content': 'Your Content',
    'submit.button': 'Submit',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact Us',
  },
  sw: {
    // Navbar
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu',
    'nav.chat': 'Mazungumzo ya AI',
    'nav.gallery': 'Mkusanyiko',
    'nav.submit': 'Tuma Maudhui',
    
    // Hero Section
    'hero.title': 'Gundua Kenya Kupitia AI',
    'hero.subtitle': 'Chunguza urithi wa kitamaduni kwa teknolojia ya kisasa',
    'hero.cta': 'Anza Kuchunguza',
    
    // About Section
    'about.title': 'Kuhifadhi Urithi wa Kitamaduni',
    'about.description': 'JamboKenya hutumia akili bandia kusherehekea na kuhifadhi urithi wa kitamaduni wa Kenya kwa vizazi vijavyo.',
    'about.mission': 'Dhumuni letu ni kuandika, kushiriki, na kukuza utajiri wa tamaduni, hadithi, na sanaa za Kenya.',
    
    // Chat Section
    'chat.title': 'Zungumza na JamboAI',
    'chat.placeholder': 'Uliza kuhusu hadithi za Kenya, tamaduni, au historia...',
    'chat.button': 'Tuma',
    'chat.intro': 'Hujambo! Mimi ni JamboAI. Niulize kuhusu hadithi na tamaduni za Kenya!',
    
    // Gallery
    'gallery.title': 'Mkusanyiko wa Kitamaduni',
    'gallery.viewAll': 'Tazama Zote',
    
    // Submission
    'submit.title': 'Shiriki Hadithi Yako',
    'submit.description': 'Changia kwenye hazina yetu ya kitamaduni kwa kushiriki hadithi, sanaa, au picha.',
    'submit.name': 'Jina Lako',
    'submit.email': 'Anwani ya Barua Pepe',
    'submit.type': 'Aina ya Maudhui',
    'submit.story': 'Hadithi',
    'submit.artwork': 'Sanaa',
    'submit.photo': 'Picha',
    'submit.content': 'Maudhui Yako',
    'submit.button': 'Tuma',
    
    // Footer
    'footer.rights': 'Haki zote zimehifadhiwa',
    'footer.privacy': 'Sera ya Faragha',
    'footer.terms': 'Masharti ya Matumizi',
    'footer.contact': 'Wasiliana Nasi',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    // @ts-ignore - We know our translations match
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
