import '@/styles/globals.css'

import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'EdlanioJ',
    template: '%s | EdlanioJ',
  },
  description: 'EdlanioJ Portfolio',
}

type Props = {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="dark:bg-zinc-900">{children}</body>
    </html>
  )
}
