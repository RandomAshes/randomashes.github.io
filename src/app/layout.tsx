import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './_components/nav'
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashley Clifton\'s Porfolio',
  description: 'Ashley Clifton\'s software engineering portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
