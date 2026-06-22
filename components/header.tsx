"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLink =
  "text-xs sm:text-sm font-medium hover:text-primary transition-colors relative group"

const homeSectionLinks = [
  { href: "/#results", label: "Resultados" },
  { href: "/#onboarding", label: "Como funciona" },
  { href: "/#plans", label: "Planos" },
  { href: "/#cta", label: "Contato" },
]

export function Header() {
  const pathname = usePathname()
  const isQuemSomos = pathname === "/quem-somos"
  const [open, setOpen] = useState(false)

  const mobileLinks = isQuemSomos
    ? [
        { href: "/", label: "Página inicial" },
        ...homeSectionLinks,
      ]
    : homeSectionLinks

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="relative group cursor-pointer" aria-label="Taggo - Página inicial">
          <Image
            src="/taggo-logo.png"
            alt="Taggo"
            width={130}
            height={40}
            className="object-contain transition-opacity duration-200 group-hover:opacity-80 w-24 sm:w-28 md:w-32 h-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-5">
          {!isQuemSomos &&
            homeSectionLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLink}>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          <Link
            href="/quem-somos"
            className={`${navLink} ${isQuemSomos ? "text-primary" : ""}`}
            aria-current={isQuemSomos ? "page" : undefined}
          >
            Quem somos
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${isQuemSomos ? "w-full" : "w-0 group-hover:w-full"}`}
            />
          </Link>
        </nav>

        {/* Mobile: hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-soft text-foreground hover:bg-muted transition-colors"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="w-5 h-5" strokeWidth={1.75} />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
            <SheetHeader>
              <SheetTitle className="font-display text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-6">
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-soft transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quem-somos"
                onClick={() => setOpen(false)}
                className={`px-3 py-3 text-base font-medium rounded-soft transition-colors ${
                  isQuemSomos
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
                aria-current={isQuemSomos ? "page" : undefined}
              >
                Quem somos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
