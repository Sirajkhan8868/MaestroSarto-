
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="font-serif text-2xl font-bold tracking-tight">
              MAESTRO<span className="text-tailor-gold">SARTO</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              HOME
            </a>
            <a href="#about" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              ABOUT
            </a>
            <a href="#services" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              SERVICES
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              PORTFOLIO
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              CONTACT
            </a>
            <Button 
              className="bg-tailor-dark hover:bg-black text-white px-6"
              size="sm"
            >
              BOOK APPOINTMENT
            </Button>
          </nav>

          {/* Medium Device Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-5">
            <a href="#home" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              HOME
            </a>
            <a href="#about" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              ABOUT
            </a>
            <a href="#services" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              SERVICES
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-tailor-gold transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-tailor-dark p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-sm font-medium py-2 hover:text-tailor-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium py-2 hover:text-tailor-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium py-2 hover:text-tailor-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </a>
            <a 
              href="#portfolio" 
              className="text-sm font-medium py-2 hover:text-tailor-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PORTFOLIO
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium py-2 hover:text-tailor-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
            <Button 
              className="bg-tailor-dark hover:bg-black text-white w-full mt-4"
              size="sm"
            >
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
