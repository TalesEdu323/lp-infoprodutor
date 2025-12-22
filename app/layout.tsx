import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Taggo - Ecossistema 360° para Infoprodutores",
  description:
    "Apresentação completa do ecossistema integrado: produção de conteúdo, automação de vendas, comunidade ativa e estrutura mantida pela Taggo. Tudo conectado para maximizar seus resultados.",
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
      </body>
    </html>
  )
}
