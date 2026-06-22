import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Inter_Tight } from "next/font/google"
import "./globals.css"
import { ContactFormProvider } from "@/components/contact-form-context"
import { cn } from "@/lib/utils"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://infoprodutor.taggo.com.br"),
  title: {
    default: "Taggo — Seu marketing trabalha por você",
    template: "%s | Taggo",
  },
  description:
    "Sua marca presente, clientes atendidos e vendas em andamento — com uma conversa inicial e aprovação mensal. A Taggo cuida do restante.",
  keywords: [
    "Taggo",
    "marketing autônomo",
    "infoprodutor",
    "atrair clientes",
    "vender sem gravar",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Taggo",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/faveicon.png", apple: "/faveicon.png" },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(fraunces.variable, interTight.variable, "font-sans antialiased")}>
        <ContactFormProvider>{children}</ContactFormProvider>
      </body>
    </html>
  )
}
