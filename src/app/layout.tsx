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
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Optimized font loading - reduced weights, non-blocking */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Preload hero logo (LCP element) */}
        <link rel="preload" href="/images/logo-oficial.png" as="image" fetchPriority="high" />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
