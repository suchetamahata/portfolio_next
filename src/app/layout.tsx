import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Body from './components/Body'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Message from './components/Message'
import Contact from './components/Contact'


export const metadata: Metadata = {
  title: 'Sucheta',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Body />
        <Experiences />
        <Skills />
        <Message />
        <Contact />
      </body>
    </html>
  )
}
