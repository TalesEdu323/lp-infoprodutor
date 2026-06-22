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
  Code2,
  CheckCircle2,
  ArrowLeft,
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

const cardClass =
  "rounded-soft border border-border bg-card py-0 gap-0 shadow-none interactive-lift hover:border-primary/40"

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-28">
        {/* Hero */}
        <section className="px-4 sm:px-6 md:px-8 pb-section-sm md:pb-section-lg">
          <div className="container mx-auto max-w-6xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
              Voltar para a página inicial
            </Link>
            <div className="max-w-3xl space-y-6">
              <p className="label-mono text-primary">Sobre a Taggo</p>
              <h1 className="font-display text-balance headline-tight">Quem somos</h1>
              <p className="prose-width text-pretty text-lg sm:text-xl text-muted-foreground leading-[1.6]">
                O ecossistema para infoprodutores é liderado por{" "}
                <strong className="text-foreground font-medium">Eduardo Gomes</strong> e mantido pela{" "}
                <strong className="text-foreground font-medium">Taggo Software House (TGS)</strong>, com foco em
                produção de conteúdo, automação de vendas e comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Missão e visão */}
        <section className="px-4 sm:px-6 md:px-8 pb-section-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <Card className={`${cardClass} card-accent`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-soft bg-muted flex items-center justify-center border border-border shrink-0">
                      <Target className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl headline-tight">Nossa missão</h2>
                  </div>
                  <p className="text-muted-foreground leading-[1.6] text-pretty">
                    Oferecer um ecossistema 360° para infoprodutores: produção de conteúdo, automação de vendas,
                    comunidade ativa e estrutura mantida pela{" "}
                    <strong className="text-foreground font-medium">Taggo Software House (TGS)</strong> para
                    maximizar seus resultados.
                  </p>
                </CardContent>
              </Card>

              <Card className={cardClass}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-soft bg-muted flex items-center justify-center border border-border shrink-0">
                      <Rocket className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl headline-tight">Nossa visão</h2>
                  </div>
                  <p className="text-muted-foreground leading-[1.6] text-pretty">
                    Ser referência em ecossistema integrado para infoprodutores no Brasil, reconhecida pela inovação
                    da Taggo e pelos resultados entregues aos nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* TGS */}
        <section className="bg-muted px-4 sm:px-6 md:px-8 py-section-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="heading-rule max-w-3xl mb-10 md:mb-12 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-balance headline-tight">
                Taggo Software House (TGS)
              </h2>
              <p className="prose-width text-pretty text-lg text-muted-foreground leading-[1.6]">
                A <strong className="text-foreground font-medium">Taggo Software House (TGS)</strong> atua no
                ecossistema para infoprodutores com foco em inovação, eficiência e resultados em produção de conteúdo
                e automação de vendas.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className={cardClass}>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 headline-tight">
                    <Zap className="w-5 h-5 text-primary shrink-0" strokeWidth={1.75} />
                    O que fazemos
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-[1.6] text-pretty">
                    <p>
                      O ecossistema <strong className="text-foreground font-medium">Taggo</strong> integra produção
                      de conteúdo, automação de vendas, comunidade e cronograma em um único lugar. A{" "}
                      <strong className="text-foreground font-medium">Taggo Software House (TGS)</strong> desenvolve
                      e mantém a estrutura para que infoprodutores escalem com qualidade.
                    </p>
                    <p>
                      Com visão de longo prazo, a TGS evolui o produto continuamente, orientada pelas necessidades
                      reais de quem produz e vende infoprodutos no dia a dia.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${cardClass} card-accent`}>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 headline-tight">
                    <Sparkles className="w-5 h-5 text-primary shrink-0" strokeWidth={1.75} />
                    Por que o ecossistema existe
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-[1.6] text-pretty">
                    <p>
                      A <strong className="text-foreground font-medium">Taggo Software House (TGS)</strong> nasceu da
                      análise prática do cenário de infoprodutores e da identificação de lacunas em usabilidade,
                      automação e integração.
                    </p>
                    <p>
                      O ecossistema foi criado para reduzir fricções, modernizar rotinas e trazer mais eficiência
                      para quem produz conteúdo, automatiza vendas e mantém uma comunidade ativa.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="px-4 sm:px-6 md:px-8 py-section-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="heading-rule max-w-3xl mb-10 md:mb-12 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-balance headline-tight">
                Quem está por&nbsp;trás
              </h2>
              <p className="prose-width text-pretty text-lg text-muted-foreground leading-[1.6]">
                Eduardo Gomes e a Taggo Software House (TGS) por trás do ecossistema para infoprodutores.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <Card className={cardClass}>
                <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-border bg-muted mb-6">
                    <Image
                      src="/eduardo-gomes.png"
                      alt="Eduardo Gomes — Fundador e CTO"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">Fundador e CTO</h3>
                  <a
                    href="https://www.linkedin.com/in/eduardo-gomes-tgs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-primary hover:underline transition-colors mb-3"
                  >
                    Eduardo Gomes
                  </a>
                  <p className="text-sm text-muted-foreground leading-[1.6] text-pretty">
                    Lidera a visão técnica e o desenvolvimento do ecossistema. Foco em inovação, automação e
                    soluções que transformam produção de conteúdo e vendas.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${cardClass} card-accent`}>
                <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-border bg-background flex items-center justify-center p-5 mb-6">
                    <Image
                      src="/taggo-logo.png"
                      alt="Taggo Software House (TGS)"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">
                    Taggo Software House (TGS)
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.6] text-pretty">
                    Empresa brasileira de desenvolvimento de software especializada em ecossistema para
                    infoprodutores: produção de conteúdo, automação de vendas, comunidade e estrutura integrada.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section className="bg-muted px-4 sm:px-6 md:px-8 py-section-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
              <p className="label-mono text-primary">Credenciais</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-balance headline-tight">
                <a
                  href="https://www.linkedin.com/in/eduardo-gomes-tgs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Eduardo Gomes
                </a>
              </h2>
              <p className="prose-width text-pretty text-lg text-muted-foreground leading-[1.6] mx-auto">
                Desenvolvedor certificado pelo programa Google Developers e membro ativo da comunidade GDG.
              </p>
            </div>

            <Card className={`${cardClass} border-primary/30 max-w-4xl mx-auto`}>
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-primary shrink-0" strokeWidth={1.75} />
                  <h3 className="font-display text-xl sm:text-2xl font-semibold headline-tight">
                    Desenvolvedor certificado Google
                  </h3>
                </div>
                <p className="text-muted-foreground leading-[1.6] text-pretty mb-6">
                  Eduardo Gomes possui especialização em desenvolvimento com certificações oficiais do Google
                  Developers Program, é membro ativo da comunidade GDG (Google Developers Group), participante do
                  Google I/O e inovador certificado Google Cloud.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["Google Developer", "GDG Member", "Google I/O", "Google Cloud"].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-muted text-foreground text-sm font-medium border border-border"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
                      {badge}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Valores */}
        <section className="px-4 sm:px-6 md:px-8 py-section-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="heading-rule max-w-3xl mb-10 md:mb-12 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-balance headline-tight">
                Nossos valores
              </h2>
              <p className="prose-width text-pretty text-lg text-muted-foreground leading-[1.6]">
                Princípios que guiam o trabalho da Taggo Software House (TGS).
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Inovação",
                  desc: "Busca contínua por melhorias no ecossistema e mais valor ao infoprodutor.",
                },
                {
                  icon: Target,
                  title: "Foco no cliente",
                  desc: "Soluções pensadas para as necessidades reais dos infoprodutores.",
                },
                {
                  icon: Users,
                  title: "Comunidade",
                  desc: "Ecossistema e comunidade ativa para crescimento conjunto.",
                },
                {
                  icon: Heart,
                  title: "Compromisso",
                  desc: "Dedicação à evolução da plataforma e ao sucesso dos clientes.",
                },
              ].map((item) => (
                <Card key={item.title} className={cardClass}>
                  <CardContent className="p-5 sm:p-6 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center border border-border mb-4">
                      <item.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-[1.6] text-pretty">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="bg-muted px-4 sm:px-6 md:px-8 py-section-sm pb-section-lg">
          <div className="container mx-auto max-w-6xl">
            <Card className={`${cardClass} max-w-3xl mx-auto`}>
              <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                <h2 className="font-display text-2xl sm:text-3xl mb-3 text-balance headline-tight">
                  Entre em&nbsp;contato
                </h2>
                <p className="prose-width text-pretty text-muted-foreground leading-[1.6] mx-auto mb-8">
                  A Taggo Software House (TGS) está pronta para ajudar seu ecossistema a crescer.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
                  <div className="flex flex-col items-center gap-3 p-5 rounded-soft bg-background border border-border">
                    <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center border border-border">
                      <Mail className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">Email</p>
                      <a
                        href="mailto:contato@taggo.com.br"
                        className="text-primary hover:underline font-medium text-sm sm:text-base break-all"
                      >
                        contato@taggo.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3 p-5 rounded-soft bg-background border border-border">
                    <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center border border-border">
                      <MapPin className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">
                        Localização
                      </p>
                      <p className="font-medium text-sm leading-[1.5] text-pretty">
                        R. Topázio, 534 — Sala 07
                        <br />
                        Jardim Nomura, Cotia — SP
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/" className="text-sm text-primary hover:underline font-medium">
                  Voltar ao ecossistema
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
