import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { WhatsAppFormButton } from "@/components/whatsapp-form-button"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://infoprodutor.taggo.com.br"),
  title: {
    default: "Taggo - Ecossistema 360° para Infoprodutores",
    template: "%s | Taggo Infoprodutor",
  },
  description:
    "Ecossistema completo para infoprodutores: produção de conteúdo, automação de vendas, comunidade ativa. Taggo Software House e TGS. Estrutura mantida pela Taggo para maximizar seus resultados.",
  keywords: [
    "Taggo",
    "Taggo Software House",
    "TGS",
    "infoprodutor",
    "ecossistema infoprodutores",
    "automação de vendas",
    "produção de conteúdo",
    "comunidade",
    "Eduardo Gomes",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Taggo - Ecossistema Infoprodutor",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/faveicon.png",
    apple: "/faveicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppFormButton />
      </body>
    </html>
  )
}
