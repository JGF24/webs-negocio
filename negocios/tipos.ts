// Todo lo que cambia de un negocio a otro está aquí.
// Para una web nueva basta con crear un archivo como peluqueria.ts y añadirlo a index.ts.

export type Servicio = {
  nombre: string;
  descripcion?: string;
  precio: string;
  duracion?: string;
};

export type GrupoServicios = { titulo: string; items: Servicio[] };

/** Tramos de apertura de un día, en formato 24 h. Sin tramos = cerrado. */
export type DiaHorario = { dia: string; tramos: [string, string][] };

export type TipoReserva = "cita" | "mesa" | "consulta";

export type Negocio = {
  slug: string;
  nombre: string;
  sector: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  email: string;
  descripcion: string; // para buscadores (meta description)
  icono: "tijeras" | "cubiertos" | "salud";
  tema: {
    primario: string;
    acento: string;
    fondo: string;
    superficie: string;
    texto: string;
    suave: string;
    borde: string;
    textoSobrePrimario: string;
    fuenteTitulos: "serif" | "fraunces" | "display";
  };
  hero: { etiqueta: string; titulo: string; subtitulo: string; cta: string; destacados: string[] };
  servicios: { titulo: string; subtitulo: string; nota?: string; grupos: GrupoServicios[] };
  sobre: { titulo: string; texto: string[]; datos: { valor: string; etiqueta: string }[] };
  equipo: { nombre: string; rol: string }[];
  horario: DiaHorario[]; // de lunes (0) a domingo (6)
  opiniones: { autor: string; texto: string; estrellas: number }[];
  faq: { pregunta: string; respuesta: string }[];
  reserva: { tipo: TipoReserva; titulo: string; texto: string; opciones: string[]; etiquetaOpcion: string };
};
