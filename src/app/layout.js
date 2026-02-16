import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.heroicosfitness.cl'),

  title: {
    default: 'Heroicos Fitness',
    template: '%s | Heroicos Fitness La Serena',
  },

  description:
    'Entrenador personal en La Serena especializado en entrenamientos personalizados a medida. Transformación física real, fuerza, musculación y rendimiento con metodología profesional.',

  /* ⚠️ keywords ya no son ranking factor,
     pero NO dañan y ayudan a coherencia semántica */
  keywords: [
    'entrenador personal La Serena',
    'personal trainer La Serena',
    'entrenamiento personalizado La Serena',
    'planes de entrenamiento a medida',
    'musculación La Serena',
    'entrenamiento funcional La Serena',
    'bajar grasa La Serena',
    'aumentar masa muscular La Serena',
    'entrenador fitness La Serena',
    'Heroicos Fitness',
  ],

  authors: [{ name: 'Heroicos Fitness' }],
  creator: 'Heroicos Fitness',
  publisher: 'Heroicos Fitness',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://www.heroicosfitness.cl',
  },

  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.heroicosfitness.cl',
    siteName: 'Heroicos Fitness',
    title: 'Entrenador Personal en La Serena | Heroicos Fitness',
    description:
      'Entrenamientos personalizados en La Serena. Planes a medida para bajar grasa, aumentar músculo y transformar tu físico con un entrenador personal profesional.',
    images: [
      {
        url: '/send-image.webp',
        width: 1200,
        height: 630,
        alt: 'Entrenador personal en La Serena - Heroicos Fitness',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Entrenador Personal en La Serena | Heroicos Fitness',
    description:
      'Transforma tu cuerpo con entrenamientos personalizados a medida en La Serena.',
    images: ['/send-image.webp'],
  },

  category: 'fitness',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
