"use client"

import { motion } from "framer-motion"
import { Users, Award, Calendar, BookOpen, MessageCircle, Crown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CommunityEngagement() {
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
    <section id="community" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
            Comunidade que Gera
            <span className="block text-foreground mt-1 sm:mt-2 md:mt-3">Receita Recorrente</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
            <strong className="text-foreground">Receita recorrente previsível.</strong> Seus clientes viram membros que pagam mensalmente. Você lucra todo mês, mesmo quando não está trabalhando.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-3 sm:p-4 md:p-5 h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-2 sm:mb-3 border ${benefit.iconColor === 'text-primary' ? 'border-primary/30' : 'border-border'}`}>
                  <benefit.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${benefit.iconColor}`} />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5">{benefit.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-xl p-4 sm:p-5 md:p-6 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -mr-24 -mt-24 md:-mr-32 md:-mt-32" />
          <div className="absolute bottom-0 left-0 w-36 h-36 md:w-48 md:h-48 bg-white/10 rounded-full -ml-18 -mb-18 md:-ml-24 md:-mb-24" />

          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 text-balance">
              Taggo Cuida de Tudo Pra Você
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5">
                <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">Suporte 24/7</h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/90">
                  Tudo funcionando sempre. Sem dor de cabeça técnica.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5">
                <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">Sempre Atualizado</h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/90">Novas funcionalidades e melhorias contínuas.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5">
                <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">Gestão de Conteúdo</h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/90">Lives gravadas e organizadas automaticamente.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5">
                <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">Comunidade Ativa</h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/90">Moderação e ambiente saudável garantidos.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Button size="lg" variant="secondary" className="group text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
                Quero Receita Recorrente Agora
                <Users className="w-3.5 h-3.5 sm:w-4 ml-1.5 group-hover:scale-110 transition-transform" />
              </Button>
              <p className="text-[10px] sm:text-xs text-white/80">
                ✓ Primeiro mês grátis • ✓ Cancelamento a qualquer momento
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
