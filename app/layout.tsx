import type React from "react"
import type { Metadata } from "next"
import { Bitter, Raleway } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-paragraph",
})

export const metadata: Metadata = {
  title: "KKPL - Karnataka Kabaddi Pro League",
  description: "Where Strength Meets Spirit - Karnataka's Premier Kabaddi Tournament",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://static.wixstatic.com/media/0dd563_335ffbb47d8b4bc4accfcb74aa189d32~mv2.png?v=2",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://static.wixstatic.com/media/0dd563_ae8c14905a7242ccb90bc5105d34e1dd~mv2.png?v=2",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://static.wixstatic.com/ficons/0dd563_5cf3d50871e844e49bc2446cd0e55e29~mv2.ico?v=2",
        type: "image/x-icon",
      },
    ],
    shortcut: [
      {
        url: "https://static.wixstatic.com/ficons/0dd563_5cf3d50871e844e49bc2446cd0e55e29~mv2.ico?v=2",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "https://static.wixstatic.com/media/0dd563_ce29b87610e04d0b8867ea554eba2d97~mv2.png?v=2",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} ${raleway.variable} font-paragraph antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
