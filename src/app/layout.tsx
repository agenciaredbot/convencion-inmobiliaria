import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Convención Inmobiliaria 2026 | Invierte · Acciona · Crece",
  description:
    "El evento inmobiliario más importante de habla hispana. Conecta con inversionistas internacionales en Barranquilla y Medellín, Abril 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
