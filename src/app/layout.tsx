import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import ScrollToTopButton from "@/components/ScrollToTopButton"

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
    <html lang="en">
      <link rel="icon" type="image/png" href="/my-favicon/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/my-favicon/favicon.svg" />
<link rel="shortcut icon" href="/my-favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/my-favicon/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="MyWebSite" />
<link rel="manifest" href="/my-favicon/site.webmanifest" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
