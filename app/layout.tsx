import { Metadata } from 'next';
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'SPEKTRUM | Architekten Ingenieure',
  description: 'Architekten, Generalplaner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
