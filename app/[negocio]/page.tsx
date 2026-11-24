import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SitioNegocio from "@/components/SitioNegocio";
import { getNegocio, negocios } from "@/negocios";

type Props = { params: Promise<{ negocio: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return negocios.map((n) => ({ negocio: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = getNegocio((await params).negocio);
  if (!n) return {};
  return { title: `${n.nombre} · ${n.sector} en ${n.ciudad} (demo)`, description: n.descripcion };
}

export default async function Pagina({ params }: Props) {
  const n = getNegocio((await params).negocio);
  if (!n) notFound();
  return <SitioNegocio negocio={n} />;
}
