
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
  };

  return (
    <nav className="bg-sand/80 backdrop-blur-sm shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-display font-bold text-forest">Jambo<span className="text-terracotta">Kenya</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-forest hover:text-terracotta transition-colors font-medium">{t('nav.home')}</a>
          <a href="#about" className="text-forest hover:text-terracotta transition-colors font-medium">{t('nav.about')}</a>
          <a href="#chat" className="text-forest hover:text-terracotta transition-colors font-medium">{t('nav.chat')}</a>
          <a href="#gallery" className="text-forest hover:text-terracotta transition-colors font-medium">{t('nav.gallery')}</a>
          <a href="#submit" className="text-forest hover:text-terracotta transition-colors font-medium">{t('nav.submit')}</a>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-forest/10">
                <Globe className="h-5 w-5 text-forest" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={toggleLanguage}
                className="cursor-pointer"
              >
                {language === 'en' ? 'Swahili' : 'English'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            className="md:hidden text-forest"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sand/95 backdrop-blur-sm shadow-lg p-4 z-50 pattern-overlay">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-forest hover:text-terracotta transition-colors py-2 px-4 rounded-md hover:bg-forest/10" onClick={toggleMenu}>{t('nav.home')}</a>
            <a href="#about" className="text-forest hover:text-terracotta transition-colors py-2 px-4 rounded-md hover:bg-forest/10" onClick={toggleMenu}>{t('nav.about')}</a>
            <a href="#chat" className="text-forest hover:text-terracotta transition-colors py-2 px-4 rounded-md hover:bg-forest/10" onClick={toggleMenu}>{t('nav.chat')}</a>
            <a href="#gallery" className="text-forest hover:text-terracotta transition-colors py-2 px-4 rounded-md hover:bg-forest/10" onClick={toggleMenu}>{t('nav.gallery')}</a>
            <a href="#submit" className="text-forest hover:text-terracotta transition-colors py-2 px-4 rounded-md hover:bg-forest/10" onClick={toggleMenu}>{t('nav.submit')}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
