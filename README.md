# Webs para negocios locales · plantilla en Next.js

Plantilla con la que hago webs para negocios locales en 1-2 días. Cada web se genera a partir de **un solo archivo de datos**: nombre, colores, servicios y precios, horario, equipo, opiniones, preguntas frecuentes y tipo de reserva.

👉 Demos: https://jgf24.github.io/webs-negocio/

| Demo | Sector | Qué enseña |
|---|---|---|
| [Lúa Estudio](https://jgf24.github.io/webs-negocio/peluqueria/) | Peluquería | Servicios por categorías y reserva de cita |
| [Casa Breogán](https://jgf24.github.io/webs-negocio/restaurante/) | Restaurante | Carta por secciones, tema oscuro y reserva de mesa |
| [FisioMar](https://jgf24.github.io/webs-negocio/fisioterapia/) | Fisioterapia | Tratamientos y bonos, y cita según el motivo |

*Los tres negocios son ficticios.*

## Qué incluye cada web
- **Aviso de «abierto ahora / cerrado»**, calculado con la hora del visitante y el horario del negocio.
- **Precios con pestañas** por categoría (carta, servicios, bonos).
- **Reserva por WhatsApp sin servidor**: el formulario valida los datos y prepara el mensaje para enviarlo al WhatsApp del negocio (en las demos solo se muestra).
- Horario con el día de hoy resaltado, opiniones, preguntas frecuentes y datos de contacto.
- Diseño adaptado al móvil, con menú desplegable, y temas claros u oscuros según el negocio.
- Exportación estática: se sube a cualquier hosting, y GitHub Pages, Netlify o Vercel son gratis.

## Crear la web de un negocio nuevo
1. Copia `negocios/peluqueria.ts` con otro nombre y cambia los datos.
2. Añádelo a la lista de `negocios/index.ts`.
3. `npm run build`: la web queda en `out/`, lista para subir.

```powershell
npm install
npm run dev     # http://localhost:3000/webs-negocio/
npm run build   # genera la web estática en out/
```

## Tecnologías
Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · CSS sin librerías

Hecho por [Julián Graña](https://jgf24.github.io).
