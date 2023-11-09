import '@/styles/globals.css'

import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { Poppins } from 'next/font/google'

import { Header } from '@/components/Header'
import { ToastProvider } from '@/components/Toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Portfolio | Edlânio Júlio',
  description: 'Edlânio Júlio Portfolio',
}

type Props = {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth antialiased`}>
      <body className="bg-gray-900 text-gray-50">
        <Header />
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
