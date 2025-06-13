import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Gilgit Properties | Premium Land in Gilgit's Natural Paradise",
  description:
    "Discover premium land opportunities in Gilgit's breathtaking landscapes. Expert real estate services for buying and selling property in the heart of the Karakoram mountains.",
  keywords:
    "Gilgit real estate, land for sale, property investment, mountain properties, Pakistan real estate, Karakoram properties",
  authors: [{ name: "Gilgit Properties" }],
  creator: "Gilgit Properties",
  publisher: "Gilgit Properties",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gilgitproperties.com",
    title: "Gilgit Properties | Premium Land in Gilgit's Natural Paradise",
    description: "Expert real estate services for premium land opportunities in Gilgit's stunning mountain landscapes",
    siteName: "Gilgit Properties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilgit Properties | Premium Land in Gilgit's Natural Paradise",
    description: "Expert real estate services for premium land opportunities in Gilgit's stunning mountain landscapes",
    creator: "@gilgitproperties",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
