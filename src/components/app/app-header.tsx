"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function AppHeader() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 sm:py-6 bg-background/80 backdrop-blur-sm">
      <div className="container px-4 sm:px-6 md:px-8">
        <nav className="flex items-center justify-between bg-background border px-4 sm:px-6 py-3 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            {mounted && (
              <Image
                src={theme === "dark" ? "/icons/icon-light.png" : "/icons/icon-dark.png"}
                alt="Onwardism"
                width={32}
                height={32}
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            )}
            <span className="text-lg sm:text-xl font-bold">Onwardism</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/company"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Company
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </Link>
          </div>

          {/* Right Side - Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-background border shadow-lg">
            <div className="flex flex-col">
              <Link
                href="/products"
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/resources"
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/company"
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/careers"
                className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
