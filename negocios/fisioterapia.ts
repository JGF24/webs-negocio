import type { Negocio } from "./tipos";

const fisioterapia: Negocio = {
  slug: "fisioterapia",
  nombre: "FisioMar",
  sector: "Clínica de fisioterapia",
  ciudad: "Santiago de Compostela",
  direccion: "Rúa do Exemplo 45, 15701 Santiago de Compostela",
  telefono: "600 000 000",
  email: "citas@ejemplo.com",
  descripcion: "Clínica de fisioterapia en Santiago: dolor de espalda, lesiones deportivas, suelo pélvico y rehabilitación. Pide cita online.",
  icono: "salud",
  tema: {
    primario: "#0f766e",
    acento: "#38bdf8",
    fondo: "#f3f8f8",
    superficie: "#ffffff",
    texto: "#0f2a2a",
    suave: "#557070",
    borde: "#d8e6e6",
    textoSobrePrimario: "#ffffff",
    fuenteTitulos: "display",
  },
  hero: {
    etiqueta: "Fisioterapia · Santiago de Compostela",
    titulo: "Vuelve a moverte sin dolor",
    subtitulo: "Valoramos tu caso en la primera sesión y te damos un plan claro: cuántas sesiones necesitas, qué ejercicios hacer en casa y cuándo vas a notar la mejora.",
    cta: "Pedir cita",
    destacados: ["Primera valoración incluida", "Sesiones de 50 min", "Fisios colegiados"],
  },
  servicios: {
    titulo: "Tratamientos",
    subtitulo: "Todas las sesiones son individuales y duran 50 minutos.",
    nota: "Trabajamos con las principales mutuas deportivas. Pregúntanos por la tuya.",
    grupos: [
      {
        titulo: "Sesiones",
        items: [
          { nombre: "Primera visita y valoración", descripcion: "Exploración, diagnóstico y primer tratamiento", precio: "45 €", duracion: "60 min" },
          { nombre: "Fisioterapia general", descripcion: "Espalda, cuello, hombro, rodilla…", precio: "40 €", duracion: "50 min" },
          { nombre: "Fisioterapia deportiva", descripcion: "Lesiones, readaptación y prevención", precio: "42 €", duracion: "50 min" },
          { nombre: "Suelo pélvico", descripcion: "Embarazo, posparto e incontinencia", precio: "45 €", duracion: "50 min" },
          { nombre: "Punción seca", descripcion: "Para puntos gatillo y contracturas", precio: "+10 €", duracion: "en sesión" },
        ],
      },
      {
        titulo: "Bonos",
        items: [
          { nombre: "Bono 5 sesiones", descripcion: "Válido 3 meses", precio: "185 €" },
          { nombre: "Bono 10 sesiones", descripcion: "Válido 6 meses", precio: "350 €" },
          { nombre: "Ejercicio terapéutico en grupo", descripcion: "4 sesiones al mes, máximo 6 personas", precio: "60 €/mes" },
        ],
      },
    ],
  },
  sobre: {
    titulo: "Te explicamos qué te pasa y por qué",
    texto: [
      "En FisioMar no hay máquinas que trabajen por nosotros: cada sesión es individual y con el mismo fisioterapeuta de principio a fin.",
      "Al terminar cada sesión te llevas los ejercicios que debes hacer en casa, en vídeo, para que la mejora dure también fuera de la consulta.",
    ],
    datos: [
      { valor: "8", etiqueta: "años en Santiago" },
      { valor: "50 min", etiqueta: "por sesión" },
      { valor: "4,9★", etiqueta: "en reseñas" },
    ],
  },
  equipo: [
    { nombre: "Laura", rol: "Fisioterapia deportiva" },
    { nombre: "Diego", rol: "Espalda y cuello" },
    { nombre: "Sabela", rol: "Suelo pélvico" },
  ],
  horario: [
    { dia: "Lunes", tramos: [["08:30", "14:00"], ["15:30", "21:00"]] },
    { dia: "Martes", tramos: [["08:30", "14:00"], ["15:30", "21:00"]] },
    { dia: "Miércoles", tramos: [["08:30", "14:00"], ["15:30", "21:00"]] },
    { dia: "Jueves", tramos: [["08:30", "14:00"], ["15:30", "21:00"]] },
    { dia: "Viernes", tramos: [["08:30", "15:00"]] },
    { dia: "Sábado", tramos: [] },
    { dia: "Domingo", tramos: [] },
  ],
  opiniones: [
    { autor: "Andrés V.", texto: "Llegué con una lumbalgia de meses y en cuatro sesiones estaba entrenando otra vez. Explican todo muy bien.", estrellas: 5 },
    { autor: "Elena G.", texto: "Sabela me ayudó muchísimo en el posparto. Trato cercano y profesional.", estrellas: 5 },
    { autor: "Xoán B.", texto: "Pedir cita por la web es rapidísimo y siempre son puntuales.", estrellas: 5 },
  ],
  faq: [
    { pregunta: "¿Necesito informe médico?", respuesta: "No es obligatorio. Si tienes pruebas (resonancia, radiografía…) tráelas a la primera visita." },
    { pregunta: "¿Cuántas sesiones voy a necesitar?", respuesta: "Depende de cada caso. Tras la primera valoración te damos una estimación por escrito." },
    { pregunta: "¿Qué ropa llevo?", respuesta: "Ropa cómoda. Si es por la rodilla o el tobillo, mejor pantalón corto." },
  ],
  reserva: {
    tipo: "consulta",
    titulo: "Pide tu cita",
    texto: "Cuéntanos qué te pasa y cuándo te viene bien. Te llamamos o escribimos para confirmar.",
    etiquetaOpcion: "Motivo de la consulta",
    opciones: ["Dolor de espalda o cuello", "Lesión deportiva", "Suelo pélvico", "Rehabilitación tras operación", "Otro motivo"],
  },
};

export default fisioterapia;
