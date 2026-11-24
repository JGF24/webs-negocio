"use client";

import { useEffect, useState } from "react";
import { indiceHoy, textoTramos } from "@/lib/horario";
import type { DiaHorario } from "@/negocios/tipos";

export default function Horario({ horario }: { horario: DiaHorario[] }) {
  const [hoy, setHoy] = useState<number | null>(null);
  useEffect(() => setHoy(indiceHoy(new Date())), []);

  return (
    <ul className="horario">
      {horario.map((d, i) => (
        <li key={d.dia} className={`horario__dia ${i === hoy ? "horario__dia--hoy" : ""} ${d.tramos.length ? "" : "horario__dia--cerrado"}`}>
          <span>{d.dia}{i === hoy && <em> · hoy</em>}</span>
          <span>{textoTramos(d)}</span>
        </li>
      ))}
    </ul>
  );
}
