"use client"

import { motion, useReducedMotion } from "framer-motion"

const OBJECTIONS = [
  {
    q: "O conteúdo não fica genérico ou impessoal?",
    a: "A direção parte do seu mercado e da identidade do negócio. O resultado carrega a cara da sua marca — não de um modelo pronto.",
  },
  {
    q: "Preciso aparecer para ter autoridade?",
    a: "Autoridade vem da mensagem certa, para a pessoa certa. Grandes marcas vendem sem depender de rosto na câmera.",
  },
  {
    q: "E se o atendimento responder de forma inadequada?",
    a: "Você valida tudo antes de entrar no ar. As respostas seguem o tom e as orientações que definiu — com consistência.",
  },
  {
    q: "Já tentei automatizar e não deu resultado.",
    a: "Comunicação sem estratégia raramente converte. Aqui, o conteúdo atrai o interesse certo e o atendimento segura quem chegou.",
  },
]

export function Objections() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="objections" className="py-section-lg px-4 sm:px-6 md:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display text-balance headline-tight">
            Dúvidas comuns antes de&nbsp;começar
          </h2>
        </motion.div>

        <div className="space-y-0 border border-border rounded-soft overflow-hidden">
          {OBJECTIONS.map((item, i) => (
            <motion.div
              key={item.q}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-6 md:p-8 bg-muted/50 ${i < OBJECTIONS.length - 1 ? "border-b border-border" : ""}`}
            >
              <h3 className="font-display text-lg md:text-xl font-semibold mb-3 text-foreground text-balance">
                {item.q}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-[1.6] text-pretty">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
