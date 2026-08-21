import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

// Mitxi Cuidados · Warmth & Trust: contacto simple, cercano y orientado a Instagram.
export default function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ponte en contacto
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Para más detalles del servicio vía Instagram
            </p>
          </div>

          {/* Instagram CTA */}
          
          {/* QR de Instagram */}
          <figure className="pt-6 flex flex-col items-center gap-4">
            <a
              href="https://instagram.com/mitxicuidados"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir el perfil de Instagram de Mitxi Cuidados"
              className="group rounded-2xl bg-white p-4 shadow-lg ring-1 ring-primary/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              <img
                src="/images/mitxicuidados_qr.png"
                alt="Código QR para visitar el perfil de Instagram @mitxicuidados"
                loading="lazy"
                decoding="async"
                className="w-56 h-auto rounded-xl sm:w-64"
              />
            </a>
            <figcaption className="text-sm text-foreground/60">
              Escanea el código para visitarme en Instagram
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
