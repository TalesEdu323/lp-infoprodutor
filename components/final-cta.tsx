"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useContactForm } from "@/components/contact-form-context"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  const prefersReducedMotion = useReducedMotion()
  const { openContactForm } = useContactForm()

  return (
    <section id="cta" className="py-section-xl px-4 sm:px-6 md:px-8 bg-system texture-paper relative overflow-hidden">
      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display mb-6 text-system-foreground text-balance headline-tight max-w-[18ch] sm:max-w-none mx-auto">
            Seu marketing trabalha por&nbsp;você.
          </h2>
          <p className="prose-width text-pretty text-system-foreground/70 text-base md:text-lg leading-[1.6] mb-10 mx-auto">
            Estamos à disposição para uma conversa inicial, sem compromisso. Você conhece o modelo; nós entendemos o seu negócio.
          </p>
          <Button type="button" size="lg" className="group text-base" onClick={openContactForm}>
            Agendar conversa gratuita
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Button>
          <p className="mt-5 text-xs text-system-foreground/50">
            Sem compromisso · Sem necessidade de gravação · Retorno em até 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
