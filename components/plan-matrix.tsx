"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check, Minus } from "lucide-react"

const ROWS = [
  { label: "Peças de conteúdo IA/mês", essencial: "12", crescimento: "24", escala: "40" },
  { label: "WhatsApp automático", essencial: true, crescimento: true, escala: true },
  { label: "Instagram DM por palavra-chave", essencial: false, crescimento: true, escala: true },
  { label: "Redes com publicação agendada", essencial: "2", crescimento: "4", escala: "Todas" },
  { label: "Nutrição de leads (N8N)", essencial: "Básica", crescimento: "Completa", escala: "Avançada" },
  { label: "VSL sem rosto mensal", essencial: false, crescimento: false, escala: true },
  { label: "CRM integrado", essencial: true, crescimento: true, escala: true },
  { label: "Calendário mensal para aprovação", essencial: true, crescimento: true, escala: true },
  { label: "Relatório de métricas", essencial: false, crescimento: true, escala: true },
  { label: "Revisão estratégica mensal", essencial: false, crescimento: false, escala: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-primary mx-auto" strokeWidth={2} />
  if (value === false) return <Minus className="w-4 h-4 text-muted-foreground/40 mx-auto" strokeWidth={1.5} />
  return <span className="font-mono text-xs text-foreground">{value}</span>
}

export function PlanMatrix() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="matrix" className="py-section-sm px-4 sm:px-6 md:px-8 bg-background overflow-x-auto">
      <div className="container mx-auto max-w-5xl min-w-[320px]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-10"
        >
          <h2 className="font-display mb-3">Compare os planos</h2>
          <p className="text-muted-foreground text-sm">Entregáveis públicos. Sem surpresas.</p>
        </motion.div>

        <div className="border border-border rounded-soft overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-4 font-medium text-muted-foreground w-[40%]">Entregável</th>
                <th className="p-4 font-mono text-xs text-center">Essencial</th>
                <th className="p-4 font-mono text-xs text-center text-primary">Crescimento</th>
                <th className="p-4 font-mono text-xs text-center">Escala</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-background" : "bg-card/50"}>
                  <td className="p-4 text-foreground border-t border-border">{row.label}</td>
                  <td className="p-4 text-center border-t border-border">
                    <Cell value={row.essencial} />
                  </td>
                  <td className="p-4 text-center border-t border-border bg-primary/5">
                    <Cell value={row.crescimento} />
                  </td>
                  <td className="p-4 text-center border-t border-border">
                    <Cell value={row.escala} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
