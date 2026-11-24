"use client";

import { useState } from "react";
import type { Negocio } from "@/negocios/tipos";

export default function Servicios({ datos }: { datos: Negocio["servicios"] }) {
  const [activo, setActivo] = useState(0);
  const grupo = datos.grupos[activo];

  return (
    <div className="servicios">
      {datos.grupos.length > 1 && (
        <div className="pestanas" role="tablist">
          {datos.grupos.map((g, i) => (
            <button key={g.titulo} role="tab" aria-selected={i === activo}
              className={`pestana ${i === activo ? "pestana--activa" : ""}`} onClick={() => setActivo(i)}>
              {g.titulo}
            </button>
          ))}
        </div>
      )}
      <ul className="lista-precios" role="tabpanel">
        {grupo.items.map((s) => (
          <li key={s.nombre} className="precio">
            <div className="precio__fila">
              <span className="precio__nombre">{s.nombre}</span>
              <span className="precio__puntos" />
              <span className="precio__valor">{s.precio}</span>
            </div>
            {(s.descripcion || s.duracion) && (
              <p className="precio__detalle">
                {s.descripcion}{s.descripcion && s.duracion ? " · " : ""}{s.duracion}
              </p>
            )}
          </li>
        ))}
      </ul>
      {datos.nota && <p className="nota">{datos.nota}</p>}
    </div>
  );
}
