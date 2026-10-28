import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FF4655",
};

export const metadata: Metadata = {
  title: "PROTOCOLO RADIANTE // Cursos & Coaching Valorant de Alta Performance",
  description: "Aprenda com ex-Pros e Radiantes Top 100 BR. Metodologia científica de mira, crosshair placement, tomada de decisão e VOD reviews 1-on-1 para subir de elo no Valorant.",
  keywords: ["valorant", "coaching valorant", "curso valorant", "como subir de elo", "radiante", "aimlabs", "crosshair placement", "vod review"],
  openGraph: {
    title: "PROTOCOLO RADIANTE // Domine o Valorant e Chegue ao Radiante",
    description: "Pare de ser hardstuck. Metodologia de mira, setups e coaching individual com Radiantes Top 100.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased min-h-screen bg-val-dark text-val-offwhite selection:bg-val-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
