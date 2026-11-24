"use client";

import { useState } from "react";
import Icono from "./Icono";
import type { Negocio } from "@/negocios/tipos";

const enlaces = [
  ["#servicios", "Servicios"],
  ["#nosotros", "Nosotros"],
  ["#horario", "Horario"],
  ["#opiniones", "Opiniones"],
] as const;

export default function Cabecera({ negocio }: { negocio: Negocio }) {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className="cabecera">
      <div className="contenedor cabecera__fila">
        <a href="#inicio" className="marca" onClick={cerrar}>
          <span className="marca__icono"><Icono nombre={negocio.icono} tam={18} /></span>
          {negocio.nombre}
        </a>
        <nav className={`nav ${abierto ? "nav--abierta" : ""}`} aria-label="Principal">
          {enlaces.map(([href, texto]) => (
            <a key={href} href={href} onClick={cerrar}>{texto}</a>
          ))}
          <a href="#reserva" className="boton boton--pequeno" onClick={cerrar}>{negocio.hero.cta}</a>
        </nav>
        <button className="nav__boton" onClick={() => setAbierto(!abierto)} aria-expanded={abierto} aria-label="Abrir menú">
          <Icono nombre={abierto ? "cerrar" : "menu"} />
        </button>
      </div>
    </header>
  );
}
