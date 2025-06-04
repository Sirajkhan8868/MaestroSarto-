import React, { useState, useEffect } from "react";
import down from "../assets/images/down.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navOnWhite, setNavOnWhite] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const whiteSections = [
        "about",
        "services",
        "gallery", // changed from "portfolio"
        "customer",
        "contact",
        "fabric-collection",
        "flip-cards-section",
        "tailoredsuit",
        "testimonials",
      ];

      const isAnyWhiteVisible = whiteSections.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom >= 80;
      });

      setNavOnWhite(isAnyWhiteVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-20 shadow-sm transition-all duration-300 ${
        navOnWhite ? "bg-black text-white" : "bg-grey/95 text-white"
      }`}
    >
      <div className="container mx-auto py-2 px-2">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-1">
            <img
              src={down}
              alt="Maestro Sarto Logo"
              className="h-20 w-auto filter invert brightness-100"
            />
            <a
              href="/"
              className="font-serif text-2xl font-bold tracking-tight text-white"
            >
              MAESTRO<span className="text-tailor-black"> SARTO</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {["home", "about", "services", "gallery", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium hover:text-tailor-gold transition-colors"
              >
                {section.toUpperCase()}
              </a>
            ))}
            <Button className="bg-tailor-dark hover:bg-black text-white px-6" size="sm">
              BOOK APPOINTMENT
            </Button>
          </nav>

          {/* Medium Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-5">
            {["home", "about", "services", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium hover:text-tailor-gold transition-colors"
              >
                {section.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-white p-2"
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
          <div className="container py-4 flex flex-col space-y-4 px-4">
            {[
              "about",
              "services",
              "customer",
              "gallery", // changed from "portfolio"
              "contact",
              "fabric-collection",
              "flip-cards-section",
              "tailoredsuit",
              "testimonials",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium py-2 text-tailor-dark hover:text-tailor-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.toUpperCase()}
              </a>
            ))}
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
