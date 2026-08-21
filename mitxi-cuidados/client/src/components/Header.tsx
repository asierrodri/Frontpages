import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/mitxi-logo.png"
            alt="Mitxi Cuidados"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-primary hidden sm:inline">
            Mitxi Cuidados
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('servicios')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre mí
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* CTA Button */}
        <Button
          onClick={() => scrollToSection('contacto')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Reservar ahora
        </Button>
      </div>
    </header>
  );
}
