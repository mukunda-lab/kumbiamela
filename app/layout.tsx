import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
  display: "swap",
});

const description =
  "Kumbia Mela es un proyecto solista de Jorge Sarmiento que fusiona la esencia rítmica de la cumbia con la profundidad hipnótica de los mantras de la India. Un sonido que viaja entre lo terrenal y lo místico, donde los bajos tropicales se encuentran con antiguas vibraciones espirituales.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kumbiamela.com"),
  title: "Kumbia Mela",
  description,
  openGraph: {
    title: "Kumbia Mela",
    description,
    siteName: "Kumbia Mela",
    type: "website",
    url: "https://kumbiamela.com",
    images: [
      {
        url: "/share.jpg",
        width: 1065,
        height: 685,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumbia Mela",
    description,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={elMessiri.variable}>
      <body className="font-display text-white antialiased">{children}</body>
    </html>
  );
}
