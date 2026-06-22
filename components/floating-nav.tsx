"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Home,
  AlertCircle,
  RefreshCw,
  Sparkles,
  ClipboardList,
  CreditCard,
  MessageSquare,
  ArrowRight,
} from "lucide-react"

interface FloatingNavProps {
  activeSection: string
}

export function FloatingNav({ activeSection }: FloatingNavProps) {
  const prefersReducedMotion = useReducedMotion()

  const navItems = [
    { id: "hero", icon: Home, label: "Início" },
    { id: "problem", icon: AlertCircle, label: "Dor" },
    { id: "turn", icon: RefreshCw, label: "Virada" },
    { id: "results", icon: Sparkles, label: "Resultados" },
    { id: "onboarding", icon: ClipboardList, label: "Simples" },
    { id: "plans", icon: CreditCard, label: "Planos" },
    { id: "objections", icon: MessageSquare, label: "Dúvidas" },
    { id: "cta", icon: ArrowRight, label: "Contato" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 1 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
    >
      <div className="bg-card/95 backdrop-blur-sm rounded-soft p-1.5 border border-border max-h-[80vh] overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-9 h-9 rounded-soft flex items-center justify-center transition-colors duration-200 mb-1 last:mb-0 group relative ${
              activeSection === item.id
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="w-4 h-4" strokeWidth={1.75} />
            <span className="absolute left-full ml-2 px-2 py-1 bg-card border border-border rounded-soft text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
