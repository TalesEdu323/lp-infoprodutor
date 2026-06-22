"use client"

import type { ReactNode } from "react"
import { MessageSquare, Calendar, Smartphone } from "lucide-react"

function PhoneFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[200px] mx-auto border border-border rounded-[1.25rem] bg-background p-2 shadow-none">
        <div className="rounded-[1rem] border border-border overflow-hidden bg-muted/30">
          <div className="flex items-center justify-center gap-1.5 py-2 border-b border-border bg-background">
            <div className="w-8 h-1 rounded-full bg-border" />
          </div>
          <div className="p-3 min-h-[140px]">{children}</div>
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-muted-foreground text-center">{label}</p>
    </div>
  )
}

export function UiMockups() {
  return (
    <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
      <PhoneFrame label="Mensagens">
        <div className="space-y-2">
          <div className="bg-background border border-border rounded-lg px-2.5 py-2 text-[10px] text-muted-foreground max-w-[88%]">
            Olá, gostaria de saber mais sobre o programa
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-2 text-[10px] text-foreground ml-auto max-w-[88%]">
            Com prazer. Segue o material solicitado →
          </div>
          <div className="bg-background border border-border rounded-lg px-2.5 py-2 text-[10px] text-muted-foreground max-w-[88%]">
            Ótimo, gostaria de avançar com a compra
          </div>
          <p className="text-[9px] text-primary pt-1 text-right">Resposta em poucos segundos</p>
        </div>
      </PhoneFrame>

      <div className="flex flex-col items-center">
        <div className="w-full border border-border rounded-soft bg-background p-4">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
            <Calendar className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
            <span className="text-xs font-medium text-foreground">Agenda</span>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-3">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-[3px] text-[8px] flex items-center justify-center ${
                  i % 3 === 0
                    ? "bg-primary/15 text-primary font-medium"
                    : "bg-muted text-muted-foreground/40"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground text-pretty">Plano do mês — aguardando sua aprovação</p>
        </div>
        <p className="mt-3 text-xs font-medium text-muted-foreground text-center">Agenda</p>
      </div>

      <PhoneFrame label="Conversa">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 mb-2">
            <Smartphone className="w-3 h-3 text-primary" strokeWidth={1.75} />
            <span className="text-[9px] text-muted-foreground">3 novas conversas hoje</span>
          </div>
          <div className="flex items-center gap-2 py-1.5 border-b border-border/60">
            <MessageSquare className="w-3 h-3 text-primary shrink-0" strokeWidth={1.75} />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-foreground truncate">Maria — demonstrou interesse</p>
              <p className="text-[9px] text-primary">Atendida e qualificada</p>
            </div>
          </div>
          <div className="flex items-center gap-2 py-1.5 border-b border-border/60">
            <MessageSquare className="w-3 h-3 text-muted-foreground shrink-0" strokeWidth={1.75} />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-foreground truncate">João — conversão concluída</p>
              <p className="text-[9px] text-muted-foreground">Venda registrada</p>
            </div>
          </div>
          <div className="flex items-center gap-2 py-1.5">
            <MessageSquare className="w-3 h-3 text-muted-foreground shrink-0" strokeWidth={1.75} />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-foreground truncate">Ana — em atendimento</p>
              <p className="text-[9px] text-primary">Resposta enviada</p>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}
