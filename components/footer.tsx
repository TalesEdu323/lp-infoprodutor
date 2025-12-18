"use client"

import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="https://lp.taggo.com.br/wp-content/uploads/new-logo.png"
              alt="Taggo Logo"
              width={120}
              height={36}
              className="object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Ecossistema completo para infoprodutores que querem escalar com automação e qualidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ecossistema</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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

          <div>
            <h4 className="font-bold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cronnos AI</li>
              <li>Lives Multicanal</li>
              <li>Podcasts para Reels</li>
              <li>CRM Integrado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@taggo.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Taggo. Todos os direitos reservados.</p>
          <p className="mt-2">Estrutura mantida continuamente pela Taggo para garantir seu sucesso.</p>
        </div>
      </div>
    </footer>
  )
}
