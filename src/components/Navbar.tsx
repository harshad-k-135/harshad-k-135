import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    const navbarHeight = 80; // Approximate navbar height
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/65 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 font-semibold text-xl tracking-tight cursor-pointer text-white" onClick={() => scrollToSection('hero')}>
            <span className="text-orange-400">Harshad</span>.Karle
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['About', 'Projects', 'Publications', 'Articles', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/70 hover:text-orange-300 px-3 py-2 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
            href="https://resumego.link/hmk1305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-orange-100 hover:bg-white/10 hover:text-orange-50 transition"
          >
          Resume
          </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white/80 hover:text-orange-300"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-b border-white/10">
          {['About', 'Projects', 'Publications', 'Articles', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-orange-300 font-medium"
            >
              {item}
            </button>
          ))}
          <a
            href="https://resumego.link/hmk1305"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left px-3 py-2 text-white/80 hover:text-orange-300 font-medium"
          >
          Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;