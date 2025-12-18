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
    },
    {
      icon: Scissors,
      title: "Corte Automático",
      description: "Viralize em todas as redes",
      detail: "30+ reels prontos para postar",
    },
    {
      icon: Video,
      title: "Lives Estratégicas",
      description: "Engajamento ao vivo",
      detail: "Instagram, YouTube, TikTok simultâneo",
    },
    {
      icon: Play,
      title: "Curso Pronto",
      description: "Monetize o conhecimento",
      detail: "Lives viram produtos vendáveis",
    },
  ]

  return (
    <section id="production" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Conteúdo Infinito
            <span className="block text-primary mt-2">Com Esforço Mínimo</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Grave uma vez, apareça em todos os lugares. Suas ideias multiplicadas automaticamente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {workflow.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-5 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-3">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-base mb-1.5 leading-tight">{step.title}</h3>
                  <p className="text-primary font-semibold mb-2 text-xs">{step.description}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{step.detail}</p>
                </div>

                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-5 h-5 text-primary" />
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
          className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-3xl p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Como Funciona?</h3>
              <ul className="space-y-3.5 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Play className="w-2.5 h-2.5 text-white" />
                  </div>
                  <div className="text-sm leading-relaxed">
                    <strong>Lives em Todas as Redes:</strong> Transmita simultâneo no Instagram, YouTube e TikTok
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Play className="w-2.5 h-2.5 text-white" />
                  </div>
                  <div className="text-sm leading-relaxed">
                    <strong>Continuação Exclusiva:</strong> Leve para Meet/Zoom, grave e transforme em curso
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Play className="w-2.5 h-2.5 text-white" />
                  </div>
                  <div className="text-sm leading-relaxed">
                    <strong>Corte Inteligente:</strong> Sistema automatizado transforma podcasts em dezenas de reels
                    otimizados
                  </div>
                </li>
              </ul>
              <Button size="lg" className="group text-sm">
                Ver Exemplo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex flex-col items-center justify-center p-8">
                <Instagram className="w-14 h-14 text-primary mb-3" />
                <p className="text-center text-xs text-muted-foreground leading-relaxed">
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
