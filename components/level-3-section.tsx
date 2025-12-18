"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Crown, Lock, Users, Video, Sparkles, TrendingUp } from "lucide-react"

interface Level3SectionProps {
  onXPGain: (amount: number) => void
  onBadgeUnlock: (badgeId: string) => void
  currentLevel: number
}

export function Level3Section({ onXPGain, onBadgeUnlock, currentLevel }: Level3SectionProps) {
  const [purchased, setPurchased] = useState(false)
  const isLocked = currentLevel < 3

  const handlePurchase = () => {
    onXPGain(500)
    onBadgeUnlock("master")
    setPurchased(true)
  }

  return (
    <section id="nivel-3" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Level badge */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg ${
              isLocked ? "bg-muted" : "bg-gradient-to-br from-yellow-500 to-orange-500"
            }`}
          >
            {isLocked ? <Lock className="w-8 h-8" /> : <Crown className="w-8 h-8" />}
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">{isLocked ? "BLOQUEADO" : "NÍVEL 3"}</div>
            <h2 className="text-3xl font-bold">A Vitória Épica</h2>
          </div>
        </div>

        <div
          className={`max-w-6xl mx-auto space-y-12 transition-all duration-500 ${
            isLocked ? "opacity-50 pointer-events-none blur-sm" : "opacity-100"
          }`}
        >
          {/* Main offer */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-yellow-50 via-orange-50 to-white border-2 border-yellow-200">
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-medium">
                <Crown className="w-4 h-4" />
                Oferta Premium
              </div>
              <h3 className="text-5xl font-bold text-balance leading-tight">
                Conquiste o Tesouro: Torne-se um Mestre em Automação
              </h3>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Acesso ao curso completo, 1 mês grátis na comunidade exclusiva e todas as gravações das lives
                transformadas em um treinamento épico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Course */}
              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <Video className="w-12 h-12 mb-4 text-primary" />
                <h4 className="text-2xl font-bold mb-3">Curso Premium Completo</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Todas as lives gravadas e organizadas em um curso estruturado. Lives que começam nas redes sociais,
                  continuam em Meet/Zoom e viram produtos vitalícios.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Acesso vitalício ao conteúdo",
                    "Atualizações constantes",
                    "Certificado de conclusão",
                    "Suporte prioritário",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Community */}
              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-primary">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-12 h-12 text-primary" />
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">1 MÊS GRÁTIS</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Comunidade Exclusiva</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Seu reino eterno de conhecimento e networking. Acesso a mentorias vendidas como missões extras e
                  materiais premium como artefatos valiosos.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Mentorias ao vivo semanais",
                    "Materiais exclusivos premium",
                    "Networking com outros mestres",
                    "Desafios gamificados",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* ROI Simulator */}
            <Card className="p-6 bg-muted/50 mb-8">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Simule seu ROI com Automação
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">10x</div>
                  <div className="text-xs text-muted-foreground">Mais conteúdo</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">300%</div>
                  <div className="text-xs text-muted-foreground">Mais vendas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">24/7</div>
                  <div className="text-xs text-muted-foreground">Vendendo</div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-xl"
                onClick={handlePurchase}
                disabled={purchased}
              >
                {purchased ? (
                  <>
                    <Crown className="w-6 h-6 mr-2" />
                    Bem-vindo, Mestre!
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6 mr-2" />
                    Reclame Sua Vitória
                    <span className="ml-3 text-sm bg-white/20 px-3 py-1 rounded-full">+500 XP</span>
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Tempo limitado: Apenas 50 vagas disponíveis
              </p>
            </div>
          </Card>

          {/* Post-sale flow */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lives Contínuas",
                description:
                  "Participe de lives nas redes que direcionam para encontros em Meet/Zoom, todos gravados e vendidos.",
                icon: "📹",
              },
              {
                title: "Cronnos Sempre Ativo",
                description:
                  "Sistema mantém vendas automáticas de gravações, upsells e materiais premium continuamente.",
                icon: "⚙️",
              },
              {
                title: "Taggo te Apoia",
                description:
                  "Estrutura completa mantida pela Taggo para garantir que tudo funcione perfeitamente, sempre.",
                icon: "🛡️",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h5 className="font-bold mb-2">{item.title}</h5>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="p-8 max-w-md text-center bg-card/95 backdrop-blur-sm">
              <Lock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-bold mb-2">Nível Bloqueado</h3>
              <p className="text-muted-foreground mb-4">
                Colete o ebook gratuito do Nível 2 para desbloquear a oferta premium e ganhar acesso à comunidade
                exclusiva!
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
