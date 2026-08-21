import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/mitxi-logo.png"
                alt="Mitxi Cuidados"
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">Mitxi Cuidados</span>
            </div>
            <p className="text-primary-foreground/80">
              Cuidado profesional de gatos a domicilio en Bilbao, con amor y confianza.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold">Enlaces</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-primary-foreground transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold">Contacto</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="https://instagram.com/mitxicuidados" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  Instagram: @mitxicuidados
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © 2026 Mitxi Cuidados. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 fill-current" />
              <span>para los gatos de Bilbao</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
