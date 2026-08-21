import { Card } from '@/components/ui/card';
import { Utensils, Gamepad2, Sparkles } from 'lucide-react';

const services = [
  {
    id: 'feeding',
    title: 'Alimentación',
    description: 'Comida fresca y agua limpia en cada visita. Respeto a las preferencias y dietas especiales de tu gato.',
    icon: Utensils,
    image: '/images/mitxi-service-feeding.png',
  },
  {
    id: 'play',
    title: 'Juego y enriquecimiento',
    description: 'Tiempo de juego interactivo y estimulación mental. Mantemos a tu gato activo, feliz y entretenido.',
    icon: Gamepad2,
    image: '/images/mitxi-service-play.png',
  },
  {
    id: 'cleaning',
    title: 'Limpieza y cuidado',
    description: 'Limpieza del arenero, cambio de arena y cuidado del espacio. Un hogar limpio es un gato feliz.',
    icon: Sparkles,
    image: '/images/mitxi-service-cleaning.png',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm md:text-base">
            ¿Qué incluye nuestro servicio?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Cuidado integral para tu gato
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Cada visita incluye todo lo que tu gato necesita para estar feliz, seguro y bien cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
