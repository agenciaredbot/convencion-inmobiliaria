import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Club Inmobiliario — Invierte, Acciona, Crece",
  description:
    "Mientras Estados Unidos se enfría, Latinoamérica se calienta. Membresía premium para realtors, inversionistas y desarrolladores con tours físicos a 5 mercados internacionales.",
};

export default function ClubV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`club-v2 ${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      {children}
    </div>
  );
}
