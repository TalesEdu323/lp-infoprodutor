"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen, Video, Megaphone, BarChart3, Users, Sparkles } from "lucide-react"

export function WhatYouLearn() {
  const prefersReducedMotion = useReducedMotion()

  const modules = [
    {
      icon: BookOpen,
      title: "Conteúdo que Converte",
      description: "Como criar podcast e reels que vendem sem parecer vendedor",
      iconColor: "text-primary",
      featured: false,
    },
    {
      icon: Video,
      title: "Produção sem Complicação",
      description: "1 gravação vira dezenas de peças para todas as redes",
      iconColor: "text-foreground",
      featured: false,
    },
    {
      icon: Megaphone,
      title: "Funil de Vendas Automático",
      description: "Montar e automatizar do primeiro contato até o fechamento",
      iconColor: "text-primary",
      featured: false,
    },
    {
      icon: BarChart3,
      title: "Captação de Leads 24/7",
      description: "WhatsApp e Instagram trabalhando no piloto por você",
      iconColor: "text-foreground",
      featured: false,
    },
    {
      icon: Users,
      title: "Comunidade que Gera Receita",
      description: "Engajar membros e monetizar com mentorias premium",
      iconColor: "text-primary",
      featured: false,
    },
    {
      icon: Sparkles,
      title: "Escala no Piloto Automático",
      description: "Crescer sem trabalhar mais horas no dia a dia",
      iconColor: "text-primary-foreground",
      featured: true,
    },
  ]

  const iconBoxClass = (featured: boolean) =>
    featured
      ? "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-soft bg-primary flex items-center justify-center"
      : "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-soft bg-muted flex items-center justify-center border border-border"

  return (
    <section id="learn" className="py-section-sm px-4 sm:px-6 md:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-10 sm:mb-12 max-w-2xl"
        >
          <h2 className="font-display text-balance mb-3">
            O Que Você Vai Aprender
            <span className="block text-foreground mt-2">Módulos do Infoprodutor 360</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
            <strong className="text-foreground">Do conteúdo à venda:</strong> Tudo que você precisa para ter um negócio digital lucrativo, do zero ao piloto automático.
          </p>
        </motion.div>

        {/* Desktop: horizontal grid */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-24 md:top-28 lg:top-32 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-6 gap-3 md:gap-4">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative"
                >
                  <Card className="p-3 md:p-4 interactive-lift hover:border-primary/40 relative z-10 bg-background">
                    <div className={`${iconBoxClass(module.featured)} mb-2 mx-auto`}>
                      <module.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${module.iconColor}`} />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-muted-foreground mb-1">#{index + 1}</div>
                      <h3 className="font-display font-semibold text-xs sm:text-sm md:text-base mb-1 leading-tight">{module.title}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-snug">{module.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className={`p-5 sm:p-6 interactive-lift hover:border-primary/40 ${module.featured ? "card-accent" : ""}`}>
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className={`${iconBoxClass(module.featured)} flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14`}>
                    <module.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${module.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-muted-foreground mb-1">#{index + 1}</div>
                    <h3 className="font-display font-semibold text-base sm:text-lg mb-2 leading-tight">{module.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{module.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
