import type { Metadata } from "next";
import "./globals.css";
import { asset } from "@/data/site";

const title = "SaraLu Doces Artesanais | Doces feitos com carinho";
const description = "Brigadeiros, brownies, bolos e outras delícias artesanais. Encomende pelo WhatsApp com a SaraLu em Brasília e entorno.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    images: [{ url: asset("/images/brand/hero-doces.webp"), width: 1536, height: 1024, alt: "Doces artesanais SaraLu" }],
  },
  icons: { icon: asset("/favicon.png"), apple: asset("/favicon.png") },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
