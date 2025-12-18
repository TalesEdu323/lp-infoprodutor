"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Rocket, TrendingUp } from "lucide-react"

export function Hero360() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-5 text-balance leading-[1.15]">
            Seu Negócio Digital
            <span className="block bg-gradient-to-r from-primary via-green-500 to-primary bg-clip-text text-transparent mt-2">
              Completo em 360°
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-7 text-pretty leading-relaxed">
            Criamos conteúdo, automatizamos vendas, construímos comunidade e geramos lucro.
            <strong className="text-foreground"> Tudo conectado. Tudo funcionando. Você só precisa aparecer.</strong>
          </p>

          {/* Value props in cards */}
          <div className="grid sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 border border-primary/20"
            >
              <Sparkles className="w-7 h-7 text-primary mb-2.5 mx-auto" />
              <h3 className="font-bold text-sm mb-1.5">Produção Automática</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">1 podcast vira 30+ reels nas suas redes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-5 border border-green-500/20"
            >
              <Rocket className="w-7 h-7 text-green-600 mb-2.5 mx-auto" />
              <h3 className="font-bold text-sm mb-1.5">Vendas no Piloto</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">WhatsApp e Instagram vendendo 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-2xl p-5 border border-orange-500/20"
            >
              <TrendingUp className="w-7 h-7 text-orange-600 mb-2.5 mx-auto" />
              <h3 className="font-bold text-sm mb-1.5">Lucro Recorrente</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Comunidade + Mentorias gerando receita</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="text-base px-7 py-5 group">
              Ver Projeto Completo
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14"
          >
            <p className="text-xs text-muted-foreground mb-4">Veja como tudo funciona ↓</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
