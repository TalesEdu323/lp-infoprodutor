import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Users,
  Rocket,
  Target,
  Heart,
  MapPin,
  Mail,
  Sparkles,
  Zap,
  Award,
  Code2,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Quem Somos - Eduardo Gomes | Taggo Software House (TGS)",
  description:
    "Conheça Eduardo Gomes e a Taggo Software House (TGS). Ecossistema para infoprodutores: produção de conteúdo, automação de vendas e comunidade. São Paulo, Brasil.",
  keywords: [
    "Quem somos",
    "Eduardo Gomes",
    "Eduardo Gomes Taggo",
    "Taggo Software House",
    "TGS",
    "Taggo",
    "infoprodutores",
    "ecossistema Taggo",
    "sobre nós",
  ],
  openGraph: {
    title: "Quem Somos - Eduardo Gomes | Taggo Software House (TGS)",
    description:
      "Conheça Eduardo Gomes e a Taggo Software House (TGS). Ecossistema completo para infoprodutores.",
    type: "website",
  },
}

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Conheça nossa história</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Quem somos
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              O ecossistema para infoprodutores é liderado por{" "}
              <strong>Eduardo Gomes</strong> e mantido pela{" "}
              <strong>Taggo Software House (TGS)</strong>, com foco em produção
              de conteúdo, automação de vendas e comunidade.
            </p>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Nossa Missão</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferecer um ecossistema 360° para infoprodutores: produção de
                    conteúdo, automação de vendas, comunidade ativa e estrutura
                    mantida pela <strong>Taggo Software House (TGS)</strong> para
                    maximizar seus resultados.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Nossa Visão</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser a referência em ecossistema integrado para infoprodutores
                    no Brasil, reconhecida pela inovação da Taggo e pelos
                    resultados entregues aos nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* A Taggo e o ecossistema */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Taggo Software House (TGS)
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A <strong>Taggo Software House (TGS)</strong> atua no ecossistema
                para infoprodutores com foco em inovação, eficiência e resultados
                em produção de conteúdo e automação de vendas.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    O que fazemos
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O ecossistema <strong>Taggo</strong> integra produção de
                    conteúdo, automação de vendas, comunidade e cronograma em um
                    único lugar. A <strong>Taggo Software House (TGS)</strong>{" "}
                    desenvolve e mantém a estrutura para que infoprodutores
                    escalem com qualidade e automação.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Com visão de longo prazo, a Taggo Software House (TGS) evolui
                    o produto continuamente, orientada pelas necessidades reais
                    de quem produz e vende infoprodutos no dia a dia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Por que o ecossistema existe
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A <strong>Taggo Software House (TGS)</strong> nasceu da
                    análise prática do cenário de infoprodutores e da
                    identificação de lacunas em usabilidade, automação e
                    integração.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    O ecossistema foi criado para reduzir fricções, modernizar
                    rotinas e trazer mais eficiência para quem produz conteúdo,
                    automatiza vendas e mantém uma comunidade ativa — tudo
                    conectado e mantido pela Taggo Software House (TGS).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quem somos: Eduardo Gomes, Taggo Software House, TGS */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Quem somos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça Eduardo Gomes e a Taggo Software House (TGS) por trás do
                ecossistema para infoprodutores.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
              {/* Eduardo Gomes */}
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-muted flex items-center justify-center">
                    <Image
                      src="/eduardo-gomes.png"
                      alt="Eduardo Gomes - Fundador e CTO"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Fundador e CTO</h3>
                    <a
                      href="https://www.linkedin.com/in/eduardo-gomes-tgs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-primary hover:underline transition-colors inline-block"
                    >
                      Eduardo Gomes
                    </a>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Eduardo Gomes Taggo lidera a visão técnica e o
                      desenvolvimento do ecossistema para infoprodutores. Foco em
                      inovação, automação e soluções que transformam produção de
                      conteúdo e vendas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Taggo Software House (TGS) */}
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-background flex items-center justify-center p-4">
                    <Image
                      src="/taggo-logo.png"
                      alt="Taggo Software House (TGS)"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">
                      Taggo Software House (TGS)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Empresa brasileira de desenvolvimento de software
                      especializada em ecossistema para infoprodutores: produção
                      de conteúdo, automação de vendas, comunidade e estrutura
                      integrada. A Taggo Software House (TGS) mantém e evolui a
                      plataforma continuamente.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Credenciais - Eduardo Gomes */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                <Award className="w-4 h-4" />
                <span>Certificações e Credenciais</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <a
                  href="https://www.linkedin.com/in/eduardo-gomes-tgs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Eduardo Gomes
                </a>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desenvolvedor certificado pelo programa Google Developers e
                membro ativo da comunidade GDG.
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">
                        Desenvolvedor Certificado Google
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Eduardo Gomes possui especialização em desenvolvimento
                      com certificações oficiais do Google Developers Program,
                      é membro ativo da comunidade GDG (Google Developers
                      Group), participante do Google I/O e inovador certificado
                      Google Cloud.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Google Developer</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>GDG Member</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Google I/O</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Google Cloud</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Valores */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Nossos valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Princípios que guiam o trabalho da Taggo Software House (TGS)
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Inovação</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sempre buscando melhorar o ecossistema e entregar mais valor
                    ao infoprodutor.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Foco no Cliente</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Soluções pensadas para as necessidades reais dos
                    infoprodutores.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Comunidade</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ecossistema e comunidade ativa para crescimento conjunto.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Compromisso</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dedicação à evolução da plataforma e ao sucesso dos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                      Entre em contato
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Taggo Software House (TGS) pronta para ajudar seu
                      ecossistema a crescer.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border/50">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:contato@taggo.com.br"
                          className="text-primary hover:underline font-medium"
                        >
                          contato@taggo.com.br
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border/50">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">
                          Localização
                        </p>
                        <p className="font-medium">
                          R. Topázio, 534 - Sala 07, Jardim Nomura, Cotia - SP
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <Link
                      href="/"
                      className="text-primary hover:underline font-medium"
                    >
                      Voltar ao ecossistema
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
