"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Users, Award, Calendar, BookOpen, MessageCircle, Crown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CommunityEngagement() {
  const prefersReducedMotion = useReducedMotion()

  const benefits = [
    {
      icon: Crown,
      title: "1 Mês Grátis",
      description: "Acesso completo após primeira compra",
      iconColor: "text-primary",
    },
    {
      icon: Calendar,
      title: "Mentorias ao Vivo",
      description: "Sessões exclusivas que você vende como produto",
      iconColor: "text-foreground",
    },
    {
      icon: BookOpen,
      title: "Materiais Exclusivos",
      description: "Templates, planilhas e recursos todo mês",
      iconColor: "text-primary",
    },
    {
      icon: MessageCircle,
      title: "Grupo VIP",
      description: "Networking com outros infoprodutores",
      iconColor: "text-foreground",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Badges e prêmios por evolução",
      iconColor: "text-primary",
    },
    {
      icon: Users,
      title: "Eventos Ao Vivo",
      description: "Encontros presenciais todo trimestre",
      iconColor: "text-foreground",
    },
  ]

  return (
    <section id="community" className="py-section-sm px-4 sm:px-6 md:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-10 sm:mb-12 max-w-3xl"
        >
          <h2 className="font-display text-balance mb-3">
            Comunidade que Gera
            <span className="block text-foreground mt-2">Receita Recorrente</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            <strong className="text-foreground">Receita recorrente previsível.</strong> Seus clientes viram membros que pagam mensalmente. Você lucra todo mês, mesmo quando não está trabalhando.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 sm:mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className={`p-4 md:p-5 h-full interactive-lift hover:border-primary/40 ${index % 2 === 0 ? "card-accent" : ""}`}>
                <div className="w-10 h-10 rounded-soft bg-muted flex items-center justify-center mb-3 border border-border">
                  <benefit.icon className={`w-5 h-5 ${benefit.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-sm md:text-lg mb-1.5">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto card-inverted rounded-soft p-5 sm:p-6 md:p-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="font-display text-lg md:text-2xl font-semibold mb-5 text-balance">
              Taggo Cuida de Tudo Pra Você
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-background/10 rounded-soft p-4 border border-background/20">
                <h4 className="font-semibold text-sm md:text-base mb-2">Suporte 24/7</h4>
                <p className="text-xs md:text-sm opacity-90">
                  Tudo funcionando sempre. Sem dor de cabeça técnica.
                </p>
              </div>
              <div className="bg-background/10 rounded-soft p-4 border border-background/20">
                <h4 className="font-semibold text-sm md:text-base mb-2">Sempre Atualizado</h4>
                <p className="text-xs md:text-sm opacity-90">Novas funcionalidades e melhorias contínuas.</p>
              </div>
              <div className="bg-background/10 rounded-soft p-4 border border-background/20">
                <h4 className="font-semibold text-sm md:text-base mb-2">Gestão de Conteúdo</h4>
                <p className="text-xs md:text-sm opacity-90">Lives gravadas e organizadas automaticamente.</p>
              </div>
              <div className="bg-background/10 rounded-soft p-4 border border-background/20">
                <h4 className="font-semibold text-sm md:text-base mb-2">Comunidade Ativa</h4>
                <p className="text-xs md:text-sm opacity-90">Moderação e ambiente saudável garantidos.</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Button
                size="lg"
                variant="outline"
                className="group text-xs sm:text-sm px-6 sm:px-8 py-3 border-background/30 text-background hover:bg-background/10 hover:text-background"
              >
                Quero Receita Recorrente Agora
                <Users className="w-4 ml-1.5 group-hover:opacity-80 transition-opacity duration-200" />
              </Button>
              <p className="text-xs opacity-80">
                Primeiro mês grátis · Cancelamento a qualquer momento
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
