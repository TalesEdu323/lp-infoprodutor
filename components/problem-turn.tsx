"use client"

import { motion, useReducedMotion } from "framer-motion"
import { X, Check } from "lucide-react"

export function ProblemPain() {
  const prefersReducedMotion = useReducedMotion()

  const pains = [
    "A agência pede gravação, material e aprovação — tudo depende da sua agenda.",
    "Uma semana fora, e a estratégia freia.",
    "Seu tempo vai para campanhas, não para o negócio.",
    "Você gerencia marketing quando deveria conduzir a empresa.",
  ]

  return (
    <section id="problem" className="py-section-lg px-4 sm:px-6 md:px-8 bg-muted">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display mb-6 text-balance headline-tight">
            Reconhece algum desses cenários?
          </h2>
          <ul className="space-y-5">
            {pains.map((item) => (
              <li key={item} className="flex items-start gap-4 text-base md:text-lg">
                <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-muted-foreground leading-[1.6] text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export function ProblemTurn() {
  const prefersReducedMotion = useReducedMotion()

  const gains = [
    "Conversamos uma vez sobre o seu negócio, público e meta.",
    "A operação segue — marca visível, respostas enviadas, vendas em curso.",
    "Você acompanha o andamento sem estar no centro da execução.",
    "Seu tempo volta para o que importa.",
  ]

  return (
    <section id="turn" className="py-section-lg px-4 sm:px-6 md:px-8 bg-system">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display mb-6 text-system-foreground text-balance headline-tight">
            Com a Taggo, a lógica é&nbsp;outra.
          </h2>
          <ul className="space-y-5">
            {gains.map((item) => (
              <li key={item} className="flex items-start gap-4 text-base md:text-lg">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-system-foreground/85 leading-[1.6] text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
