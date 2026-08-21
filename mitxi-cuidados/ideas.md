# Mitxi Cuidados - Concepto de Diseño Web

## Enfoque de Diseño Elegido: **Warmth & Trust**

### Filosofía de Diseño
**Warmth & Trust** es un enfoque que combina calidez emocional con profesionalismo. El diseño transmite que los gatos están en manos amorosas pero competentes. La paleta es suave, los espacios respiran, y cada elemento comunica cuidado genuino.

### Principios Fundamentales
1. **Calidez Humana**: Colores cálidos y suaves que evocan confort y seguridad
2. **Profesionalismo Discreto**: Tipografía refinada y espaciado generoso sin parecer corporativo
3. **Confianza Visual**: Fotos reales de gatos cuidados, testimonios auténticos, transparencia en servicios
4. **Accesibilidad Emocional**: Lenguaje cercano, no formal; que los dueños de gatos se sientan comprendidos

### Filosofía de Color
- **Primario**: Terracota suave (`#D4845C`) - cálido, acogedor, asociado con tierra y hogar
- **Secundario**: Crema (`#F5F1E8`) - fondo cálido que no cansa la vista
- **Acentos**: Verde salvia (`#8B9D6F`) - naturaleza, calma, bienestar felino
- **Texto**: Gris carbón (`#2C2C2C`) - legible sin ser frío

**Intención emocional**: El usuario debe sentir que su gato estará en un hogar acogedor, no en una oficina.

### Paradigma de Layout
- **Hero asimétrico**: Imagen de gato feliz a la derecha, texto y CTA a la izquierda
- **Secciones alternadas**: Texto-Imagen, Imagen-Texto para ritmo visual
- **Espacios respiran**: Márgenes generosos, líneas cortas de texto (40-50 caracteres)
- **Flujo natural**: Guía el ojo desde "¿Quién cuida a mi gato?" → "¿Qué incluye?" → "¿Cómo reservo?"

### Elementos Distintivos
1. **Pata de gato como motivo**: Pequeña pata en esquinas, separadores, botones (no invasiva)
2. **Tarjetas con sombra suave**: Cada servicio en tarjeta con `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`
3. **Tipografía dual**: Display bold para títulos (Playfair Display), body legible para contenido (Lato)

### Filosofía de Interacción
- Botones con hover suave (cambio de color + elevación)
- Transiciones de 200-250ms (no demasiado rápido, no lento)
- Hover en tarjetas: sombra aumenta, se eleva ligeramente
- CTA principal: "Reservar ahora" siempre visible, accesible

### Animaciones
- Entrada suave de elementos al scroll (fade-in + slide-up, 300ms)
- Hover en botones: `scale(1.02)` + cambio de color
- Transición de nav al scroll: fondo se vuelve semi-transparente
- Respeto a `prefers-reduced-motion`

### Sistema Tipográfico
- **Display**: Playfair Display Bold (títulos principales, h1-h2)
- **Heading**: Lato Bold (h3-h4, secciones)
- **Body**: Lato Regular (párrafos, 16px en desktop, 14px en mobile)
- **Jerarquía**: h1 48px, h2 36px, h3 24px, body 16px

### Esencia de Marca
**Posicionamiento**: "El cuidado de gatos que merece tu confianza en Bilbao"
**Para quién**: Dueños de gatos que trabajan y quieren lo mejor para sus mascotas
**Por qué es diferente**: Combinamos profesionalismo con amor genuino por los felinos

**Personalidad**: Cálida, confiable, cercana, experta

### Voz de Marca
- **Tono**: Amigable pero profesional, como hablaría una amiga que es experta en gatos
- **Ejemplo CTA**: "Deja que tu gato disfrute mientras trabajas" (no "Get started today")
- **Ejemplo descripción**: "Sabemos que tu gato es parte de la familia. Por eso cuidamos cada detalle." (no "Professional cat care services")

### Marca Visual
- **Logo**: Pata estilizada en terracota, minimalista, sin texto
- **Color de firma**: Terracota `#D4845C` - inconfundible para Mitxi

### Estructura de Páginas
1. **Home**: Hero + Servicios + Sobre mí + Testimonios + Contacto
2. **Responsive**: Mobile-first, breakpoints en 768px y 1024px
3. **Navegación**: Header sticky con logo + nav items + botón reserva

---

## Decisiones de Estilo Finales
- Máximo 2 fuentes (Playfair Display + Lato)
- Paleta de 5 colores (primario, secundario, acentos, texto, fondo)
- Sombras suaves, sin bordes duros
- Espaciado basado en múltiplos de 8px (8, 16, 24, 32, 48)
