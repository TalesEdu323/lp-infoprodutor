"use client"

import { motion } from "framer-motion"
import { Mic, Video, Scissors, ArrowRight, Play, Instagram } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContentProduction() {
  const workflow = [
    {
      icon: Mic,
      title: "Grave 1 Podcast",
      description: "Conteúdo autêntico",
      detail: "30 minutos por semana",
      iconColor: "text-primary",
    },
    {
      icon: Scissors,
      title: "Corte Automático",
      description: "Viralize em todas as redes",
      detail: "30+ reels prontos para postar",
      iconColor: "text-foreground",
    },
    {
      icon: Video,
      title: "Lives Estratégicas",
      description: "Engajamento ao vivo",
      detail: "Instagram, YouTube, TikTok simultâneo",
      iconColor: "text-primary",
    },
    {
      icon: Play,
      title: "Curso Pronto",
      description: "Monetize o conhecimento",
      detail: "Lives viram produtos vendáveis",
      iconColor: "text-foreground",
    },
  ]

  return (
    <section id="production" className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-bold mb-3 sm:mb-4 md:mb-5 text-balance">
            Conteúdo Infinito
            <span className="block text-foreground mt-2 sm:mt-3 md:mt-4">Com Esforço Mínimo</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            <strong className="text-foreground">1 gravação = 30+ conteúdos prontos.</strong> Grave uma vez, apareça em todas as redes. Suas ideias multiplicadas automaticamente, sem você precisar editar nada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
          {workflow.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-3 sm:p-4 md:p-5 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-muted/20 to-transparent rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12 md:-mr-14 md:-mt-14 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-1.5 sm:mb-2 border ${step.iconColor === 'text-primary' ? 'border-primary/30' : 'border-border'}`}>
                    <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${step.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-1.5 leading-tight">{step.title}</h3>
                  <p className="text-foreground font-semibold mb-1 text-[10px] sm:text-xs md:text-sm">{step.description}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-snug">{step.detail}</p>
                </div>

                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-xl p-4 sm:p-5 md:p-6 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-center">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">Como Funciona?</h3>
              <ul className="space-y-2 sm:space-y-2.5 mb-3 sm:mb-4 md:mb-5">
                <li className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-background" />
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    <strong>Lives em Todas as Redes:</strong> Transmita simultâneo no Instagram, YouTube e TikTok
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-background" />
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    <strong>Continuação Exclusiva:</strong> Leve para Meet/Zoom, grave e transforme em curso
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-background" />
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    <strong>Corte Inteligente:</strong> Sistema automatizado transforma podcasts em dezenas de reels
                    otimizados
                  </div>
                </li>
              </ul>
              <Button size="lg" className="group text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-3">
                Ver Exemplo
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 border border-border">
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-foreground mb-1.5 sm:mb-2" />
                <p className="text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
                  1 podcast = 30+ reels automáticos
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
