import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import "./favicon.ico"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Study-Sphere",
  description: "A platform for collaborative learning and knowledge sharing",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
    <head>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
      </>
  )
}
