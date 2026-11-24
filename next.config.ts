import type { NextConfig } from "next";

// Exportación estática: genera HTML/CSS/JS que se puede subir a cualquier hosting
// (GitHub Pages, Netlify, Vercel o el hosting del cliente).
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/webs-negocio",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
