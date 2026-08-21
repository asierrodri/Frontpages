import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm md:text-base">
                Cuidado de gatos a domicilio
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Tu mitxi en buenas manos
              </h1>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              ¡Hola! Soy una amante de los gatitos y estaría encantada de ayudarte en los momentos dónde te resulte más complicado. Cada mitxi es único y mi objetivo es que se sienta acompañado de la mejor manera durante ese tiempo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('servicios')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Ver servicios
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-8 pt-8 text-sm">
              <div>
                <p className="font-bold text-primary text-lg">12+</p>
                <p className="text-foreground/60">Gatos felices</p>
              </div>
              <div>
                <p className="font-bold text-primary text-lg">100%</p>
                <p className="text-foreground/60">Confianza</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 md:h-full md:min-h-96 animate-fade-in-delayed">
            <img
              src="/images/mitxi-hero.png"
              alt="Gato feliz"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/40" />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
