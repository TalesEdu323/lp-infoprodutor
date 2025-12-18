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
    },
    {
      icon: Calendar,
      title: "Mentorias ao Vivo",
      description: "Sessões exclusivas que você vende como produto",
    },
    {
      icon: BookOpen,
      title: "Materiais Exclusivos",
      description: "Templates, planilhas e recursos todo mês",
    },
    {
      icon: MessageCircle,
      title: "Grupo VIP",
      description: "Networking com outros infoprodutores",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Badges e prêmios por evolução",
    },
    {
      icon: Users,
      title: "Eventos Ao Vivo",
      description: "Encontros presenciais todo trimestre",
    },
  ]

  return (
    <section id="community" className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-balance">
            Comunidade que Gera
            <span className="block text-primary mt-2">Receita Recorrente</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Seus clientes viram membros. Membros pagam mensalidade. Você lucra todo mês.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance">
              Taggo Cuida de Tudo Pra Você
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg sm:text-xl mb-3">Suporte 24/7</h4>
                <p className="text-sm sm:text-base text-white/90">
                  Tudo funcionando sempre. Sem dor de cabeça técnica.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg sm:text-xl mb-3">Sempre Atualizado</h4>
                <p className="text-sm sm:text-base text-white/90">Novas funcionalidades e melhorias contínuas.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg sm:text-xl mb-3">Gestão de Conteúdo</h4>
                <p className="text-sm sm:text-base text-white/90">Lives gravadas e organizadas automaticamente.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg sm:text-xl mb-3">Comunidade Ativa</h4>
                <p className="text-sm sm:text-base text-white/90">Moderação e ambiente saudável garantidos.</p>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="group">
              Conhecer a Comunidade
              <Users className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
