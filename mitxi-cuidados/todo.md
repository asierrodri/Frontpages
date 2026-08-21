# Tareas: corrección de imágenes en local

- [ ] Copiar las imágenes generadas al paquete local.
- [ ] Cambiar las referencias `/manus-storage/...` por rutas locales.
- [ ] Ejecutar una comprobación de compilación.
- [ ] Crear y entregar un ZIP corregido con instrucciones de uso.

## Completado

- Diagnóstico inicial: las rutas `/manus-storage/...` no se resuelven al ejecutar el proyecto directamente en `localhost`.

---

## Decisión técnica

Para que la web funcione sin depender de rutas internas de Manus, el paquete local incluirá los recursos visuales en `client/public/images/` y los componentes usarán rutas absolutas locales como `/images/mitxi-hero.png`.
