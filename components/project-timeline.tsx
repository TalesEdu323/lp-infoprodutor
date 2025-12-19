"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle } from "lucide-react"

export function ProjectTimeline() {
  const phases = [
    {
      phase: "Semana 1-2: Fundação",
      duration: "Setup inicial",
      status: "completed",
      tasks: [
        "Infraestrutura Taggo pronta",
        "CRM configurado e integrado",
        "Branding e identidade visual",
        "Primeiro funil estruturado",
      ],
    },
    {
      phase: "Semana 3-4: Conteúdo",
      duration: "Produção inicial",
      status: "completed",
      tasks: [
        "Primeiros podcasts gravados",
        "Lives multicanal configuradas",
        "Ebook gratuito criado",
        "Reels automáticos funcionando",
      ],
    },
    {
      phase: "Semana 5-6: Vendas",
      duration: "Automação ativa",
      status: "in-progress",
      tasks: [
        "WhatsApp e Instagram vendendo",
        "Email marketing rodando",
        "Pagamentos integrados",
        "Primeiras vendas acontecendo",
      ],
    },
    {
      phase: "Semana 7-8: Comunidade",
      duration: "Lançamento",
      status: "pending",
      tasks: [
        "Comunidade aberta",
        "Primeiras mentorias ao vivo",
        "Membros fundadores entrando",
        "Receita recorrente começando",
      ],
    },
    {
      phase: "Mês 3+: Escala",
      duration: "Crescimento",
      status: "pending",
      tasks: [
        "Otimização de conversões",
        "Novos canais de aquisição",
        "Mais produtos e upsells",
        "Parcerias estratégicas",
      ],
    },
  ]

  return (
    <section id="timeline" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
            Do Zero ao Lucro
            <span className="block text-foreground mt-1 sm:mt-2 md:mt-3">Em 8 Semanas</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
            <strong className="text-foreground">Cronograma real e comprovado.</strong> Em 60 dias você terá um negócio funcionando, vendendo e gerando receita recorrente. Sem promessas vazias.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border" />

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-12 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Status Icon */}
              <div className="absolute left-2 sm:left-6 top-0 -translate-x-1/2">
                {phase.status === "completed" ? (
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-foreground fill-foreground" />
                ) : phase.status === "in-progress" ? (
                  <Circle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary fill-primary" />
                ) : (
                  <Circle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-muted-foreground" />
                )}
              </div>

              {/* Content */}
              <div className="bg-card rounded-lg p-3 sm:p-4 md:p-5 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-0.5">{phase.phase}</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                  <div
                    className={`px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold self-start border ${
                      phase.status === "completed"
                        ? "bg-muted text-foreground border-border"
                        : phase.status === "in-progress"
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "bg-muted/50 text-muted-foreground border-border"
                    }`}
                  >
                    {phase.status === "completed"
                      ? "✓ Concluído"
                      : phase.status === "in-progress"
                        ? "→ Em Andamento"
                        : "○ Próximo"}
                  </div>
                </div>

                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
                      <CheckCircle2
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0 ${
                          phase.status === "completed" ? "text-foreground" : "text-muted-foreground"
                        }`}
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-10 max-w-3xl mx-auto bg-gradient-to-r from-muted/30 to-muted/20 rounded-xl p-4 sm:p-5 md:p-6 text-center border border-border"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">Resultados Reais em 60 Dias</h3>
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mb-4 sm:mb-5 max-w-2xl mx-auto">
            Baseado em dados reais de infoprodutores que implementaram o sistema completo
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">1000+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Leads Qualificados</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">30+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Conteúdos/Mês</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">R$ 50k+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Faturamento Mês 2</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Automatizado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
