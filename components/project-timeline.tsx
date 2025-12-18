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
    <section id="timeline" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-balance">
            Do Zero ao Lucro
            <span className="block text-primary mt-2">Em 8 Semanas</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Processo estruturado e previsível. Em 2 meses você está faturando.
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
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 fill-green-500" />
                ) : phase.status === "in-progress" ? (
                  <Circle className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary" />
                ) : (
                  <Circle className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
                )}
              </div>

              {/* Content */}
              <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold self-start ${
                      phase.status === "completed"
                        ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
                        : phase.status === "in-progress"
                          ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400"
                    }`}
                  >
                    {phase.status === "completed"
                      ? "✓ Concluído"
                      : phase.status === "in-progress"
                        ? "→ Em Andamento"
                        : "○ Próximo"}
                  </div>
                </div>

                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          phase.status === "completed" ? "text-green-500" : "text-muted-foreground"
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
          className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Resultado Esperado em 60 Dias</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Leads Qualificados</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Conteúdos/Mês</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">R$ 50k+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Faturamento Mês 2</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Automatizado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
