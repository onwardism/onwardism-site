import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import { AppHeader } from "@/components/app/app-header"
import { AppFooter } from "@/components/app/app-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"

const ubuntu = Ubuntu({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "Onwardism | Open technology intelligence",
  description: "An open-source platform for media, research, and AI—built for engineering-led teams.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.png" />
      </head>
      <body className={ubuntu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-1 pt-20 sm:pt-24">{children}</main>
            <AppFooter />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
