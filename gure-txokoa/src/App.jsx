import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { MapPin, Phone, Clock, Mail, Star, ChefHat, Wine, Utensils } from 'lucide-react'
import './App.css'

// Importar imágenes
import heroImage from './assets/tpw9Uc2xJe24.jpg'
import aboutImage from './assets/epKbVdsufBPz.jpg'
import dish1 from './assets/eSU0cUWPTGsm.jpg'
import dish2 from './assets/4O0UvDhv7ptc.jpg'
import cocktail from './assets/nOi0nDyKLaBz.jpg'
import pintxos from './assets/i3EGy8UvY550.jpg'
import barman from './assets/4ZfGLAQJzoJX.jpg'
import interior1 from './assets/F3Lec8VLuWhb.jpg'
import interior2 from './assets/OO15ZABD809o.jpg'
import interior3 from './assets/p68FL8lAUniV.jpg'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-900">Gure Txokoa</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">Inicio</a>
                <a href="#sobre-nosotros" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">Sobre Nosotros</a>
                <a href="#menu" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">Menú</a>
                <a href="#galeria" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">Galería</a>
                <a href="#contacto" className="text-amber-900 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
              </div>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Reservar Mesa
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">Gure Txokoa</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Sabores vascos con alma moderna en el corazón de Bilbao</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              Reservar Mesa
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg">
              Ver Menú
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6 font-serif">Nuestra Historia</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En Gure Txokoa, fusionamos la rica tradición culinaria vasca con técnicas modernas e ingredientes de temporada. 
                Nuestro compromiso es ofrecer una experiencia gastronómica única que honre nuestras raíces mientras abraza la innovación.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ubicados en el vibrante corazón de Bilbao, somos más que un restaurante: somos un punto de encuentro donde 
                la pasión por la cocina se encuentra con la calidez de la hospitalidad vasca.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <ChefHat className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">Chef Experto</p>
                </div>
                <div className="text-center">
                  <Wine className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">Vinos Selectos</p>
                </div>
                <div className="text-center">
                  <Utensils className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">Cocina Moderna</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Interior del restaurante" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menú Destacado */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Nuestros Platos Estrella</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra selección de platos que combinan la tradición vasca con toques contemporáneos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img src={dish1} alt="Plato gourmet" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Bacalao al Pil Pil Moderno</h3>
                <p className="text-gray-600 mb-4">Bacalao confitado con emulsión de ajo y guindilla, acompañado de espuma de patata</p>
                <p className="text-2xl font-bold text-amber-600">28€</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img src={dish2} alt="Plato artístico" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Txuleta de Buey Madurada</h3>
                <p className="text-gray-600 mb-4">Chuletón de 45 días de maduración con pimientos de Gernika y patatas confitadas</p>
                <p className="text-2xl font-bold text-amber-600">45€</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img src={pintxos} alt="Pintxos modernos" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Selección de Pintxos</h3>
                <p className="text-gray-600 mb-4">Variedad de pintxos tradicionales y de autor, perfectos para compartir</p>
                <p className="text-2xl font-bold text-amber-600">3-8€</p>
              </CardContent>
            </Card>
          </div>

          {/* Sección de Cócteles */}
          <div className="bg-amber-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif">Cócteles de Autor</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Nuestro bartender crea cócteles únicos inspirados en los sabores vascos, 
                  utilizando licores locales y técnicas innovadoras.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-amber-900">Txakoli Spritz</span>
                    <span className="text-amber-600 font-bold">12€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-amber-900">Kalimotxo Premium</span>
                    <span className="text-amber-600 font-bold">10€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-amber-900">Patxaran Sour</span>
                    <span className="text-amber-600 font-bold">14€</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={cocktail} 
                  alt="Cóctel de autor" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              Ver Menú Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Ambiente y Sabores</h2>
            <p className="text-xl text-gray-600">Un vistazo a la experiencia que te espera en Gure Txokoa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={barman} alt="Bartender preparando cóctel" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Coctelería de Autor</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={interior1} alt="Interior del bar" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Ambiente Acogedor</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={interior2} alt="Comedor moderno" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Diseño Moderno</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={interior3} alt="Barra colorida" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Barra Vibrante</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg md:col-span-2">
              <img src={heroImage} alt="Vista general del restaurante" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Experiencia Completa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Lo que Dicen Nuestros Clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Una experiencia gastronómica excepcional. La fusión de tradición y modernidad es perfecta."
              </p>
              <p className="font-semibold text-amber-900">María González</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Los cócteles son increíbles y el ambiente es perfecto para una cena especial."
              </p>
              <p className="font-semibold text-amber-900">Javier Ruiz</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "El mejor restaurante de Bilbao. Cada plato es una obra de arte."
              </p>
              <p className="font-semibold text-amber-900">Ana Martín</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto y Ubicación */}
      <section id="contacto" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Encuéntranos en el Corazón de Bilbao</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Calle Gran Vía, 25, 48001 Bilbao, Bizkaia</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">+34 944 123 456</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">reservas@guretxokoa.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-3" />
                    <div className="text-gray-700">
                      <p>Lun-Jue: 13:00 - 16:00, 20:00 - 24:00</p>
                      <p>Vie-Sáb: 13:00 - 16:00, 20:00 - 01:00</p>
                      <p>Dom: 13:00 - 16:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                    Hacer Reserva
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-600 text-lg">Mapa Interactivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Gure Txokoa</h3>
              <p className="text-amber-100 mb-4">
                Sabores vascos con alma moderna en el corazón de Bilbao
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-amber-100">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menú</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-100 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-amber-100 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-amber-100 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
            <p>&copy; 2025 Gure Txokoa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

