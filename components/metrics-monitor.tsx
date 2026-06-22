"use client"

import { motion, useReducedMotion } from "framer-motion"
import { BarChart3, MousePointerClick, TrendingUp } from "lucide-react"

const METRICS = [
  {
    icon: MousePointerClick,
    label: "CPL",
    title: "Custo por lead",
    description: "Monitoramos quanto cada lead custa por canal para otimizar investimento em tráfego.",
  },
  {
    icon: BarChart3,
    label: "CVR",
    title: "Conversão de LP",
    description: "Acompanhamos a taxa de conversão da landing page e testamos variações de copy e oferta.",
  },
  {
    icon: TrendingUp,
    label: "ROAS",
    title: "Retorno sobre mídia",
    description: "Medimos retorno de campanhas pagas para decidir onde escalar ou pausar.",
  },
]

export function MetricsMonitor() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="metrics" className="py-section-sm px-4 sm:px-6 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-10 max-w-2xl"
        >
          <h2 className="font-display mb-4">Métricas que monitoramos</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Enquadramos performance com dados reais do funil.{" "}
            <strong className="text-foreground">Não prometemos resultado garantido</strong> — prometemos
            visibilidade e otimização contínua do sistema.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {METRICS.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 border border-border bg-card rounded-sharp"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  <span className="font-mono text-lg font-medium text-primary">{metric.label}</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">{metric.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
