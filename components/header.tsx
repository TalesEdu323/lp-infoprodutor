"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 h-14 sm:h-16 md:h-18 flex items-center justify-between">
        <div className="relative group cursor-pointer">
          <Image
            src="https://lp.taggo.com.br/wp-content/uploads/new-logo.png"
            alt="Taggo Logo"
            width={130}
            height={40}
            className="object-contain transition-all duration-300 group-hover:scale-105 w-24 sm:w-28 md:w-32 h-auto"
            priority
          />
          {/* Removed excessive glow effect */}
        </div>

        <nav className="hidden md:flex items-center gap-4 sm:gap-5 md:gap-6">
          <a href="#production" className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors relative group">
            Produção
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#automation" className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors relative group">
            Automação
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#community" className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors relative group">
            Comunidade
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#timeline" className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors relative group">
            Cronograma
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </a>
        </nav>
      </div>
    </header>
  )
}
