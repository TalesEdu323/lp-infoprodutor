"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface QuizModalProps {
  open: boolean
  onClose: () => void
  onComplete: (correct: boolean) => void
}

export function QuizModal({ open, onClose, onComplete }: QuizModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const question = {
    text: "Qual é o seu maior desafio na venda de infoprodutos hoje?",
    options: [
      { id: "A", text: "Processos manuais que tomam muito tempo", tip: "Automação é sua solução!" },
      { id: "B", text: "Dificuldade em escalar produção de conteúdo", tip: "Podcast to Reels vai revolucionar!" },
      { id: "C", text: "Baixo engajamento nas lives e redes", tip: "Estratégia de lives multicanal é o caminho!" },
      { id: "D", text: "Falta de estrutura para comunidade", tip: "Comunidade gamificada aumenta retenção!" },
    ],
  }

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true)
      setTimeout(() => {
        onComplete(true)
      }, 2000)
    }
  }

  const handleClose = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Quest: Descubra Sua Estratégia Personalizada</DialogTitle>
        </DialogHeader>

        {!showResult ? (
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">{question.text}</p>
            <div className="space-y-3">
              {question.options.map((option) => (
                <Card
                  key={option.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedAnswer === option.id ? "border-2 border-primary bg-primary/5" : "border"
                  }`}
                  onClick={() => setSelectedAnswer(option.id)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedAnswer === option.id ? "border-primary bg-primary" : "border-muted-foreground"
                      }`}
                    >
                      {selectedAnswer === option.id && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="font-medium">
                        {option.id}. {option.text}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button className="w-full" size="lg" onClick={handleSubmit} disabled={!selectedAnswer}>
              Enviar Resposta (+100 XP)
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-6 py-8">
            <div className="text-6xl">🎉</div>
            <h3 className="text-2xl font-bold">Parabéns! Quest Completa!</h3>
            <p className="text-lg text-muted-foreground">
              Sua dica personalizada: <strong>{question.options.find((o) => o.id === selectedAnswer)?.tip}</strong>
            </p>
            <div className="text-3xl font-bold text-emerald-600">+100 XP</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
