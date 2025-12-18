"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Zap } from "lucide-react"

interface HeroSectionProps {
  onXPGain: (amount: number) => void
  onBadgeUnlock: (badgeId: string) => void
}

export function HeroSection({ onXPGain, onBadgeUnlock }: HeroSectionProps) {
  const handleCTAClick = () => {
    onXPGain(50)
    onBadgeUnlock("hero-badge")
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Jornada Gamificada de Automação</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Inicie Sua Jornada: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Transforme Seu Infoproduto
            </span>
            <br />
            em uma Máquina de Vendas
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Embarque em uma aventura épica para automatizar suas vendas, escalar sua produção de conteúdo e construir
            uma comunidade engajada com a Taggo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6 group" onClick={handleCTAClick}>
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Aceite o Desafio
              <span className="ml-2 text-xs bg-emerald-600 px-2 py-1 rounded-full">+50 XP</span>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Saiba Mais
            </Button>
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            {[
              { label: "Vendas Automatizadas", value: "100%", icon: "🤖" },
              { label: "Conteúdo em Escala", value: "10x", icon: "🚀" },
              { label: "Engajamento", value: "+300%", icon: "📈" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
