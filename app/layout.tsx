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
        url: "https://static.wixstatic.com/media/0dd563_f73a8b6b1c3f4902bc5b1b670e3f2c94~mv2.png",
        type: "image/png",
      },
    ],
    shortcut: "https://static.wixstatic.com/media/0dd563_f73a8b6b1c3f4902bc5b1b670e3f2c94~mv2.png",
    apple: "https://static.wixstatic.com/media/0dd563_f73a8b6b1c3f4902bc5b1b670e3f2c94~mv2.png",
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
