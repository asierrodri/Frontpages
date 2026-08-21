import { Heart, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Amorcito',
    description: 'Cada gato recibe cuidado como si fuera mío propio. Tu gato no es un cliente, es parte de la familia Mitxi.',
  },
  {
    icon: Shield,
    title: 'Confianza total',
    description: 'Acceso seguro a tu hogar, fotos y actualizaciones en cada visita. Sabrás exactamente cómo está tu gato.',
  },
  {
    icon: Zap,
    title: 'Comprensión',
    description: 'Experiencia con gatos. Conozco sus comportamientos, necesidades y cómo mantenerlos seguros y felices.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm md:text-base">
                Sobre Mitxi Cuidados
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Cuidado con Amor
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Los animales son parte de nuestra familia y entendemos la importancia de unos cuidados individualizados que se ajuste a ellos.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-semibold text-sm">Zona de cobertura</p>
                <h3 className="text-2xl font-bold text-foreground">
                  Bilbao y alrededores
                </h3>
                <p className="text-foreground/70">
                  Atiendo toda la zona metropolitana de Bilbao. Consulta si tu barrio está incluido.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-border rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-primary">24h</p>
                <p className="text-sm text-foreground/60 mt-2">Disponibilidad</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-primary">7 días</p>
                <p className="text-sm text-foreground/60 mt-2">A la semana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
