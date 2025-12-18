"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mic, Instagram, DollarSign, Users, TrendingUp, Target } from "lucide-react"

export function ProfitJourney() {
  const steps = [
    {
      icon: Mic,
      title: "Você Grava",
      description: "1 podcast ou live",
      color: "from-purple-500 to-pink-500",
      time: "30 min/semana",
    },
    {
      icon: Instagram,
      title: "Conteúdo Multiplica",
      description: "30+ reels automaticamente",
      color: "from-blue-500 to-cyan-500",
      time: "Zero esforço",
    },
    {
      icon: Target,
      title: "Leads Chegam",
      description: "WhatsApp e Instagram capturam",
      color: "from-green-500 to-emerald-500",
      time: "24/7 no piloto",
    },
    {
      icon: DollarSign,
      title: "Vendas Acontecem",
      description: "Funil automático converte",
      color: "from-orange-500 to-yellow-500",
      time: "Enquanto dorme",
    },
    {
      icon: Users,
      title: "Comunidade Cresce",
      description: "Membros + Mentorias premium",
      color: "from-red-500 to-pink-500",
      time: "Receita recorrente",
    },
    {
      icon: TrendingUp,
      title: "Você Lucra",
      description: "Escalando sem trabalhar mais",
      color: "from-primary to-purple-500",
      time: "Resultado garantido",
    },
  ]

  return (
    <section id="profit" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Do Zero ao Lucro
            <span className="block text-primary mt-2">Em 6 Passos Simples</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Seu único trabalho é criar conteúdo. O resto? A gente resolve.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-green-500 to-primary opacity-30" />

            <div className="grid grid-cols-6 gap-3">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10 bg-background">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 mx-auto`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-muted-foreground mb-1.5">#{index + 1}</div>
                      <h3 className="font-bold text-sm mb-1.5 leading-tight">{step.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2.5 leading-snug">{step.description}</p>
                      <div className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                        {step.time}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-4 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-muted-foreground mb-1">#{index + 1}</div>
                    <h3 className="font-bold text-sm mb-1.5 leading-tight">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 leading-snug">{step.description}</p>
                    <div className="text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full inline-block">
                      {step.time}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Result highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary/20 via-green-500/20 to-primary/20 rounded-3xl p-6 md:p-10 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">O Resultado?</h3>
          <p className="text-sm sm:text-base mb-5 max-w-2xl mx-auto leading-relaxed">
            Você trabalha menos, ganha mais, e tem um negócio que funciona sem você ter que estar sempre presente.
          </p>
          <div className="inline-block bg-background rounded-2xl px-6 py-3">
            <div className="text-2xl sm:text-3xl font-bold text-primary">Liberdade + Lucro</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
