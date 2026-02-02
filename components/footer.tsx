"use client"

import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="p-3 sm:p-4 md:p-5">
            <Image
              src="/taggo-logo.png"
              alt="Taggo Software House"
              width={120}
              height={36}
              className="object-contain mb-2 sm:mb-3 w-20 sm:w-24 md:w-28 h-auto"
            />
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              Ecossistema completo para infoprodutores que querem escalar com automação e qualidade.
            </p>
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h4 className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">Ecossistema</h4>
            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <li>
                <a href="#production" className="hover:text-primary transition-colors">
                  Produção de Conteúdo
                </a>
              </li>
              <li>
                <a href="#automation" className="hover:text-primary transition-colors">
                  Automação de Vendas
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-primary transition-colors">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-primary transition-colors">
                  Cronograma
                </a>
              </li>
            </ul>
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h4 className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">Soluções</h4>
            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://cronnus.taggo.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Cronnos AI
                </a>
              </li>
              <li>
                <a 
                  href="https://themis.taggo.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Themis
                </a>
              </li>
              <li>
                <a 
                  href="#production" 
                  className="hover:text-primary transition-colors"
                >
                  Lives Multicanal
                </a>
              </li>
              <li>
                <a 
                  href="#production" 
                  className="hover:text-primary transition-colors"
                >
                  Podcasts para Reels
                </a>
              </li>
              <li>
                <a 
                  href="https://crm.taggo.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  CRM Integrado
                </a>
              </li>
            </ul>
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h4 className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">Contato</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                contato@taggo.com.br
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                (11) 91424-4166
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 mt-0.5" />
                <span>R. Topázio, 534 - Sala 07<br />Jardim Nomura, Cotia - SP<br />06717-235</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-4 sm:pt-5 md:pt-6 text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Taggo. Todos os direitos reservados.</p>
          <p className="mt-1 sm:mt-1.5">Estrutura mantida continuamente pela Taggo para garantir seu sucesso.</p>
        </div>
      </div>
    </footer>
  )
}
