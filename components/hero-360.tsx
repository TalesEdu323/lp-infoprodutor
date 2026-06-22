"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, MessageCircle, CalendarCheck } from "lucide-react"

export function Hero360() {
  const prefersReducedMotion = useReducedMotion()

  const proof = [
    { icon: Eye, text: "Marca visível sem gravação" },
    { icon: MessageCircle, text: "Resposta na hora a quem chega" },
    { icon: CalendarCheck, text: "Plano do mês aprovado em minutos" },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-background texture-paper"
    >
      <Image
        src="/hero-atmosphere.png"
        alt=""
        fill
        className="object-cover object-right opacity-35 pointer-events-none"
        priority
        aria-hidden
      />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-balance headline-tight max-w-[18ch] sm:max-w-none mb-6"
          >
            Seu marketing trabalha por&nbsp;você.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="prose-width text-pretty text-lg md:text-xl text-muted-foreground leading-[1.6] mb-10"
          >
            Você cuida do negócio. A Taggo mantém sua marca visível, responde quem chega e conduz a&nbsp;venda — todos os dias, com uma aprovação mensal de poucos minutos.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Button size="lg" className="group text-sm sm:text-base">
              Agendar conversa gratuita
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-t border-border pt-8"
          >
            {proof.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
