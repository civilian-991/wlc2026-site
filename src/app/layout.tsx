import type { Metadata } from "next";
import { Bebas_Neue, Nunito_Sans } from "next/font/google";
import "./globals.css";

// Primary Display Font - from WLC Brand Guidelines
const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

// Secondary Body Font - Avenir alternative for web
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "World Legends Cup 2026 | Coming Soon",
  description:
    "World Legends Cup 2026 - The first-of-its-kind knockout tournament bringing together football legends from around the globe. Rio de Janeiro, Brazil.",
  keywords: [
    "World Legends Cup",
    "WLC 2026",
    "Football Legends",
    "Rio de Janeiro",
    "Soccer Tournament",
    "Brazil 2026",
  ],
  openGraph: {
    title: "World Legends Cup 2026",
    description:
      "The first-of-its-kind knockout tournament bringing together football legends from around the globe.",
    type: "website",
    locale: "en_US",
    siteName: "World Legends Cup",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Legends Cup 2026",
    description:
      "The first-of-its-kind knockout tournament bringing together football legends from around the globe.",
  },
  icons: {
    icon: "/images/wlc_trophy_icon.png",
    apple: "/images/wlc_trophy_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${nunitoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
