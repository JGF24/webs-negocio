import Link from "next/link";
import Icono from "@/components/Icono";
import { negocios } from "@/negocios";

export default function Inicio() {
  return (
    <main className="indice">
      <div className="contenedor">
        <p className="etiqueta">Demos · Next.js + TypeScript</p>
        <h1>Webs de ejemplo para negocios locales</h1>
        <p className="indice__texto">
          Tres webs de negocios ficticios hechas con la misma plantilla: precios, horario con aviso de
          «abierto ahora», opiniones, preguntas frecuentes y reservas por WhatsApp. Cada una se adapta
          cambiando un solo archivo de datos.
        </p>
        <ul className="tarjetas">
          {negocios.map((n) => (
            <li key={n.slug}>
              <Link href={`/${n.slug}/`} className="tarjeta"
                style={{ "--primario": n.tema.primario, "--fondo-t": n.tema.fondo, "--texto-t": n.tema.texto } as React.CSSProperties}>
                <span className="tarjeta__portada">
                  <span className="tarjeta__icono"><Icono nombre={n.icono} tam={40} /></span>
                  <span className="tarjeta__nombre">{n.nombre}</span>
                </span>
                <span className="tarjeta__cuerpo">
                  <strong>{n.sector}</strong>
                  <span>{n.hero.titulo}</span>
                  <span className="tarjeta__ver">Ver demo <Icono nombre="flecha" tam={16} /></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="indice__pie">
          Hecho por <a href="https://jgf24.github.io">Julián Graña</a> · ¿Quieres una web así para tu negocio?{" "}
          <a href="https://www.fiverr.com/julian_grana/build-a-fast-website-or-web-app-with-next-js-and-typescript">Pídela aquí</a>
        </p>
      </div>
    </main>
  );
}
