import peluqueria from "./peluqueria";
import restaurante from "./restaurante";
import fisioterapia from "./fisioterapia";
import type { Negocio } from "./tipos";

// Para añadir un negocio: crea su archivo de datos y añádelo a esta lista.
export const negocios: Negocio[] = [peluqueria, restaurante, fisioterapia];

export function getNegocio(slug: string): Negocio | undefined {
  return negocios.find((n) => n.slug === slug);
}
