"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, Circle } from "lucide-react"

export function ProjectTimeline() {
  const prefersReducedMotion = useReducedMotion()

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
    <section id="timeline" className="py-section-lg px-4 sm:px-6 md:px-8 bg-muted">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-10 sm:mb-12 max-w-3xl"
        >
          <h2 className="font-display text-balance mb-3">
            Do Zero ao Lucro
            <span className="block text-foreground mt-2">Em 8 Semanas</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            <strong className="text-foreground">Cronograma real e comprovado.</strong> Em 60 dias você terá um negócio funcionando, vendendo e gerando receita recorrente. Sem promessas vazias.
          </p>
        </motion.div>

        <div className="relative max-w-3xl">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-primary/40" />

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 sm:pl-20 pb-10 last:pb-0"
            >
              <div className="absolute left-2 sm:left-6 top-0 -translate-x-1/2">
                {phase.status === "completed" ? (
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-foreground fill-foreground" />
                ) : phase.status === "in-progress" ? (
                  <Circle className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary" />
                ) : (
                  <Circle className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
                )}
              </div>

              <div className="bg-card rounded-sharp p-4 md:p-5 border border-border interactive-lift hover:border-primary/40">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="font-display text-base md:text-xl font-semibold mb-0.5">{phase.phase}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-pill text-xs md:text-sm font-medium self-start border ${
                      phase.status === "completed"
                        ? "bg-muted text-foreground border-border"
                        : phase.status === "in-progress"
                          ? "bg-primary/10 text-primary border-primary/30"
                          : "bg-muted/50 text-muted-foreground border-border"
                    }`}
                  >
                    {phase.status === "completed"
                      ? "Concluído"
                      : phase.status === "in-progress"
                        ? "Em Andamento"
                        : "Próximo"}
                  </div>
                </div>

                <ul className="space-y-1.5 md:space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-xs md:text-sm">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0 ${
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
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-12 max-w-3xl mx-auto bg-card rounded-soft p-5 sm:p-6 border border-border card-accent"
        >
          <h3 className="font-display text-lg md:text-xl font-semibold mb-3">Resultados Reais em 60 Dias</h3>
          <p className="text-xs md:text-sm text-muted-foreground mb-5 max-w-2xl">
            Baseado em dados reais de infoprodutores que implementaram o sistema completo
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <div className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">1000+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Leads Qualificados</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">30+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Conteúdos/Mês</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">R$ 50k+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Faturamento Mês 2</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Automatizado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
