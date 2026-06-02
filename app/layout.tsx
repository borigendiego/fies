import { Metadata } from 'next';
import GoogleAnalytics from './GoogleAnalytics';
import SchemaOrg from './SchemaOrg';
import '../styles/globals.scss'

export const metadata: Metadata = {
    title: 'SPEKTRUM Architektur | Generalplanung',
    description: 'Wir sind ein junges Team engagierter Architekten und Ingenieuren, die sich die ganzheitliche und integrale Gebäudeplanung zur Aufgabe gemacht haben.',
    openGraph: {
        title: 'SPEKTRUM Architektur | Generalplanung',
        description: 'Wir sind ein junges Team engagierter Architekten und Ingenieuren, die sich die ganzheitliche und integrale Gebäudeplanung zur Aufgabe gemacht haben.',
        type: 'website',
        url: 'https://spektrum-architektur.de/',
        siteName: 'Spektrum Holding',
        images: [
        {
            url: 'https://spektrum-architektur.de/assets/images/home-screen.png',
            width: 800,
            height: 600,
            alt: 'Architektur, Generalplanung',
        }
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
            <SchemaOrg />
            <body>{children}</body>
        </html>
    )
}
