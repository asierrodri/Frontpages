import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Scissors, MapPin, Clock, Phone, Star, Menu, X, Calendar, Instagram, Facebook, Twitter } from 'lucide-react'

// Importar imágenes
import salonInterior1 from './assets/images/salon_interior_1.png'
import salonInterior2 from './assets/images/salon_interior_2.png'
import haircutMale1 from './assets/images/haircut_male_1.png'
import haircutMale2 from './assets/images/haircut_male_2.png'
import bilbaoGuggenheim from './assets/images/bilbao_guggenheim.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: "Corte Guggenheim",
      description: "Corte moderno y vanguardista inspirado en la arquitectura bilbaína",
      price: "35€",
      image: haircutMale1
    },
    {
      title: "Estilo Casco Viejo",
      description: "Corte clásico con un toque contemporáneo",
      price: "30€",
      image: haircutMale2
    },
    {
      title: "Color & Textura",
      description: "Coloración profesional y tratamientos de textura",
      price: "45€",
      image: salonInterior1
    },
    {
      title: "Barba & Bigote",
      description: "Arreglo y diseño de barba con productos premium",
      price: "25€",
      image: salonInterior2
    }
  ]

  const testimonials = [
    {
      name: "Mikel Etxebarria",
      text: "El mejor salón de Bilbao. Profesionalidad y estilo únicos.",
      rating: 5
    },
    {
      name: "Ane Goikoetxea",
      text: "Siempre salgo encantada. El equipo es excepcional.",
      rating: 5
    },
    {
      name: "Jon Urrutia",
      text: "Ambiente moderno y resultados perfectos. Muy recomendable.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">Salón Bilbao</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-amber-600 transition-colors">Servicios</a>
            <a href="#galeria" className="text-gray-700 hover:text-amber-600 transition-colors">Galería</a>
            <a href="#testimonios" className="text-gray-700 hover:text-amber-600 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors">Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-amber-600 transition-colors">Servicios</a>
              <a href="#galeria" className="text-gray-700 hover:text-amber-600 transition-colors">Galería</a>
              <a href="#testimonios" className="text-gray-700 hover:text-amber-600 transition-colors">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors">Contacto</a>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${salonInterior1})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Salón Bilbao
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Peluquería moderna en el corazón de Bilbao. Donde el estilo se encuentra con la vanguardia.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <Calendar className="inline-block mr-2 h-5 w-5" />
              Reservar Cita
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Ver Servicios
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios de peluquería con técnicas modernas y productos de alta calidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                      Reservar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestro Trabajo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre algunos de nuestros trabajos más destacados y el ambiente único de nuestro salón.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[salonInterior1, salonInterior2, haircutMale1, haircutMale2, bilbaoGuggenheim, salonInterior1].map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={image} 
                  alt={`Galería ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold transition-all duration-300">
                    Ver más
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visítanos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos ubicados en el corazón de Bilbao, cerca del Guggenheim.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
                  <p className="text-gray-600">Calle Alameda de Mazarredo, 47<br />48009 Bilbao, Bizkaia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Horarios</h3>
                  <p className="text-gray-600">
                    Lunes - Viernes: 9:00 - 20:00<br />
                    Sábados: 9:00 - 18:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contacto</h3>
                  <p className="text-gray-600">
                    Teléfono: +34 944 123 456<br />
                    Email: info@salonbilbao.com
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full font-semibold transition-colors">
                  <Calendar className="inline-block mr-2 h-5 w-5" />
                  Reservar Cita Online
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={bilbaoGuggenheim} 
                alt="Ubicación cerca del Guggenheim Bilbao"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Cerca del Guggenheim</h3>
                  <p className="text-sm">A solo 2 minutos caminando del museo más emblemático de Bilbao</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-8 w-8 text-amber-600" />
                <span className="text-2xl font-bold">Salón Bilbao</span>
              </div>
              <p className="text-gray-400">
                Peluquería moderna en el corazón de Bilbao, donde el estilo se encuentra con la vanguardia.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#galeria" className="text-gray-400 hover:text-white transition-colors">Galería</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Salón Bilbao. Todos los derechos reservados. | Diseño web profesional para peluquerías.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

