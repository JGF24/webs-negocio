import type { DiaHorario } from "@/negocios/tipos";

const aMinutos = (hora: string, esCierre = false) => {
  const [h, m] = hora.split(":").map(Number);
  const total = h * 60 + m;
  return esCierre && total === 0 ? 24 * 60 : total; // "00:00" como cierre = medianoche
};

/** Índice del día con lunes = 0, como en los datos. */
export const indiceHoy = (fecha: Date) => (fecha.getDay() + 6) % 7;

export function estadoAhora(horario: DiaHorario[], fecha = new Date()) {
  const hoy = horario[indiceHoy(fecha)];
  const ahora = fecha.getHours() * 60 + fecha.getMinutes();
  const tramo = hoy.tramos.find(([a, c]) => ahora >= aMinutos(a) && ahora < aMinutos(c, true));
  if (tramo) return { abierto: true, texto: `Abierto ahora · hasta las ${tramo[1]}` };

  const siguienteHoy = hoy.tramos.find(([a]) => aMinutos(a) > ahora);
  if (siguienteHoy) return { abierto: false, texto: `Cerrado · abre hoy a las ${siguienteHoy[0]}` };

  for (let i = 1; i <= 7; i++) {
    const dia = horario[(indiceHoy(fecha) + i) % 7];
    if (dia.tramos.length) {
      const cuando = i === 1 ? "mañana" : `el ${dia.dia.toLowerCase()}`;
      return { abierto: false, texto: `Cerrado · abre ${cuando} a las ${dia.tramos[0][0]}` };
    }
  }
  return { abierto: false, texto: "Cerrado" };
}

export const textoTramos = (d: DiaHorario) =>
  d.tramos.length ? d.tramos.map(([a, c]) => `${a} – ${c}`).join(" · ") : "Cerrado";
