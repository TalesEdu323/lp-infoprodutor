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
    },
    {
      icon: Instagram,
      title: "Instagram Direct",
      description: "DM automático que converte seguidores",
      metrics: "Engajamento natural",
    },
    {
      icon: Download,
      title: "Ebook de Entrada",
      description: "Capture leads com material gratuito",
      metrics: "Digite 'ebook' e teste →",
    },
    {
      icon: TrendingUp,
      title: "Funil Inteligente",
      description: "Lead → Cliente → Membro VIP",
      metrics: "Jornada automática",
    },
    {
      icon: Users,
      title: "CRM Completo",
      description: "Acompanhe cada cliente",
      metrics: "Visão 360° de vendas",
    },
  ]

  return (
    <section id="automation" className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-balance">
            Vendas no Automático
            <span className="block text-primary mt-2">WhatsApp + Instagram</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Seus clientes chegam pelas redes sociais e a automação faz o resto. Vendendo enquanto você dorme.
          </p>
        </motion.div>

        {/* Interactive demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-2 border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Teste a Automação</h3>
                <p className="text-sm text-muted-foreground">Digite "ebook" e veja a mágica acontecer</p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-4 mb-4 min-h-32">
              {!showResponse ? (
                <p className="text-muted-foreground text-sm">Aguardando sua mensagem...</p>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                    <p className="text-sm mb-3">
                      🎉 Ótimo! Aqui está seu ebook gratuito: <strong>"Como Escalar seu Infoproduto"</strong>
                    </p>
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Ebook Agora
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {automations.map((auto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <auto.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{auto.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{auto.description}</p>
                <div className="text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-950 px-3 py-1 rounded-full inline-block">
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
          className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Tudo Gerenciado por CRM</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Cada lead, cada venda, cada interação registrada e otimizada. Você tem visão completa do seu negócio.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Vendendo sempre</div>
            </div>
            <div className="bg-background rounded-xl p-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Esforço manual</div>
            </div>
            <div className="bg-background rounded-xl p-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Rastreável</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
