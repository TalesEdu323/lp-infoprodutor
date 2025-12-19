"use client"

import { motion } from "framer-motion"
import { Home, TrendingUp, Network, Clapperboard, Zap, Users, Calendar } from "lucide-react"

interface FloatingNavProps {
  activeSection: string
}

export function FloatingNav({ activeSection }: FloatingNavProps) {
  const navItems = [
    { id: "hero", icon: Home, label: "Início" },
    { id: "profit", icon: TrendingUp, label: "Jornada" },
    { id: "hub", icon: Network, label: "Ecossistema" },
    { id: "production", icon: Clapperboard, label: "Produção" },
    { id: "automation", icon: Zap, label: "Automação" },
    { id: "community", icon: Users, label: "Comunidade" },
    { id: "timeline", icon: Calendar, label: "Cronograma" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
    >
      <div className="bg-card/95 backdrop-blur-sm rounded-lg shadow-md p-1.5 border border-border/50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 mb-1.5 last:mb-0 group relative ${
              activeSection === item.id
                ? "bg-primary text-white shadow-lg scale-110"
                : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
            }`}
          >
            <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-card/95 backdrop-blur-sm rounded-md shadow-md text-[10px] sm:text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
