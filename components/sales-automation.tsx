"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MessageSquare, Instagram, Send, Download, TrendingUp, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SalesAutomation() {
  const [message, setMessage] = useState("")
  const [showResponse, setShowResponse] = useState(false)

  const handleSendMessage = () => {
    if (message.toLowerCase().includes("ebook")) {
      setShowResponse(true)
      setTimeout(() => {
        setShowResponse(false)
        setMessage("")
      }, 5000)
    }
  }

  const automations = [
    {
      icon: MessageSquare,
      title: "WhatsApp Automático",
      description: "Responde, qualifica e vende 24/7",
      metrics: "Conversão instantânea",
      iconColor: "text-primary",
    },
    {
      icon: Instagram,
      title: "Instagram Direct",
      description: "DM automático que converte seguidores",
      metrics: "Engajamento natural",
      iconColor: "text-foreground",
    },
    {
      icon: Download,
      title: "Ebook de Entrada",
      description: "Capture leads com material gratuito",
      metrics: "Digite 'ebook' e teste →",
      iconColor: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Funil Inteligente",
      description: "Lead → Cliente → Membro VIP",
      metrics: "Jornada automática",
      iconColor: "text-foreground",
    },
    {
      icon: Users,
      title: "CRM Completo",
      description: "Acompanhe cada cliente",
      metrics: "Visão 360° de vendas",
      iconColor: "text-primary",
    },
  ]

  return (
    <section id="automation" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
            Vendas no Automático
            <span className="block text-foreground mt-1 sm:mt-2 md:mt-3">WhatsApp + Instagram</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
            <strong className="text-foreground">Vendas automáticas 24/7.</strong> Seus clientes chegam, são qualificados, compram e viram membros recorrentes. Tudo sem você precisar responder uma mensagem.
          </p>
        </motion.div>

        {/* Interactive demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <Card className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-border">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-background" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg">Teste Agora - É Grátis</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Digite "ebook" abaixo e veja como sua automação funcionará</p>
              </div>
            </div>

            <div className="bg-background rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 min-h-24 sm:min-h-32">
              {!showResponse ? (
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Aguardando sua mensagem...</p>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2 sm:space-y-3">
                  <div className="bg-muted/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border">
                    <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                      🎉 Ótimo! Aqui está seu ebook gratuito: <strong>"Como Escalar seu Infoproduto"</strong>
                    </p>
                    <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                      Baixar Ebook Agora
                    </Button>
                  </div>
                  <p className="text-[0.7rem] sm:text-xs md:text-sm text-muted-foreground">
                    ✓ Você também foi adicionado ao funil de conversão automático
                  </p>
                </motion.div>
              )}
            </div>

            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
          {automations.map((auto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-3 sm:p-4 md:p-5 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-6 transition-transform border ${auto.iconColor === 'text-primary' ? 'border-primary/30' : 'border-border'}`}>
                  <auto.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${auto.iconColor}`} />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5">{auto.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mb-1.5 sm:mb-2">{auto.description}</p>
                <div className="text-[9px] sm:text-xs md:text-sm font-semibold text-foreground bg-muted px-2 sm:px-2.5 py-0.5 rounded-full inline-block border border-border">
                  {auto.metrics}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CRM highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 rounded-xl p-4 sm:p-5 md:p-6 text-center border border-border"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Tudo Gerenciado por CRM</h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-4 sm:mb-5 md:mb-6">
            Cada lead, cada venda, cada interação registrada e otimizada. Você tem visão completa do seu negócio.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            <div className="bg-background rounded-lg p-3 sm:p-4 md:p-5">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Vendendo sempre</div>
            </div>
            <div className="bg-background rounded-lg p-3 sm:p-4 md:p-5">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">Zero</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Esforço manual</div>
            </div>
            <div className="bg-background rounded-lg p-3 sm:p-4 md:p-5">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Rastreável</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
