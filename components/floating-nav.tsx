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
      <div className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-xl p-2 border border-border/50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 mb-1.5 last:mb-0 group relative ${
              activeSection === item.id
                ? "bg-primary text-white shadow-lg scale-110"
                : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
            }`}
          >
            <item.icon className="w-[18px] h-[18px]" />
            <span className="absolute left-full ml-3 px-2.5 py-1.5 bg-card/95 backdrop-blur-xl rounded-lg shadow-xl text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
