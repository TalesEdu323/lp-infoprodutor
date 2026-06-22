"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Eye, MessageCircle, Smartphone, ThumbsUp } from "lucide-react"

const RESULTS = [
  {
    icon: Eye,
    title: "Marca visível, todo dia",
    description:
      "Conteúdo profissional no ar todos os dias. Sem gravação, sem envio de material, sem demanda extra do seu lado.",
  },
  {
    icon: MessageCircle,
    title: "Resposta a quem chega",
    description:
      "Quem entra em contato é atendido na hora — de madrugada, no fim de semana, quando você estiver ocupado com o negócio.",
  },
  {
    icon: Smartphone,
    title: "Vendas em curso no celular",
    description:
      "O conteúdo atrai. O atendimento qualifica. Você acompanha pelo celular, sem operar cada etapa.",
  },
  {
    icon: ThumbsUp,
    title: "Você aprova o plano mensal",
    description:
      "Uma vez por mês, valida o plano de ação. Poucos minutos. A execução segue organizada a partir daí.",
  },
]

export function ResultsGain() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="results" className="py-section-lg px-4 sm:px-6 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule max-w-2xl mb-14"
        >
          <h2 className="font-display mb-4 text-balance headline-tight">
            O que muda no seu dia&nbsp;a&nbsp;dia
          </h2>
          <p className="prose-width text-pretty text-muted-foreground text-base md:text-lg leading-[1.6]">
            Você recupera tempo. Sua marca ganha presença. As vendas ganham previsibilidade — com poucos minutos de participação por mês.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {RESULTS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={i % 2 === 1 ? "md:mt-10" : ""}
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 border border-primary/25 rounded-sharp shrink-0">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl mb-3 text-balance headline-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-[1.6] text-pretty">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
