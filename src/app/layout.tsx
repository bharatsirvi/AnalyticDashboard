import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND Insights - Analytics Dashboard",
  description: "Modern analytics dashboard for digital marketing agencies",
  keywords: ["analytics", "dashboard", "marketing", "insights", "digital marketing"],
  authors: [{ name: "ADmyBRAND Team" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
        sizes: '32x32',
      },
      {
        url: '/favicon-16.svg',
        type: 'image/svg+xml',
        sizes: '16x16',
      },
    ],
    shortcut: '/favicon.svg',
    apple: [
      {
        url: '/apple-touch-icon.svg',
        type: 'image/svg+xml',
        sizes: '180x180',
      },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
