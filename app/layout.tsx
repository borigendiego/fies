import { Metadata } from 'next';
import GoogleAnalytics from './GoogleAnalytics';
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'SPEKTRUM | Architekten Ingenieure',
  description: 'Architekten, Generalplaner',
  openGraph: {
    title: 'SPEKTRUM | Architekten Ingenieure',
    description: 'Wir sind ein junges Team engagierter Architekten und Ingenieuren, die sich die ganzheitliche und integrale Gebäudeplanung zur Aufgabe gemacht haben.',
    type: 'website',
    url: 'https://spektrum-holding.de/',
    siteName: 'Spektrum Holding',
    images: [
      {
        url: 'https://spektrum-holding.de/assets/images/home-screen.png',
        width: 800,
        height: 600,
        alt: 'Architekten, Generalplaner',
      },
      {
        url: 'https://spektrum-holding.de/assets/images/home-screen.png',
        width: 1800,
        height: 1600,
        alt: 'Architekten, Generalplaner',
      },
    ],
    locale: 'de_DE',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  )
}
