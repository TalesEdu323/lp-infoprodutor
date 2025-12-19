"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { EcosystemHub } from "@/components/ecosystem-hub"
import { ContentProduction } from "@/components/content-production"
import { SalesAutomation } from "@/components/sales-automation"
import { CommunityEngagement } from "@/components/community-engagement"
import { ProjectTimeline } from "@/components/project-timeline"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"
import { Hero360 } from "@/components/hero-360"
import { ProfitJourney } from "@/components/profit-journey"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "profit", "hub", "production", "automation", "community", "timeline"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FloatingNav activeSection={activeSection} />
      <Hero360 id="hero" />
      <ProfitJourney id="profit" />
      <EcosystemHub id="hub" />
      <ContentProduction id="production" />
      <SalesAutomation id="automation" />
      <CommunityEngagement id="community" />
      <ProjectTimeline id="timeline" />
      <FinalCTA />
      <Footer />
    </main>
  )
}
