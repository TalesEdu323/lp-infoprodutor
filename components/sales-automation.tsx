"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { MessageSquare, Instagram, Calendar, RefreshCw, Send, Download, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const FLOWS = [
  {
    icon: MessageSquare,
    title: "WhatsApp < 1 min",
    description: "Lead pergunta, N8N qualifica e responde em menos de um minuto — 24h.",
  },
  {
    icon: Instagram,
    title: "DM por palavra-chave",
    description: "Seguidor comenta ou manda DM com gatilho. Fluxo automático dispara na hora.",
  },
  {
    icon: Calendar,
    title: "Publicação agendada",
    description: "Conteúdo aprovado vai pro ar nas redes no horário certo, sem post manual.",
  },
  {
    icon: RefreshCw,
    title: "Nutrição + CRM",
    description: "Sequências de follow-up e CRM atualizado a cada interação, sem toque humano.",
  },
]

export function SalesAutomation() {
  const prefersReducedMotion = useReducedMotion()
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

  return (
    <section id="pilar-n8n" className="py-section-lg px-4 sm:px-6 md:px-8 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-12 max-w-2xl"
        >
          <p className="label-mono text-primary mb-3">pilar_02</p>
          <h2 className="font-display mb-4">Automação N8N</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Quatro fluxos que mantêm vendas e presença rodando enquanto você aprova o calendário mensal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            {FLOWS.map((flow, i) => {
              const Icon = flow.icon
              return (
                <motion.div
                  key={flow.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-4 border border-border bg-background rounded-sharp interactive-lift hover:border-primary/40"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-mono text-sm font-medium mb-1">{flow.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{flow.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-border bg-background p-5 rounded-soft"
          >
            <p className="label-mono text-muted-foreground mb-4">demo.whatsapp</p>
            <div className="bg-muted/50 border border-border rounded-sharp p-4 mb-4 min-h-28">
              {!showResponse ? (
                <p className="text-sm text-muted-foreground">Digite &quot;ebook&quot; e veja o fluxo automático.</p>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm flex items-start gap-2">
                    <PartyPopper className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                    <span>
                      Aqui está seu material: <strong>&quot;Como Escalar sem Gravar&quot;</strong>
                    </span>
                  </p>
                  <Button size="sm" className="text-xs">
                    <Download className="w-3.5 h-3.5 mr-2" />
                    Baixar agora
                  </Button>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 font-mono text-sm"
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
