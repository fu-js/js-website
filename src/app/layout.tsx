import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '@/section/Header'
import {Footer} from "@/section/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JS CLUB | Home',
  description: 'JS Club website',
    icons: {
        icon: './favicon.png', // /public path
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}
