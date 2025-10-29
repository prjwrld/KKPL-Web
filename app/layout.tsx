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
