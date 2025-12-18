"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Lock, CheckCircle2, Gift } from "lucide-react"

interface Level2SectionProps {
  onXPGain: (amount: number) => void
  onBadgeUnlock: (badgeId: string) => void
  currentLevel: number
}

export function Level2Section({ onXPGain, onBadgeUnlock, currentLevel }: Level2SectionProps) {
  const [ebookClaimed, setEbookClaimed] = useState(false)
  const isLocked = currentLevel < 2

  const handleEbookClaim = () => {
    onXPGain(200)
    onBadgeUnlock("armed-hero")
    setEbookClaimed(true)
  }

  return (
    <section id="nivel-2" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Level badge */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg ${
              isLocked ? "bg-muted" : "bg-gradient-to-br from-orange-500 to-orange-600"
            }`}
          >
            {isLocked ? <Lock className="w-8 h-8" /> : "2"}
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">{isLocked ? "BLOQUEADO" : "NÍVEL 2"}</div>
            <h2 className="text-3xl font-bold">A Arma Secreta</h2>
          </div>
        </div>

        <div
          className={`max-w-5xl mx-auto space-y-12 transition-all duration-500 ${
            isLocked ? "opacity-50 pointer-events-none blur-sm" : "opacity-100"
          }`}
        >
          {/* Hero card */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                  <Gift className="w-4 h-4" />
                  Recurso Gratuito
                </div>
                <h3 className="text-4xl font-bold text-balance leading-tight">
                  Desbloqueie Sua Arma: Baixe o Ebook Gratuito
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Como herói, equipe-se com o <strong>"Guia Completo de Automação para Infoprodutores"</strong> –
                  templates prontos, estratégias comprovadas e o passo a passo para vender ebooks e infoprodutos sem
                  esforço manual.
                </p>
                <ul className="space-y-3">
                  {[
                    "Templates de vendas prontos para usar",
                    "Estratégias de automação com Cronnos",
                    "Como transformar podcasts em reels virais",
                    "Fluxo completo de lives que convertem",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg"
                  onClick={handleEbookClaim}
                  disabled={ebookClaimed}
                >
                  {ebookClaimed ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Ebook Coletado
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Colete Sua Recompensa
                      <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">+200 XP</span>
                    </>
                  )}
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-2xl transform hover:rotate-3 transition-transform duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">📖</div>
                    <div className="text-2xl font-bold">Guia de Automação</div>
                    <div className="text-sm opacity-90 mt-2">Para Infoprodutores</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Integration with Cronnos */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cronnos Integrado",
                description:
                  "Após o download, o sistema automaticamente oferece upsells personalizados para cada lead.",
                icon: "🔄",
              },
              {
                title: "Gamificação Contínua",
                description: "Receba notificações de progresso e desbloqueie novos níveis conforme avança na jornada.",
                icon: "🎮",
              },
              {
                title: "Conteúdo Personalizado",
                description: "IA analisa suas respostas e sugere o melhor caminho para seu negócio específico.",
                icon: "🤖",
              },
            ].map((feature, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                Complete o quiz do Nível 1 para desbloquear o ebook gratuito e ganhar +200 XP!
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
