type Nombre =
  | "tijeras" | "cubiertos" | "salud" | "reloj" | "telefono" | "ubicacion"
  | "estrella" | "check" | "menu" | "cerrar" | "correo" | "whatsapp" | "flecha";

const trazos: Record<Nombre, React.ReactNode> = {
  tijeras: (<><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" /></>),
  cubiertos: (<><path d="M7 2v20M4 2v6a3 3 0 0 0 6 0V2" /><path d="M17 22V2c-2.5 1.5-4 4-4 7v5h4" /></>),
  salud: (<><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" /><path d="M3.2 12h4.3l1.5-3 3 6 1.5-3h7.3" /></>),
  reloj: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  telefono: (<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />),
  ubicacion: (<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>),
  estrella: (<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />),
  check: (<path d="M20 6 9 17l-5-5" />),
  menu: (<path d="M4 6h16M4 12h16M4 18h16" />),
  cerrar: (<path d="M18 6 6 18M6 6l12 12" />),
  correo: (<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>),
  whatsapp: (<path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.4Z M9 9.5c.3 1.6 2 3.8 4 4.6l1.2-1.1 2 1c-.2 1-1 1.8-2 1.8-3 0-6.6-3.5-6.6-6.6 0-1 .8-1.8 1.8-2l1 2Z" />),
  flecha: (<path d="M5 12h14M13 6l6 6-6 6" />),
};

export default function Icono({ nombre, tam = 20, relleno = false }: { nombre: Nombre; tam?: number; relleno?: boolean }) {
  return (
    <svg width={tam} height={tam} viewBox="0 0 24 24" fill={relleno ? "currentColor" : "none"} stroke="currentColor"
      strokeWidth={relleno ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {trazos[nombre]}
    </svg>
  );
}
