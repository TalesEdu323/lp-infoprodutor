"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MessageSquare, CalendarCheck, Sparkles } from "lucide-react"
import { UiMockups } from "@/components/ui-mockups"

const STEPS = [
  {
    icon: MessageSquare,
    title: "Conversamos no início",
    description:
      "Você conta sobre o negócio, o público e a meta. Uma conversa, feita.",
  },
  {
    icon: CalendarCheck,
    title: "Você valida o plano mensal",
    description:
      "Todo mês, recebe o plano de ação para aprovar. Objetivo, direto — poucos minutos.",
  },
  {
    icon: Sparkles,
    title: "A Taggo executa o restante",
    description:
      "Marca no ar, respostas enviadas, vendas em curso. Você segue com o que faz melhor.",
  },
]

export function OnboardingOnce() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="onboarding" className="py-section-lg px-4 sm:px-6 md:px-8 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-mono text-primary mb-4">Participação mínima</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-balance headline-tight">
              Sua participação é simples e&nbsp;previsível.
            </h2>
            <p className="prose-width text-pretty text-muted-foreground text-lg leading-[1.6] mb-8">
              O trabalho operacional fica conosco. Você entra no início e, depois, valida o plano mensal — sem surpresas no caminho.
            </p>
            <div className="space-y-6">
              {STEPS.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-sm font-medium text-primary pt-0.5 w-6 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-[1.6] text-pretty">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="label-mono text-muted-foreground mb-5">Na prática</p>
            <UiMockups />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
