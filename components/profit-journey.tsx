"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mic, Instagram, DollarSign, Users, TrendingUp, Target } from "lucide-react"

export function ProfitJourney() {
  const prefersReducedMotion = useReducedMotion()

  const steps = [
    {
      icon: Mic,
      title: "Você Grava",
      description: "1 podcast ou live",
      iconColor: "text-primary",
      featured: false,
      time: "30 min/semana",
    },
    {
      icon: Instagram,
      title: "Conteúdo Multiplica",
      description: "30+ reels automaticamente",
      iconColor: "text-foreground",
      featured: false,
      time: "Esforço Moderado",
    },
    {
      icon: Target,
      title: "Leads Chegam",
      description: "WhatsApp e Instagram capturam",
      iconColor: "text-primary",
      featured: false,
      time: "24/7 no piloto",
    },
    {
      icon: DollarSign,
      title: "Vendas Acontecem",
      description: "Funil automático converte",
      iconColor: "text-foreground",
      featured: false,
      time: "Enquanto dorme",
    },
    {
      icon: Users,
      title: "Comunidade Cresce",
      description: "Membros + Mentorias premium",
      iconColor: "text-primary",
      featured: false,
      time: "Receita recorrente",
    },
    {
      icon: TrendingUp,
      title: "Você Lucra",
      description: "Escalando sem trabalhar mais",
      iconColor: "text-primary-foreground",
      featured: true,
      time: "Resultado garantido",
    },
  ]

  const iconBoxClass = (featured: boolean) =>
    featured
      ? "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-soft bg-primary flex items-center justify-center"
      : "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-soft bg-muted flex items-center justify-center border border-border"

  return (
    <section id="profit" className="pt-section-lg pb-section-sm px-4 sm:px-6 md:px-8 bg-muted">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-10 sm:mb-12 max-w-2xl"
        >
          <h2 className="font-display text-balance mb-3">
            Do Zero ao Lucro
            <span className="block text-foreground mt-2">Em 6 Passos Simples</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
            <strong className="text-foreground">Processo comprovado:</strong> De gravar 1 podcast a ter um negócio lucrativo funcionando 24/7. Sem você precisar estar presente.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-24 md:top-28 lg:top-32 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-6 gap-3 md:gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative"
                >
                  <Card className="p-3 md:p-4 interactive-lift hover:border-primary/40 relative z-10 bg-background">
                    <div className={`${iconBoxClass(step.featured)} mb-2 mx-auto`}>
                      <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${step.iconColor}`} />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground mb-1">#{index + 1}</div>
                      <h3 className="font-display font-semibold text-xs sm:text-sm md:text-base mb-1 leading-tight">{step.title}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mb-2 leading-snug">{step.description}</p>
                      <div className="text-[9px] sm:text-xs font-medium text-foreground bg-muted px-2 sm:px-3 py-0.5 rounded-pill inline-block border border-border">
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
              initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className={`p-5 sm:p-6 interactive-lift hover:border-primary/40 ${step.featured ? "card-accent" : ""}`}>
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className={`${iconBoxClass(step.featured)} flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14`}>
                    <step.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${step.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-muted-foreground mb-1">#{index + 1}</div>
                    <h3 className="font-display font-semibold text-base sm:text-lg mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2.5 leading-snug">{step.description}</p>
                    <div className="text-xs font-medium text-foreground bg-muted px-3 py-1 rounded-pill inline-block border border-border">
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
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-12 max-w-3xl bg-card rounded-soft p-5 sm:p-6 border border-border card-accent"
        >
          <h3 className="font-display text-lg md:text-xl font-semibold mb-3">O Que Você Ganha?</h3>
          <p className="text-sm md:text-base mb-5 max-w-xl leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Liberdade financeira e de tempo.</strong> Um negócio que funciona enquanto você dorme, viaja ou simplesmente vive sua vida.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-5 max-w-lg">
            <div className="bg-muted rounded-sharp px-4 py-2.5 border border-border">
              <div className="text-lg md:text-xl font-display font-semibold text-foreground mb-1">-80%</div>
              <div className="text-xs text-muted-foreground">Menos tempo trabalhando</div>
            </div>
            <div className="bg-muted rounded-sharp px-4 py-2.5 border border-border">
              <div className="text-lg md:text-xl font-display font-semibold text-foreground mb-1">+300%</div>
              <div className="text-xs text-muted-foreground">Mais receita recorrente</div>
            </div>
          </div>
          <div className="inline-block bg-muted rounded-soft px-5 py-3 border border-primary/30">
            <div className="text-lg md:text-xl font-display font-semibold text-foreground">Liberdade + Lucro = Vida Que Você Merece</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
