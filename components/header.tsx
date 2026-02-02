"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLink =
  "text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors relative group"

export function Header() {
  const pathname = usePathname()
  const isQuemSomos = pathname === "/quem-somos"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 h-14 sm:h-16 md:h-18 flex items-center justify-between">
        <Link href="/" className="relative group cursor-pointer" aria-label="Taggo - Página inicial">
          <Image
            src="/taggo-logo.png"
            alt="Taggo Software House"
            width={130}
            height={40}
            className="object-contain transition-all duration-300 group-hover:scale-105 w-24 sm:w-28 md:w-32 h-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 sm:gap-5 md:gap-6">
          {!isQuemSomos && (
            <>
              <a href="/#production" className={navLink}>
                Produção
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
              <a href="/#automation" className={navLink}>
                Automação
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
              <a href="/#community" className={navLink}>
                Comunidade
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
              <a href="/#timeline" className={navLink}>
                Cronograma
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            </>
          )}
          <Link
            href="/quem-somos"
            className={`${navLink} ${isQuemSomos ? "text-primary" : ""}`}
            aria-current={isQuemSomos ? "page" : undefined}
          >
            Quem somos
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${isQuemSomos ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
