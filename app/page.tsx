"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"
import { Hero360 } from "@/components/hero-360"
import { ProblemPain, ProblemTurn } from "@/components/problem-turn"
import { ResultsGain } from "@/components/results-gain"
import { OnboardingOnce } from "@/components/onboarding-once"
import { PricingPlans } from "@/components/pricing-plans"
import { Objections } from "@/components/objections"
import { FinalCTA } from "@/components/final-cta"

const SECTIONS = [
  "hero",
  "problem",
  "turn",
  "results",
  "onboarding",
  "plans",
  "objections",
  "cta",
] as const

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = SECTIONS.find((section) => {
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
    <main className="min-h-screen bg-background pb-[4.75rem] xl:pb-0">
      <Header />
      <FloatingNav activeSection={activeSection} />
      <Hero360 />
      <ProblemPain />
      <ProblemTurn />
      <ResultsGain />
      <OnboardingOnce />
      <PricingPlans />
      <Objections />
      <FinalCTA />
      <Footer />
    </main>
  )
}
