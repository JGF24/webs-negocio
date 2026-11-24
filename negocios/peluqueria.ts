import type { Negocio } from "./tipos";

const peluqueria: Negocio = {
  slug: "peluqueria",
  nombre: "Lúa Estudio",
  sector: "Peluquería",
  ciudad: "A Coruña",
  direccion: "Rúa do Exemplo 12, 15001 A Coruña",
  telefono: "600 000 000",
  email: "hola@ejemplo.com",
  descripcion: "Peluquería en A Coruña: corte, color, mechas balayage y tratamientos. Reserva tu cita online en un minuto.",
  icono: "tijeras",
  tema: {
    primario: "#a84a62",
    acento: "#d9a35b",
    fondo: "#fbf6f3",
    superficie: "#ffffff",
    texto: "#2b2024",
    suave: "#76666b",
    borde: "#eadfdb",
    textoSobrePrimario: "#ffffff",
    fuenteTitulos: "fraunces",
  },
  hero: {
    etiqueta: "Peluquería · A Coruña",
    titulo: "Tu pelo, como siempre lo imaginaste",
    subtitulo: "Corte, color y tratamientos con productos veganos y sin prisas. Te asesoramos antes de empezar para que salgas exactamente como querías.",
    cta: "Reservar cita",
    destacados: ["Diagnóstico capilar gratis", "Productos veganos", "Cita en 1 minuto"],
  },
  servicios: {
    titulo: "Servicios y precios",
    subtitulo: "Precios orientativos. El precio final depende del largo y del estado de tu pelo; te lo confirmamos antes de empezar.",
    grupos: [
      {
        titulo: "Corte",
        items: [
          { nombre: "Corte y peinado", descripcion: "Lavado, corte y secado", precio: "28 €", duracion: "45 min" },
          { nombre: "Corte caballero", descripcion: "Incluye lavado y acabado", precio: "16 €", duracion: "30 min" },
          { nombre: "Corte infantil", descripcion: "Hasta 12 años", precio: "12 €", duracion: "20 min" },
          { nombre: "Peinado / recogido", descripcion: "Para eventos y bodas", precio: "desde 35 €", duracion: "1 h" },
        ],
      },
      {
        titulo: "Color",
        items: [
          { nombre: "Tinte raíz", descripcion: "Color sin amoniaco", precio: "32 €", duracion: "1 h" },
          { nombre: "Mechas balayage", descripcion: "Iluminación natural a mano alzada", precio: "desde 75 €", duracion: "2 h 30 min" },
          { nombre: "Baño de color", descripcion: "Brillo y matiz", precio: "25 €", duracion: "40 min" },
        ],
      },
      {
        titulo: "Tratamientos",
        items: [
          { nombre: "Hidratación profunda", descripcion: "Para pelo seco o castigado", precio: "20 €", duracion: "30 min" },
          { nombre: "Alisado de keratina", descripcion: "Hasta 4 meses de duración", precio: "desde 90 €", duracion: "2 h" },
          { nombre: "Ritual anticaída", descripcion: "Masaje y ampollas", precio: "24 €", duracion: "40 min" },
        ],
      },
    ],
  },
  sobre: {
    titulo: "Un estudio pequeño, a propósito",
    texto: [
      "En Lúa trabajamos con pocas citas al día para dedicarte el tiempo que necesitas. Antes de cortar o teñir hablamos contigo, miramos tu pelo y te contamos qué va a funcionar y qué no.",
      "Usamos productos veganos y sin amoniaco, y te enseñamos a peinarte en casa para que el resultado dure.",
    ],
    datos: [
      { valor: "12", etiqueta: "años de oficio" },
      { valor: "4,9★", etiqueta: "en reseñas" },
      { valor: "+3.000", etiqueta: "clientas y clientes" },
    ],
  },
  equipo: [
    { nombre: "Uxía", rol: "Color y balayage" },
    { nombre: "Brais", rol: "Corte y barbería" },
    { nombre: "Noa", rol: "Tratamientos y recogidos" },
  ],
  horario: [
    { dia: "Lunes", tramos: [] },
    { dia: "Martes", tramos: [["09:30", "14:00"], ["16:00", "20:00"]] },
    { dia: "Miércoles", tramos: [["09:30", "14:00"], ["16:00", "20:00"]] },
    { dia: "Jueves", tramos: [["09:30", "20:00"]] },
    { dia: "Viernes", tramos: [["09:30", "20:00"]] },
    { dia: "Sábado", tramos: [["09:00", "14:00"]] },
    { dia: "Domingo", tramos: [] },
  ],
  opiniones: [
    { autor: "María P.", texto: "Llevaba años sin atreverme con el balayage y Uxía me lo explicó todo antes de empezar. Me encanta cómo ha quedado.", estrellas: 5 },
    { autor: "Iago R.", texto: "Corte rápido y bien hecho, y reservar desde el móvil es comodísimo.", estrellas: 5 },
    { autor: "Carmen L.", texto: "Trato cercano y nada de prisas. El tratamiento de hidratación me ha salvado el pelo.", estrellas: 5 },
  ],
  faq: [
    { pregunta: "¿Tengo que pagar algo al reservar?", respuesta: "No. Reservas gratis y pagas en el salón con tarjeta, Bizum o efectivo." },
    { pregunta: "¿Puedo cambiar o anular mi cita?", respuesta: "Sí, avísanos por WhatsApp con al menos 24 horas y la cambiamos sin problema." },
    { pregunta: "¿Hacéis prueba de color?", respuesta: "Sí. Si es tu primera vez con nosotros te hacemos una prueba de alergia 48 horas antes de cualquier tinte." },
  ],
  reserva: {
    tipo: "cita",
    titulo: "Reserva tu cita",
    texto: "Elige servicio, día y hora. Te confirmamos por WhatsApp en menos de una hora.",
    etiquetaOpcion: "Servicio",
    opciones: ["Corte y peinado", "Corte caballero", "Tinte raíz", "Mechas balayage", "Tratamiento", "No lo sé, quiero asesoramiento"],
  },
};

export default peluqueria;
