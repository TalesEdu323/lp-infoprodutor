"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Home,
  AlertCircle,
  RefreshCw,
  TrendingUp,
  ClipboardList,
  CreditCard,
  MessageSquare,
  ArrowRight,
} from "lucide-react"

export const FLOATING_NAV_ITEMS = [
  { id: "hero", icon: Home, label: "Início" },
  { id: "problem", icon: AlertCircle, label: "Dor" },
  { id: "turn", icon: RefreshCw, label: "Virada" },
  { id: "results", icon: TrendingUp, label: "Resultados" },
  { id: "onboarding", icon: ClipboardList, label: "Simples" },
  { id: "plans", icon: CreditCard, label: "Planos" },
  { id: "objections", icon: MessageSquare, label: "Dúvidas" },
  { id: "cta", icon: ArrowRight, label: "Contato" },
] as const

interface FloatingNavProps {
  activeSection: string
}

export function FloatingNav({ activeSection }: FloatingNavProps) {
  const prefersReducedMotion = useReducedMotion()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop: barra vertical à esquerda */}
      <motion.nav
        initial={prefersReducedMotion ? false : { x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 1 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
        aria-label="Navegação por seções"
      >
        <div className="bg-card/95 backdrop-blur-sm rounded-soft p-1.5 border border-border">
          {FLOATING_NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`w-9 h-9 rounded-soft flex items-center justify-center transition-colors duration-200 mb-1 last:mb-0 group relative ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" strokeWidth={1.75} />
              <span className="absolute left-full ml-2 px-2 py-1 bg-card border border-border rounded-soft text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile / tablet: barra horizontal fixa embaixo */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 xl:hidden border-t border-border bg-card/95 backdrop-blur-md safe-area-pb"
        aria-label="Navegação por seções"
      >
        <div className="flex items-center gap-0.5 px-1 py-1.5 overflow-x-auto scrollbar-none">
          {FLOATING_NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`flex flex-col items-center justify-center min-w-[3.25rem] flex-1 py-1.5 px-1 rounded-soft transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-soft mb-0.5 ${
                  activeSection === item.id ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                <item.icon className="w-4 h-4" strokeWidth={1.75} />
              </span>
              <span className="text-[9px] font-medium leading-none truncate max-w-full">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
