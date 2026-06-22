"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const FLOW_STEPS = [
  { id: "01", label: "Objetivo do mês", desc: "Meta definida no onboarding" },
  { id: "02", label: "IA gera conteúdo", desc: "Reels, slides, posts, VSL" },
  { id: "03", label: "N8N publica", desc: "Agendamento multicanal" },
  { id: "04", label: "Lead chega", desc: "WhatsApp ou DM automático" },
  { id: "05", label: "N8N nutre", desc: "Sequência sem toque humano" },
  { id: "06", label: "CRM atualizado", desc: "Visão 360° do funil" },
]

export function EcosystemHub() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="flow" className="py-section-xl px-4 sm:px-6 md:px-8 bg-system texture-paper">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <p className="label-mono text-primary mb-4">fluxo.do_sistema</p>
          <h2 className="font-display text-system-foreground mb-4">
            Como o sistema funciona
          </h2>
          <p className="text-system-foreground/70 text-base leading-relaxed">
            Do objetivo mensal até o lead nutrido no CRM — tudo conectado, sem você no meio da produção.
          </p>
        </motion.div>

        <div className="hidden lg:flex items-stretch gap-2">
          {FLOW_STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center flex-1 min-w-0"
            >
              <div className="flex-1 border border-system-foreground/15 bg-system-foreground/5 p-4 rounded-sharp">
                <p className="font-mono text-[10px] text-primary mb-2">{step.id}</p>
                <p className="font-mono text-xs text-system-foreground font-medium mb-1 leading-tight">
                  {step.label}
                </p>
                <p className="text-[11px] text-system-foreground/60 leading-snug">{step.desc}</p>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <ArrowRight className="w-4 h-4 text-system-foreground/30 shrink-0 mx-1" strokeWidth={1.5} />
              )}
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden space-y-3">
          {FLOW_STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <div className="flex-1 border border-system-foreground/15 bg-system-foreground/5 p-4 rounded-sharp">
                <p className="font-mono text-[10px] text-primary mb-1">{step.id}</p>
                <p className="font-mono text-sm text-system-foreground font-medium">{step.label}</p>
                <p className="text-xs text-system-foreground/60 mt-1">{step.desc}</p>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <div className="font-mono text-system-foreground/30 text-xs rotate-90">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
