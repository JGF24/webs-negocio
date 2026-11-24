import Cabecera from "./Cabecera";
import EstadoAbierto from "./EstadoAbierto";
import Horario from "./Horario";
import Icono from "./Icono";
import Reserva from "./Reserva";
import Servicios from "./Servicios";
import type { Negocio } from "@/negocios/tipos";

const PORTAFOLIO = "https://jgf24.github.io";

const fuentes = { serif: "var(--f-serif)", fraunces: "var(--f-fraunces)", display: "var(--f-display)" };

export default function SitioNegocio({ negocio: n }: { negocio: Negocio }) {
  const t = n.tema;
  const variables = {
    "--primario": t.primario,
    "--acento": t.acento,
    "--fondo": t.fondo,
    "--superficie": t.superficie,
    "--texto": t.texto,
    "--suave": t.suave,
    "--borde": t.borde,
    "--sobre-primario": t.textoSobrePrimario,
    "--fuente-titulos": fuentes[t.fuenteTitulos],
  } as React.CSSProperties;

  return (
    <div className="sitio" style={variables}>
      <div className="aviso-demo">
        Web de demostración de un negocio ficticio, hecha por Julián Graña ·{" "}
        <a href={PORTAFOLIO}>¿Quieres una así para tu negocio?</a>
      </div>

      <Cabecera negocio={n} />

      <main id="inicio">
        <section className="hero">
          <div className="contenedor hero__rejilla">
            <div>
              <p className="etiqueta">{n.hero.etiqueta}</p>
              <h1>{n.hero.titulo}</h1>
              <p className="hero__texto">{n.hero.subtitulo}</p>
              <div className="hero__botones">
                <a href="#reserva" className="boton">{n.hero.cta} <Icono nombre="flecha" tam={18} /></a>
                <a href="#servicios" className="boton boton--borde">Ver precios</a>
              </div>
              <EstadoAbierto horario={n.horario} />
            </div>
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__circulo"><Icono nombre={n.icono} tam={96} /></div>
              <ul className="hero__destacados">
                {n.hero.destacados.map((d) => (
                  <li key={d}><Icono nombre="check" tam={16} /> {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="servicios" className="seccion">
          <div className="contenedor">
            <h2>{n.servicios.titulo}</h2>
            <p className="seccion__sub">{n.servicios.subtitulo}</p>
            <Servicios datos={n.servicios} />
          </div>
        </section>

        <section id="nosotros" className="seccion seccion--alterna">
          <div className="contenedor nosotros">
            <div>
              <h2>{n.sobre.titulo}</h2>
              {n.sobre.texto.map((p) => <p key={p} className="parrafo">{p}</p>)}
              <ul className="datos">
                {n.sobre.datos.map((d) => (
                  <li key={d.etiqueta}><strong>{d.valor}</strong><span>{d.etiqueta}</span></li>
                ))}
              </ul>
            </div>
            <ul className="equipo">
              {n.equipo.map((p) => (
                <li key={p.nombre} className="persona">
                  <span className="persona__avatar">{p.nombre[0]}</span>
                  <span><strong>{p.nombre}</strong><small>{p.rol}</small></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="horario" className="seccion">
          <div className="contenedor dos-columnas">
            <div>
              <h2>Horario y contacto</h2>
              <ul className="contacto">
                <li><Icono nombre="ubicacion" /> {n.direccion}</li>
                <li><Icono nombre="telefono" /> {n.telefono}</li>
                <li><Icono nombre="correo" /> {n.email}</li>
              </ul>
              <EstadoAbierto horario={n.horario} />
            </div>
            <Horario horario={n.horario} />
          </div>
        </section>

        <section id="opiniones" className="seccion seccion--alterna">
          <div className="contenedor">
            <h2>Lo que dicen de nosotros</h2>
            <p className="seccion__sub">Opiniones de ejemplo para la demo.</p>
            <ul className="opiniones">
              {n.opiniones.map((o) => (
                <li key={o.autor} className="opinion">
                  <span className="opinion__estrellas" aria-label={`${o.estrellas} de 5 estrellas`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < o.estrellas ? "" : "apagada"}><Icono nombre="estrella" tam={16} relleno /></span>
                    ))}
                  </span>
                  <p>“{o.texto}”</p>
                  <strong>{o.autor}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="reserva" className="seccion">
          <div className="contenedor dos-columnas dos-columnas--reserva">
            <div>
              <h2>{n.reserva.titulo}</h2>
              <p className="seccion__sub">{n.reserva.texto}</p>
              <div className="faq">
                <h3>Preguntas frecuentes</h3>
                {n.faq.map((f) => (
                  <details key={f.pregunta}>
                    <summary>{f.pregunta}</summary>
                    <p>{f.respuesta}</p>
                  </details>
                ))}
              </div>
            </div>
            <Reserva negocio={n} />
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor pie__fila">
          <span>© {new Date().getFullYear()} {n.nombre} · {n.ciudad}</span>
          <span>Web hecha por <a href={PORTAFOLIO}>Julián Graña</a> con Next.js</span>
        </div>
      </footer>
    </div>
  );
}
