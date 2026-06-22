"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useContactForm } from "@/components/contact-form-context"
import { Check } from "lucide-react"

const PLANS = [
  {
    id: "essencial",
    name: "Essencial",
    price: "3.500",
    headline: "Sua marca presente. Seus contatos sempre atendidos.",
    features: [
      "Marca visível todo dia, sem gravação ou postagem manual",
      "Resposta na hora a quem demonstra interesse",
      "Acompanhamento pelo celular",
      "Aprovação mensal — a Taggo executa o plano",
    ],
    highlighted: false,
  },
  {
    id: "crescimento",
    name: "Crescimento",
    price: "6.700",
    headline: "Um funil que captura e conduz até a decisão.",
    features: [
      "Tudo do plano Essencial",
      "Atendimento que qualifica e orienta até a compra",
      "Página de captura ativa para novos interessados",
      "Mais volume de vendas, mesma participação sua",
    ],
    highlighted: true,
    badge: "Mais escolhido",
  },
  {
    id: "escala",
    name: "Escala",
    price: "10.200",
    headline: "Vendas em curso, em todos os horários.",
    features: [
      "Tudo do plano Crescimento",
      "Presença e conversão em múltiplos canais",
      "Receita recorrente da sua comunidade",
      "Operação ativa fora do horário comercial",
    ],
    highlighted: false,
  },
]

export function PricingPlans() {
  const prefersReducedMotion = useReducedMotion()
  const { openContactForm } = useContactForm()

  return (
    <section id="plans" className="py-section-lg px-4 sm:px-6 md:px-8 bg-system">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="font-display text-system-foreground mb-4 text-balance headline-tight">
            Escolha o nível de autonomia do seu&nbsp;marketing
          </h2>
          <p className="prose-width text-pretty text-system-foreground/70 text-base leading-[1.6]">
            Três opções, um compromisso: marca visível, clientes atendidos e vendas em curso — sem gravação, postagem ou resposta manual do seu lado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex flex-col p-6 md:p-7 rounded-soft border ${
                plan.highlighted
                  ? "border-primary bg-system-foreground/10 md:-mt-2 md:mb-2"
                  : "border-system-foreground/15 bg-system-foreground/5"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-wider font-medium bg-primary text-primary-foreground px-3 py-1 rounded-pill">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-display text-xl text-system-foreground mb-2">{plan.name}</h3>
              <p className="text-2xl md:text-3xl font-semibold text-system-foreground mb-1 tabular-nums">
                R$&nbsp;{plan.price}
                <span className="text-sm text-system-foreground/50 font-normal">/mês</span>
              </p>
              <p className="text-sm text-system-foreground/80 mb-6 leading-[1.6] font-medium text-pretty">
                {plan.headline}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-system-foreground/75 text-pretty">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                variant={plan.highlighted ? "default" : "ghost"}
                className={
                  plan.highlighted
                    ? "w-full"
                    : "w-full border border-system-foreground/35 text-system-foreground hover:bg-system-foreground/10 hover:text-system-foreground"
                }
                onClick={openContactForm}
              >
                Falar sobre o plano {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
