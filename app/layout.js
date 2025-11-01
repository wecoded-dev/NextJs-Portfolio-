import './globals.css'
import { Inter, Space_Grotesk, Syne, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron'
})

export const metadata = {
  title: 'Ultra Creative Portfolio | Next Generation Developer',
  description: 'An incredibly beautiful, highly animated, and ultra-modern portfolio showcasing cutting-edge web development',
  keywords: 'portfolio, developer, react, nextjs, animations, creative',
  openGraph: {
    title: 'Ultra Creative Portfolio',
    description: 'Next Generation Developer Portfolio',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} ${orbitron.variable}`}>
      <body>
        <AnimatedBackground />
        <CustomCursor />
        <ParticleNetwork />
        <MatrixRain />
        {children}
        <Analytics />
        <SpeedInsights />
        <AudioPlayer />
      </body>
    </html>
  )
}
