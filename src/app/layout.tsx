import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppHeader } from "@/components/app/app-header"
import { AppFooter } from "@/components/app/app-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Onwardism - Building the Future",
  description: "Built with Next.js, React, Tailwind CSS, and shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          <main className="flex-1">{children}</main>
          <AppFooter />
        </div>
      </body>
    </html>
  )
}
