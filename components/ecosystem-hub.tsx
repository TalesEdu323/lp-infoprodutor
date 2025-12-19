"use client"

import { motion } from "framer-motion"
import { Zap, Users, Video, TrendingUp, Megaphone, Workflow } from "lucide-react"
import { Card } from "@/components/ui/card"

export function EcosystemHub() {
  const ecosystemParts = [
    {
      icon: Zap,
      title: "Taggo Mantém Tudo",
      description: "Você não se preocupa com nada técnico",
      color: "from-primary to-primary/80",
      iconColor: "text-white",
    },
    {
      icon: Video,
      title: "Produção de Conteúdo",
      description: "Podcasts e lives viram dezenas de reels",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
    },
    {
      icon: Workflow,
      title: "Vendas Automáticas",
      description: "WhatsApp e Instagram vendendo 24/7",
      color: "from-muted to-muted/50",
      iconColor: "text-foreground",
    },
    {
      icon: TrendingUp,
      title: "Funil de Conversão",
      description: "Lead → Cliente → Membro VIP",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Mentorias e networking constante",
      color: "from-muted to-muted/50",
      iconColor: "text-foreground",
    },
    {
      icon: Megaphone,
      title: "Marketing Multicanal",
      description: "Presença em todas as redes",
      color: "from-muted to-muted/50",
      iconColor: "text-primary",
    },
  ]

  // Cálculos matemáticos para posicionamento circular simétrico
  // Centro absoluto do container (50% = centro perfeito)
  const centerX = 50 // Centro horizontal em porcentagem
  const centerY = 50 // Centro vertical em porcentagem
  const cardRadius = 38 // Raio onde os cards ficam (em % do container) - simétrico
  const cardWidth = 200 // Largura dos cards em pixels (aumentado)
  const cardHeight = 220 // Altura dos cards em pixels (aumentado)

  return (
    <section id="hub" className="flex items-center justify-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="font-bold mb-1.5 sm:mb-2 md:mb-3 text-balance leading-tight">
            Como Tudo se Conecta
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">Seu Ecossistema 360°</p>
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            Cada parte trabalha junto. Conteúdo gera leads, leads viram clientes, clientes entram na comunidade.{" "}
            <strong className="text-foreground">Tudo automático.</strong>
          </p>
        </motion.div>

        {/* Container circular com posicionamento matemático - perfeitamente centralizado */}
        <div className="relative w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto aspect-square flex items-center justify-center">
          {/* Círculo Central 360° - ajustado 10% esquerda e subido */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="absolute z-20"
            style={{
              left: "calc(50% - 10%)",
              top: "calc(50% - 10%)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] rounded-full bg-gradient-to-br from-primary via-primary to-primary/70 flex items-center justify-center shadow-lg border-2 sm:border-3 md:border-4 border-background">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">360°</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-white/95 tracking-wider font-medium">Completo</div>
              </div>
            </div>
          </motion.div>

          {/* Cards posicionados matematicamente em círculo simétrico */}
          {ecosystemParts.map((part, index) => {
            // Cálculo matemático preciso para simetria perfeita
            // 6 cards = 360° / 6 = 60° entre cada card
            // Começando em -90° para o primeiro card ficar no topo (12h)
            const angleDegrees = index * 60 - 90
            const angleRadians = angleDegrees * (Math.PI / 180)
            
            // Posição simétrica do centro de cada card
            // Usando trigonometria: x = centro + raio * cos(ângulo)
            //                      y = centro + raio * sin(ângulo)
            // Ajustes: -10% para esquerda, -10% para cima (evitar sobreposição)
            const offsetX = -10 // Mover 10% para a esquerda
            const offsetY = -10 // Subir 10% para evitar sobreposição
            const cardCenterXPercent = centerX + cardRadius * Math.cos(angleRadians) + offsetX
            const cardCenterYPercent = centerY + cardRadius * Math.sin(angleRadians) + offsetY
            
            const Icon = part.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, type: "spring" }}
                className="absolute hidden md:block"
                style={{
                  left: `${cardCenterXPercent}%`,
                  top: `${cardCenterYPercent}%`,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <Card className="w-full h-full p-3 sm:p-4 md:p-5 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group bg-background border-2">
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${part.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform ${
                        part.color.includes('primary') 
                          ? 'border-2 border-primary' 
                          : part.iconColor === 'text-primary' 
                            ? 'border border-primary/30' 
                            : 'border border-border'
                      }`}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${part.iconColor}`} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2 leading-tight">{part.title}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground text-pretty leading-snug">
                        {part.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden mt-12 max-w-2xl mx-auto">
          {ecosystemParts.map((part, index) => {
            const Icon = part.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center mb-3 sm:mb-4 ${
                      part.color.includes('primary') 
                        ? 'border-2 border-primary' 
                        : part.iconColor === 'text-primary' 
                          ? 'border border-primary/30' 
                          : 'border border-border'
                    }`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${part.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-2.5 leading-tight">{part.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-snug">{part.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
