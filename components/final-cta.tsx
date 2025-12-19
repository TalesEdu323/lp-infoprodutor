"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Shield, Clock, Users } from "lucide-react"

export function FinalCTA() {
  const guarantees = [
    { icon: Shield, text: "Garantia de 60 dias" },
    { icon: Clock, text: "Resultados em 2 meses" },
    { icon: Users, text: "Suporte 24/7" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration - removed excessive glow */}

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Social Proof */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-foreground">Últimas 10 vagas disponíveis este mês</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-balance">
            Pronto Para Transformar Seu Negócio?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            <strong className="text-foreground">Não perca mais tempo trabalhando como funcionário do seu próprio negócio.</strong>
            <br />
            Comece hoje e em 60 dias você terá um sistema completo funcionando e gerando lucro.
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm text-foreground font-medium">{guarantee.text}</span>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-10 sm:px-12 py-4 sm:py-5 group shadow-md hover:shadow-lg transition-all"
            >
              Quero Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-[10px] sm:text-xs text-muted-foreground max-w-md">
              ✓ Sem fidelidade • ✓ Cancelamento a qualquer momento • ✓ Suporte completo incluso
            </p>
          </motion.div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10"
          >
            <p className="text-xs sm:text-sm text-muted-foreground">
              ⏰ <strong className="text-foreground">Oferta limitada:</strong> Apenas para os próximos 10 infoprodutores
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

