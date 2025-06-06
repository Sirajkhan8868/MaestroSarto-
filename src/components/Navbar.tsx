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
        "gallery",
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

  // Disable body scroll on mobile/medium screens when menu is open
  useEffect(() => {
    const handleResizeOrOpen = () => {
      const isLgOrBelow = window.innerWidth < 1024; // lg breakpoint (1024px)
      if (isMenuOpen && isLgOrBelow) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    handleResizeOrOpen();

    window.addEventListener("resize", handleResizeOrOpen);
    return () => {
      window.removeEventListener("resize", handleResizeOrOpen);
      document.body.style.overflow = ""; // cleanup on unmount
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full z-30 shadow-sm transition-all duration-300 ${
        navOnWhite ? "bg-black text-white" : "bg-gray-95% text-white"
      }`}
    >
      <div className="container mx-auto py-2 px-2 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-1">
          <img
            src={down}
            alt="Maestro Sarto Logo"
            className="h-16 sm:h-20 w-auto filter invert brightness-100"
          />
          <a
            href="/"
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white"
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
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t fixed top-[calc(4.5rem)] left-0 w-full z-40 overflow-y-auto max-h-[calc(100vh-4.5rem)]">
          <div className="container py-6 flex flex-col space-y-4 px-4">
            {[
              "about",
              "services",
              "customer",
              "gallery",
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
