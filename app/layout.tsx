import Container from '@/components/Container'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cocktails...',
  description: 'served by Yash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-indigo-300`}>
        <Header />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
