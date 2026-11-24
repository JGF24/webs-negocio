"use client";

import { useEffect, useState } from "react";
import { estadoAhora } from "@/lib/horario";
import type { DiaHorario } from "@/negocios/tipos";

/** Indica si el negocio está abierto según la hora del visitante. Se calcula en el navegador. */
export default function EstadoAbierto({ horario }: { horario: DiaHorario[] }) {
  const [estado, setEstado] = useState<ReturnType<typeof estadoAhora> | null>(null);

  useEffect(() => {
    const actualizar = () => setEstado(estadoAhora(horario));
    actualizar();
    const id = setInterval(actualizar, 60_000);
    return () => clearInterval(id);
  }, [horario]);

  if (!estado) return <span className="estado estado--cargando">&nbsp;</span>;
  return (
    <span className={`estado ${estado.abierto ? "estado--abierto" : "estado--cerrado"}`}>
      <span className="estado__punto" /> {estado.texto}
    </span>
  );
}
