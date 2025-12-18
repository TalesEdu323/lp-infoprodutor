"use client"

import { useEffect, useState } from "react"
import { Trophy, Star, Zap, Award } from "lucide-react"

interface FloatingBadgesProps {
  badges: string[]
}

const badgeIcons: Record<string, any> = {
  "hero-badge": Trophy,
  visionario: Star,
  "armed-hero": Zap,
  master: Award,
}

export function FloatingBadges({ badges }: FloatingBadgesProps) {
  const [showNotification, setShowNotification] = useState(false)
  const [latestBadge, setLatestBadge] = useState<string | null>(null)

  useEffect(() => {
    if (badges.length > 0) {
      const latest = badges[badges.length - 1]
      setLatestBadge(latest)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }, [badges])

  const Icon = latestBadge ? badgeIcons[latestBadge] || Trophy : Trophy

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-right">
          <div className="bg-card border-2 border-primary rounded-lg shadow-2xl p-4 flex items-center gap-3 min-w-[280px]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-orange-500 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold">Badge Desbloqueado!</div>
              <div className="text-sm text-muted-foreground">Continue sua jornada</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
