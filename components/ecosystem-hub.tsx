"use client"

import { motion } from "framer-motion"
import { Zap, Users, Video, TrendingUp, Megaphone, Workflow } from "lucide-react"
import { Card } from "@/components/ui/card"

export function EcosystemHub() {
  const ecosystemParts = [
    {
      icon: Video,
      title: "Produção de Conteúdo",
      description: "Podcasts e lives viram dezenas de reels",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "Vendas Automáticas",
      description: "WhatsApp e Instagram vendendo 24/7",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Funil de Conversão",
      description: "Lead → Cliente → Membro VIP",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Mentorias e networking constante",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Megaphone,
      title: "Marketing Multicanal",
      description: "Presença em todas as redes",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Taggo Mantém Tudo",
      description: "Você não se preocupa com nada técnico",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="hub" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-balance leading-tight">
            Como Tudo se Conecta
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">Seu Ecossistema 360°</p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Cada parte trabalha junto. Conteúdo gera leads, leads viram clientes, clientes entram na comunidade.{" "}
            <strong className="text-foreground">Tudo automático.</strong>
          </p>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto aspect-square max-h-[700px]">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary via-primary to-primary/70 flex items-center justify-center shadow-2xl border-4 border-background">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">360°</div>
                <div className="text-xs sm:text-sm text-white/95 tracking-wider font-medium">Completo</div>
              </div>
            </div>
          </motion.div>

          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {ecosystemParts.map((_, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180)
              const x1 = 50
              const y1 = 50
              const x2 = 50 + 38 * Math.cos(angle)
              const y2 = 50 + 38 * Math.sin(angle)

              return (
                <motion.line
                  key={index}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#gradient)"
                  strokeWidth="2.5"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                />
              )
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {/* Ecosystem Cards */}
          {ecosystemParts.map((part, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180)
            const x = 50 + 44 * Math.cos(angle)
            const y = 50 + 44 * Math.sin(angle)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15, type: "spring" }}
                className="absolute hidden md:block"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Card className="w-44 lg:w-56 p-4 lg:p-5 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group bg-background/95 backdrop-blur-sm border-2">
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <part.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm lg:text-base mb-2 leading-tight">{part.title}</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground text-pretty leading-snug">
                    {part.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden mt-12">
          {ecosystemParts.map((part, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 hover:shadow-xl transition-all">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center mb-3`}
                >
                  <part.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-1.5 leading-tight">{part.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{part.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
