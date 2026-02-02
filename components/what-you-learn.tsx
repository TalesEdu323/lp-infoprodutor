"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen, Video, Megaphone, BarChart3, Users, Sparkles } from "lucide-react"

export function WhatYouLearn() {
  const modules = [
    {
      icon: BookOpen,
      title: "Conteúdo que Converte",
      description: "Como criar podcast e reels que vendem sem parecer vendedor",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
    },
    {
      icon: Video,
      title: "Produção sem Complicação",
      description: "1 gravação vira dezenas de peças para todas as redes",
      color: "from-muted to-muted/50",
      iconColor: "text-foreground",
    },
    {
      icon: Megaphone,
      title: "Funil de Vendas Automático",
      description: "Montar e automatizar do primeiro contato até o fechamento",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Captação de Leads 24/7",
      description: "WhatsApp e Instagram trabalhando no piloto por você",
      color: "from-muted to-muted/50",
      iconColor: "text-foreground",
    },
    {
      icon: Users,
      title: "Comunidade que Gera Receita",
      description: "Engajar membros e monetizar com mentorias premium",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Escala no Piloto Automático",
      description: "Crescer sem trabalhar mais horas no dia a dia",
      color: "from-primary to-primary/80",
      iconColor: "text-white",
    },
  ]

  return (
    <section id="learn" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
            O Que Você Vai Aprender
            <span className="block text-foreground mt-1 sm:mt-2 md:mt-3">Módulos do Infoprodutor 360</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            <strong className="text-foreground">Do conteúdo à venda:</strong> Tudo que você precisa para ter um negócio digital lucrativo, do zero ao piloto automático.
          </p>
        </motion.div>

        {/* Desktop: horizontal grid */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-24 md:top-28 lg:top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-border to-border opacity-50" />

            <div className="grid grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-2 sm:p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10 bg-background">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-1.5 sm:mb-2 mx-auto ${module.color.includes('primary') ? 'border-2 border-primary' : 'border border-border'}`}
                    >
                      <module.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${module.iconColor}`} />
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-muted-foreground mb-1 sm:mb-1.5">#{index + 1}</div>
                      <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-1.5 leading-tight">{module.title}</h3>
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0 ${module.color.includes('primary') ? 'border-2 border-primary' : 'border border-border'}`}
                  >
                    <module.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${module.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-muted-foreground mb-1.5">#{index + 1}</div>
                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 leading-tight">{module.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-snug">{module.description}</p>
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
