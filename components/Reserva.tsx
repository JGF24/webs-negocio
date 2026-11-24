"use client";

import { useState } from "react";
import Icono from "./Icono";
import type { Negocio } from "@/negocios/tipos";

type Errores = Partial<Record<"nombre" | "telefono" | "fecha" | "hora" | "personas", string>>;

const hoyISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const fechaLegible = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });

/**
 * Formulario de reserva. En una web real, al enviarlo abre WhatsApp del negocio con el mensaje
 * ya escrito (enlace wa.me), sin servidor ni base de datos. En esta demo solo enseña el mensaje.
 */
export default function Reserva({ negocio }: { negocio: Negocio }) {
  const { reserva } = negocio;
  const [errores, setErrores] = useState<Errores>({});
  const [mensaje, setMensaje] = useState<string | null>(null);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const err: Errores = {};

    if (v("nombre").length < 2) err.nombre = "Escribe tu nombre.";
    if (!/^[+0-9 ]{9,16}$/.test(v("telefono"))) err.telefono = "Escribe un teléfono válido.";
    if (!v("fecha")) err.fecha = "Elige un día.";
    else if (v("fecha") < hoyISO()) err.fecha = "Elige un día a partir de hoy.";
    if (!v("hora")) err.hora = "Elige una hora.";
    if (reserva.tipo === "mesa" && !(Number(v("personas")) >= 1)) err.personas = "¿Cuántos sois?";

    setErrores(err);
    if (Object.keys(err).length) return setMensaje(null);

    const que =
      reserva.tipo === "mesa"
        ? `una mesa para ${v("personas")} ${Number(v("personas")) === 1 ? "persona" : "personas"} (${v("opcion")})`
        : reserva.tipo === "cita"
          ? `cita para ${v("opcion").toLowerCase()}`
          : `cita de fisioterapia (${v("opcion").toLowerCase()})`;
    const nota = v("nota") ? `\nNota: ${v("nota")}` : "";
    setMensaje(`Hola, soy ${v("nombre")}. Me gustaría reservar ${que} el ${fechaLegible(v("fecha"))} a las ${v("hora")}.${nota}\nMi teléfono: ${v("telefono")}`);
  }

  const Error = ({ campo }: { campo: keyof Errores }) =>
    errores[campo] ? <small className="campo__error">{errores[campo]}</small> : null;

  return (
    <div className="reserva">
      <form className="formulario" onSubmit={enviar} noValidate>
        <div className="campos">
          <label className="campo">Nombre
            <input name="nombre" autoComplete="name" aria-invalid={!!errores.nombre} />
            <Error campo="nombre" />
          </label>
          <label className="campo">Teléfono
            <input name="telefono" type="tel" autoComplete="tel" placeholder="600 000 000" aria-invalid={!!errores.telefono} />
            <Error campo="telefono" />
          </label>
          <label className="campo">{reserva.etiquetaOpcion}
            <select name="opcion" defaultValue={reserva.opciones[0]}>
              {reserva.opciones.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          {reserva.tipo === "mesa" && (
            <label className="campo">Personas
              <input name="personas" type="number" min={1} max={25} defaultValue={2} aria-invalid={!!errores.personas} />
              <Error campo="personas" />
            </label>
          )}
          <label className="campo">Día
            <input name="fecha" type="date" min={hoyISO()} aria-invalid={!!errores.fecha} />
            <Error campo="fecha" />
          </label>
          <label className="campo">Hora
            <input name="hora" type="time" step={900} aria-invalid={!!errores.hora} />
            <Error campo="hora" />
          </label>
          <label className="campo campo--ancho"><span>Algo que debamos saber <span className="opcional">(opcional)</span></span>
            <textarea name="nota" rows={3} maxLength={300} />
          </label>
        </div>
        <button type="submit" className="boton boton--ancho"><Icono nombre="whatsapp" /> Enviar reserva por WhatsApp</button>
      </form>

      {mensaje && (
        <div className="confirmacion" role="status">
          <p className="confirmacion__titulo"><Icono nombre="check" /> Así le llegaría tu reserva al negocio:</p>
          <pre className="confirmacion__mensaje">{mensaje}</pre>
          <p className="confirmacion__nota">
            Esto es una demo: en la web real, el botón abre WhatsApp con este mensaje listo para enviar al {negocio.telefono}.
          </p>
        </div>
      )}
    </div>
  );
}
