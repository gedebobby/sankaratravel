import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/Whatsapp";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL("https://aryanabalitour.com"),

  title: {
    default: "Aryana Tour Bali | Private Bali Tours & Travel Services",
    template: "%s | Aryana Tour Bali",
  },

  description:
    "Explore the beauty of Bali with Aryana Tour Bali. Discover private Bali tours, airport transfers, cultural experiences, waterfalls, temples, and customized travel packages with trusted local guides.",

  keywords: [
    "Bali Tour",
    "Bali Private Tour",
    "Bali Driver",
    "Bali Travel",
    "Bali Tour Package",
    "Bali Airport Transfer",
    "Ubud Tour",
    "Kintamani Tour",
    "Nusa Penida Tour",
    "Uluwatu Tour",
    "Bali Vacation",
    "Bali Holiday",
    "Best Bali Tours",
    "Private Driver Bali",
    "Bali Activities",
  ],

  authors: [
    {
      name: "Aryana Tour Bali",
    },
  ],

  creator: "Aryana Tour Bali",
  publisher: "Aryana Tour Bali",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Aryana Tour Bali | Private Bali Tours & Travel Services",

    description:
      "Experience unforgettable Bali journeys with private tours, local guides, airport transfers, and curated island adventures.",

    url: "https://aryanabalitour.com",

    siteName: "Aryana Tour Bali",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aryana Tour Bali",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Aryana Tour Bali | Private Bali Tours & Travel Services",

    description:
      "Discover Bali with private tours, local experiences, and unforgettable island adventures.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "travel",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
