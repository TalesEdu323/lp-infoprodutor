"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Rocket, TrendingUp } from "lucide-react"

export function Hero360() {
  const features = [
    {
      icon: Sparkles,
      title: "Produção Automática",
      description: "1 podcast vira 30+ reels nas suas redes",
      color: "from-muted to-muted/50",
      borderColor: "border-border",
      iconColor: "text-primary",
    },
    {
      icon: Rocket,
      title: "Vendas no Piloto",
      description: "WhatsApp e Instagram vendendo 24/7",
      color: "from-muted to-muted/50",
      borderColor: "border-border",
      iconColor: "text-foreground",
    },
    {
      icon: TrendingUp,
      title: "Lucro Recorrente",
      description: "Comunidade + Mentorias gerando receita",
      color: "from-muted to-muted/50",
      borderColor: "border-border",
      iconColor: "text-primary",
    },
  ]

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      {/* Animated Background Circles - Removed for cleaner black/white design */}

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 text-primary" />
              <span className="text-foreground">+50 infoprodutores já escalaram com a Taggo</span>
            </motion.div>

            <h1 className="font-bold text-balance mb-3 sm:mb-4">
              Pare de Trabalhar Como Escravo
              <span className="block text-foreground mt-1 sm:mt-2">
                Comece a Lucrar Como Dono
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed mb-2 sm:mb-3">
              <strong className="text-foreground">Sistema completo que automatiza tudo:</strong> conteúdo, vendas, comunidade e lucro recorrente.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              Você grava 30 minutos por semana. O resto funciona sozinho. <strong className="text-foreground">Resultado em 60 dias ou seu dinheiro de volta.</strong>
            </p>
          </motion.div>

          {/* Social Proof Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Infoprodutores</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">R$ 50M+</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Faturados</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">98%</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Satisfação</div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`bg-gradient-to-br ${feature.color} rounded-xl p-4 sm:p-5 md:p-6 border ${feature.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <Icon className={`w-6 h-6 sm:w-7 md:w-8 ${feature.iconColor} mb-2 sm:mb-3 mx-auto`} />
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center mb-8 sm:mb-10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 group shadow-lg hover:shadow-xl transition-all"
              >
                Quero Meu Negócio Automatizado
                <ArrowDown className="w-4 h-4 sm:w-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                ✓ Garantia de 60 dias • ✓ Suporte 24/7 • ✓ Sem fidelidade
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 sm:mt-10"
          >
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              Veja como tudo funciona ↓
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
