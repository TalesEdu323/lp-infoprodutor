"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mic, Instagram, DollarSign, Users, TrendingUp, Target } from "lucide-react"

export function ProfitJourney() {
  const steps = [
    {
      icon: Mic,
      title: "Você Grava",
      description: "1 podcast ou live",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
      time: "30 min/semana",
    },
    {
      icon: Instagram,
      title: "Conteúdo Multiplica",
      description: "30+ reels automaticamente",
      color: "from-muted to-muted/50",
      iconColor: "text-foreground",
      time: "Zero esforço",
    },
    {
      icon: Target,
      title: "Leads Chegam",
      description: "WhatsApp e Instagram capturam",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
      time: "24/7 no piloto",
    },
    {
      icon: DollarSign,
      title: "Vendas Acontecem",
      description: "Funil automático converte",
      color: "from-muted to-muted/50",
      iconColor: "text-foreground",
      time: "Enquanto dorme",
    },
    {
      icon: Users,
      title: "Comunidade Cresce",
      description: "Membros + Mentorias premium",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
      time: "Receita recorrente",
    },
    {
      icon: TrendingUp,
      title: "Você Lucra",
      description: "Escalando sem trabalhar mais",
      color: "from-primary to-primary/80",
      iconColor: "text-white",
      time: "Resultado garantido",
    },
  ]

  return (
    <section id="profit" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
            Do Zero ao Lucro
            <span className="block text-foreground mt-1 sm:mt-2 md:mt-3">Em 6 Passos Simples</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            <strong className="text-foreground">Processo comprovado:</strong> De gravar 1 podcast a ter um negócio lucrativo funcionando 24/7. Sem você precisar estar presente.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-24 md:top-28 lg:top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-border to-border opacity-50" />

            <div className="grid grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-2 sm:p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10 bg-background">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-1.5 sm:mb-2 mx-auto ${step.color.includes('primary') ? 'border-2 border-primary' : 'border border-border'}`}
                    >
                      <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${step.iconColor}`} />
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-muted-foreground mb-1 sm:mb-1.5">#{index + 1}</div>
                      <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-1.5 leading-tight">{step.title}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mb-2 sm:mb-2.5 leading-snug">{step.description}</p>
                      <div className="text-[9px] sm:text-xs md:text-sm font-semibold text-foreground bg-muted px-2 sm:px-3 py-0.5 sm:py-1 rounded-full inline-block border border-border">
                        {step.time}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 ${step.color.includes('primary') ? 'border-2 border-primary' : 'border border-border'}`}
                  >
                    <step.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${step.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-muted-foreground mb-1.5">#{index + 1}</div>
                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2.5 leading-snug">{step.description}</p>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-foreground bg-muted px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block border border-border">
                      {step.time}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Result highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-10 max-w-3xl mx-auto bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 rounded-xl p-4 sm:p-5 md:p-6 text-center border border-border"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">O Que Você Ganha?</h3>
          <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-5 max-w-xl mx-auto leading-relaxed">
            <strong className="text-foreground">Liberdade financeira e de tempo.</strong> Um negócio que funciona enquanto você dorme, viaja ou simplesmente vive sua vida.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto mb-4 sm:mb-5">
            <div className="bg-background rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 border border-border">
              <div className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">-80%</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Menos tempo trabalhando</div>
            </div>
            <div className="bg-background rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 border border-border">
              <div className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">+300%</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Mais receita recorrente</div>
            </div>
          </div>
          <div className="inline-block bg-background rounded-lg px-4 sm:px-5 md:px-6 py-2 sm:py-3 border-2 border-primary/20">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Liberdade + Lucro = Vida Que Você Merece</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

