import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devdanielmaica',
  description: 'Developed by Daniel Maicá',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.3/src/app/ci.min.css"
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  )
}
