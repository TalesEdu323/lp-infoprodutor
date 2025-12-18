"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, CheckCircle2 } from "lucide-react"
import { QuizModal } from "@/components/quiz-modal"

interface Level1SectionProps {
  onXPGain: (amount: number) => void
  onBadgeUnlock: (badgeId: string) => void
  currentLevel: number
}

export function Level1Section({ onXPGain, onBadgeUnlock, currentLevel }: Level1SectionProps) {
  const [quizOpen, setQuizOpen] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      onXPGain(100)
      onBadgeUnlock("visionario")
      setQuizCompleted(true)
    }
    setQuizOpen(false)
  }

  return (
    <section id="nivel-1" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Level badge */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            1
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">NÍVEL 1</div>
            <h2 className="text-3xl font-bold">O Chamado da Aventura</h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Storytelling */}
          <div className="text-center space-y-6">
            <h3 className="text-4xl font-bold text-balance">Você está preso no labirinto das vendas manuais?</h3>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              O <strong>Cronnos</strong> é sua saída! Automatize todo o processo de vendas de infoprodutos, desde a
              captação até a entrega, enquanto você foca no que realmente importa: criar conteúdo de valor.
            </p>
          </div>

          {/* Benefits cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Lives que Convertem",
                description:
                  "Realize lives nas redes sociais que esquentam seu público, continue a conversa em Meet/Zoom e transforme tudo em cursos gravados para vender eternamente.",
                icon: "🎥",
                badge: "live-master",
              },
              {
                title: "Produção em Escala",
                description:
                  "Transforme seus podcasts em reels infinitos, distribua em todas as plataformas e mantenha sua audiência engajada 24/7 com conteúdo relevante.",
                icon: "🎙️",
                badge: "content-producer",
              },
              {
                title: "Automação Total com Cronnos",
                description:
                  "Venda ebooks, cursos e infoprodutos no piloto automático. O Cronnos cuida do upsell, da entrega e do follow-up enquanto você dorme.",
                icon: "⚙️",
                badge: "automation-expert",
              },
              {
                title: "Ebook Gratuito como Isca",
                description:
                  "Ofereça um ebook gratuito de alto valor para construir sua lista e nutrir leads qualificados prontos para comprar seus produtos premium.",
                icon: "📚",
                badge: "lead-magnet",
              },
            ].map((benefit, i) => (
              <Card
                key={i}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => {
                  onXPGain(20)
                  onBadgeUnlock(benefit.badge)
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">{benefit.description}</p>
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Clique para coletar +20 XP</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Quiz CTA */}
          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-orange-50 border-2 border-primary">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-orange-500 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Desbloqueie o Próximo Nível</h3>
                <p className="text-muted-foreground">
                  Responda nosso quiz rápido sobre seu maior desafio em vendas e ganhe uma estratégia personalizada por
                  IA + <strong>100 XP</strong>!
                </p>
              </div>
              <Button size="lg" onClick={() => setQuizOpen(true)} disabled={quizCompleted} className="flex-shrink-0">
                {quizCompleted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Completado
                  </>
                ) : (
                  <>
                    Iniciar Quiz
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">+100 XP</span>
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} onComplete={handleQuizComplete} />
    </section>
  )
}
