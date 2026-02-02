"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Users } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="p-3 sm:p-4 md:p-5 lg:col-span-2">
            <Image
              src="/taggo-logo.png"
              alt="Taggo Software House (TGS)"
              width={120}
              height={36}
              className="object-contain mb-2 sm:mb-3 w-20 sm:w-24 md:w-28 h-auto"
            />
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
              Ecossistema completo para infoprodutores que querem escalar com
              automação e qualidade.
            </p>
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h4 className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-foreground">
              Taggo Lab
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors font-medium text-[10px] sm:text-xs md:text-sm block text-foreground"
                >
                  Para Infoprodutores
                </Link>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Sistema completo de automação
                </div>
              </li>
              <li>
                <a
                  href="https://lp.taggo.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-medium text-[10px] sm:text-xs md:text-sm block text-foreground"
                >
                  Taggo Software House
                </a>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Transforme suas ideias em realidade
                </div>
              </li>
              <li>
                <a
                  href="https://adv.taggo.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-medium text-[10px] sm:text-xs md:text-sm block text-foreground"
                >
                  Para Advogados
                </a>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Sites profissionais para escritórios
                </div>
              </li>
            </ul>
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h4 className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-foreground">
              Taggo Growth Suite
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm">
              <li>
                <a
                  href="https://prosync.tech/gestao-360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-foreground"
                >
                  Prosync - Gestão 360°
                </a>
              </li>
              <li>
                <a
                  href="https://prosync.tech/sobre-crm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-foreground"
                >
                  CRM Inteligente
                </a>
              </li>
              <li>
                <a
                  href="http://rubrica.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-foreground"
                >
                  Rubrica assinaturas
                </a>
              </li>
              <li>
                <a
                  href="https://cronnus.taggo.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-foreground"
                >
                  Cronnos AI
                </a>
              </li>
              <li>
                <a
                  href="https://themis.taggo.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-foreground"
                >
                  Themis
                </a>
              </li>
            </ul>
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h4 className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-foreground">
              Contato
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                contato@taggo.com.br
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                (11) 91424-4166
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 mt-0.5" />
                <span>
                  R. Topázio, 534 - Sala 07
                  <br />
                  Jardim Nomura, Cotia - SP
                  <br />
                  06717-235
                </span>
              </li>
              <li className="mt-2 pt-2 border-t border-border/50 flex items-center gap-1.5 sm:gap-2">
                <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <Link
                  href="/quem-somos"
                  className="hover:text-primary transition-colors text-foreground"
                >
                  Quem somos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-4 sm:pt-5 md:pt-6 text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Taggo. Todos os direitos reservados.</p>
          <p className="mt-1 sm:mt-1.5">
            Estrutura mantida continuamente pela Taggo para garantir seu sucesso.
          </p>
        </div>
      </div>
    </footer>
  )
}
