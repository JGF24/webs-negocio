import type { Negocio } from "./tipos";

const restaurante: Negocio = {
  slug: "restaurante",
  nombre: "Casa Breogán",
  sector: "Restaurante",
  ciudad: "Ferrol",
  direccion: "Praza do Exemplo 3, 15402 Ferrol",
  telefono: "600 000 000",
  email: "reservas@ejemplo.com",
  descripcion: "Restaurante de cocina gallega en Ferrol: marisco, carnes a la brasa y menú del día. Reserva mesa online.",
  icono: "cubiertos",
  tema: {
    primario: "#c8553d",
    acento: "#e3b25f",
    fondo: "#17120f",
    superficie: "#221b17",
    texto: "#f4ede4",
    suave: "#b5a89b",
    borde: "#3a302a",
    textoSobrePrimario: "#ffffff",
    fuenteTitulos: "serif",
  },
  hero: {
    etiqueta: "Cocina gallega · Ferrol",
    titulo: "Producto de aquí, cocinado sin prisa",
    subtitulo: "Marisco de la lonja, carne a la brasa y los postres de la abuela. Menú del día de lunes a viernes por 15 €.",
    cta: "Reservar mesa",
    destacados: ["Menú del día 15 €", "Terraza", "Opciones sin gluten"],
  },
  servicios: {
    titulo: "Nuestra carta",
    subtitulo: "Cambiamos algunos platos según lo que llega cada día de la lonja y de la huerta.",
    nota: "Consulta con nosotros cualquier alergia o intolerancia: adaptamos los platos siempre que podemos.",
    grupos: [
      {
        titulo: "Para compartir",
        items: [
          { nombre: "Pulpo á feira", descripcion: "Con cachelos y pimentón de la Vera", precio: "16 €" },
          { nombre: "Pimientos de Padrón", descripcion: "Unos pican y otros no", precio: "7 €" },
          { nombre: "Croquetas caseras de lacón", descripcion: "8 unidades", precio: "10 €" },
          { nombre: "Empanada de zamburiñas", descripcion: "Masa de maíz hecha en casa", precio: "12 €" },
        ],
      },
      {
        titulo: "Del mar",
        items: [
          { nombre: "Merluza a la gallega", descripcion: "Con ajada y patata", precio: "19 €" },
          { nombre: "Arroz meloso de bogavante", descripcion: "Mínimo 2 personas, precio por persona", precio: "24 €" },
          { nombre: "Zamburiñas a la plancha", descripcion: "Docena", precio: "15 €" },
        ],
      },
      {
        titulo: "De la tierra",
        items: [
          { nombre: "Chuletón de vaca gallega", descripcion: "1 kg a la brasa, para compartir", precio: "48 €" },
          { nombre: "Raxo con patatas", descripcion: "Lomo de cerdo adobado", precio: "13 €" },
          { nombre: "Secreto ibérico", descripcion: "Con pimientos asados", precio: "17 €" },
        ],
      },
      {
        titulo: "Postres",
        items: [
          { nombre: "Tarta de Santiago", descripcion: "Receta de la casa", precio: "6 €" },
          { nombre: "Filloas rellenas", descripcion: "Con crema y miel", precio: "6 €" },
          { nombre: "Queso de tetilla con membrillo", precio: "7 €" },
        ],
      },
    ],
  },
  sobre: {
    titulo: "Tres generaciones en la misma cocina",
    texto: [
      "Casa Breogán abrió como taberna de barrio y hoy la lleva la tercera generación de la familia. Seguimos comprando el pescado cada mañana en la lonja y la verdura a productores de la comarca.",
      "Tenemos comedor para 60 personas, terraza en temporada y un reservado para comidas de empresa y celebraciones.",
    ],
    datos: [
      { valor: "1968", etiqueta: "desde" },
      { valor: "60", etiqueta: "plazas en sala" },
      { valor: "4,7★", etiqueta: "en reseñas" },
    ],
  },
  equipo: [
    { nombre: "Rosa", rol: "Cocina" },
    { nombre: "Antón", rol: "Sala y bodega" },
    { nombre: "Lois", rol: "Brasa" },
  ],
  horario: [
    { dia: "Lunes", tramos: [["13:00", "16:00"]] },
    { dia: "Martes", tramos: [] },
    { dia: "Miércoles", tramos: [["13:00", "16:00"], ["20:30", "23:30"]] },
    { dia: "Jueves", tramos: [["13:00", "16:00"], ["20:30", "23:30"]] },
    { dia: "Viernes", tramos: [["13:00", "16:00"], ["20:30", "00:00"]] },
    { dia: "Sábado", tramos: [["13:00", "16:30"], ["20:30", "00:00"]] },
    { dia: "Domingo", tramos: [["13:00", "16:30"]] },
  ],
  opiniones: [
    { autor: "Pablo M.", texto: "El pulpo, de los mejores que he comido. Reservamos por la web para ocho y nos tenían la mesa lista.", estrellas: 5 },
    { autor: "Lucía F.", texto: "Menú del día casero y abundante. Volveremos por el arroz de bogavante.", estrellas: 5 },
    { autor: "Martín S.", texto: "Trato familiar y producto de calidad. La tarta de Santiago, imprescindible.", estrellas: 4 },
  ],
  faq: [
    { pregunta: "¿Tenéis opciones sin gluten?", respuesta: "Sí, la mayoría de platos de la carta se pueden preparar sin gluten. Avísanos al reservar." },
    { pregunta: "¿Se puede reservar para grupos?", respuesta: "Sí, hasta 25 personas en el reservado. Para grupos de más de 10 preparamos un menú cerrado." },
    { pregunta: "¿Admitís mascotas?", respuesta: "En la terraza, siempre. Dentro del comedor, solo perros de asistencia." },
  ],
  reserva: {
    tipo: "mesa",
    titulo: "Reserva tu mesa",
    texto: "Dinos cuántos sois y a qué hora venís. Te confirmamos por WhatsApp en menos de una hora.",
    etiquetaOpcion: "Zona",
    opciones: ["Comedor", "Terraza", "Reservado (grupos)"],
  },
};

export default restaurante;
