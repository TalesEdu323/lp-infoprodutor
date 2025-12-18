"use client"

interface ProgressBarProps {
  progress: number
  xp: number
  level: number
}

export function ProgressBar({ progress, xp, level }: ProgressBarProps) {
  const getLevelName = () => {
    if (level === 1) return "Iniciante"
    if (level === 2) return "Aventureiro"
    return "Mestre em Automação"
  }

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted-foreground">NÍVEL {level}</span>
            <span className="text-sm font-semibold">{getLevelName()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">XP:</span>
            <span className="text-sm font-bold text-primary">{xp}</span>
          </div>
        </div>
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}
