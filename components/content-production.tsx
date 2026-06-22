"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Film, Layers, LayoutGrid, Video } from "lucide-react"

const PIECES = [
  {
    icon: Film,
    title: "Reels de B-roll",
    description: "Texto animado sobre imagens de arquivo. Viraliza sem você na câmera.",
  },
  {
    icon: Layers,
    title: "Vídeos slide",
    description: "Apresentações dinâmicas com copy estratégico. Autoridade sem rosto.",
  },
  {
    icon: LayoutGrid,
    title: "Posts e carrosséis",
    description: "Feed consistente, alinhado ao objetivo do mês. Zero design manual seu.",
  },
  {
    icon: Video,
    title: "VSL sem rosto",
    description: "Página de vendas em vídeo com narrativa IA. Converte sem gravação.",
  },
]

export function ContentProduction() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="pilar-ia" className="py-section-lg px-4 sm:px-6 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-rule mb-12 max-w-2xl"
        >
          <p className="label-mono text-primary mb-3">pilar_01</p>
          <h2 className="font-display mb-4">Conteúdo 100% IA</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Quatro formatos de peça, todos gerados sem gravação, sem câmera e sem material do cliente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {PIECES.map((piece, i) => {
            const Icon = piece.icon
            return (
              <motion.div
                key={piece.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`p-5 md:p-7 border border-border interactive-lift hover:border-primary/40 ${
                  i === 0 ? "sm:row-span-1 bg-card rounded-soft" : i === 3 ? "card-accent bg-muted/50" : "bg-background rounded-sharp"
                }`}
              >
                <Icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.75} />
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2">{piece.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{piece.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
