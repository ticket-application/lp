import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Users, Globe, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - em produção viria de uma API ou CMS
const portfolioData = {
  "ecommerce-platform": {
    title: "Plataforma E-commerce Completa",
    subtitle: "Sistema de vendas online com gestão integrada",
    description:
      "Desenvolvemos uma plataforma e-commerce robusta e escalável para uma empresa do varejo, incluindo sistema de gestão de produtos, pedidos, clientes e relatórios avançados.",
    image: "/modern-ecommerce-dashboard.png",
    category: "E-commerce",
    client: "RetailTech Solutions",
    duration: "6 meses",
    team: "5 desenvolvedores",
    status: "Concluído",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS", "Docker"],
    features: [
      "Sistema de autenticação e autorização",
      "Catálogo de produtos com filtros avançados",
      "Carrinho de compras e checkout",
      "Integração com gateways de pagamento",
      "Painel administrativo completo",
      "Sistema de relatórios e analytics",
      "Notificações em tempo real",
      "API RESTful documentada",
    ],
    challenges: [
      {
        title: "Escalabilidade",
        description: "Sistema precisava suportar milhares de usuários simultâneos",
        solution: "Implementamos arquitetura de microserviços com cache Redis e CDN",
      },
      {
        title: "Integração de Pagamentos",
        description: "Múltiplos gateways de pagamento com diferentes APIs",
        solution: "Criamos uma camada de abstração unificada para todos os provedores",
      },
      {
        title: "Performance",
        description: "Carregamento rápido mesmo com catálogo extenso",
        solution: "Otimização de imagens, lazy loading e paginação inteligente",
      },
    ],
    results: [
      "300% aumento nas vendas online",
      "50% redução no tempo de carregamento",
      "95% satisfação dos usuários",
      "Zero downtime desde o lançamento",
    ],
    testimonial: {
      text: "A Codix Tech superou todas as nossas expectativas. O sistema é robusto, intuitivo e nos permitiu escalar nosso negócio de forma impressionante.",
      author: "Maria Silva",
      role: "CEO, RetailTech Solutions",
    },
  },
  "sistema-gestao": {
    title: "Sistema de Gestão Empresarial",
    subtitle: "ERP completo para otimização de processos",
    description:
      "Sistema integrado de gestão empresarial desenvolvido para automatizar processos internos, controle financeiro e gestão de recursos humanos.",
    image: "/business-management-dashboard-with-charts.png",
    category: "ERP/CRM",
    client: "Empresa Confidencial",
    duration: "8 meses",
    team: "7 desenvolvedores",
    status: "Em manutenção",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "Kubernetes"],
    features: [
      "Gestão financeira completa",
      "Controle de estoque em tempo real",
      "Sistema de RH e folha de pagamento",
      "Relatórios gerenciais avançados",
      "Integração com sistemas externos",
      "Workflow de aprovações",
      "Dashboard executivo",
      "Mobile responsivo",
    ],
    challenges: [
      {
        title: "Migração de Dados",
        description: "Migração de sistema legacy com 10 anos de dados",
        solution: "Processo gradual de migração com validação em cada etapa",
      },
      {
        title: "Integração Complexa",
        description: "Integração com 15 sistemas diferentes da empresa",
        solution: "Desenvolvimento de APIs padronizadas e middleware de integração",
      },
    ],
    results: [
      "70% redução no tempo de processos",
      "90% automação de tarefas manuais",
      "100% precisão nos relatórios",
      "ROI de 250% no primeiro ano",
    ],
    testimonial: {
      text: "O sistema revolucionou nossa operação. A qualidade do código e a atenção aos detalhes da Codix Tech são excepcionais.",
      author: "João Santos",
      role: "CTO",
    },
  },
  "app-delivery": {
    title: "Aplicativo de Delivery",
    subtitle: "Plataforma completa para delivery de alimentos",
    description:
      "Aplicativo mobile e web para delivery de alimentos com sistema de gestão para restaurantes, entregadores e clientes.",
    image: "/food-delivery-app-interface-mobile.png",
    category: "Mobile App",
    client: "FoodTech Startup",
    duration: "4 meses",
    team: "6 desenvolvedores",
    status: "Ativo",
    technologies: ["React Native", "Next.js", "Firebase", "Google Maps", "Stripe", "Push Notifications"],
    features: [
      "App mobile para clientes (iOS/Android)",
      "App para entregadores",
      "Painel web para restaurantes",
      "Sistema de rastreamento em tempo real",
      "Integração com mapas e GPS",
      "Pagamentos online seguros",
      "Sistema de avaliações",
      "Notificações push",
    ],
    challenges: [
      {
        title: "Geolocalização Precisa",
        description: "Rastreamento em tempo real de entregadores",
        solution: "Integração avançada com Google Maps API e otimização de rotas",
      },
      {
        title: "Performance Mobile",
        description: "App responsivo mesmo com conexão lenta",
        solution: "Otimização de imagens, cache offline e sincronização inteligente",
      },
    ],
    results: [
      "10.000+ downloads no primeiro mês",
      "4.8 estrelas na App Store",
      "40% aumento nas vendas dos parceiros",
      "Tempo médio de entrega: 25 minutos",
    ],
    testimonial: {
      text: "O app ficou incrível! A experiência do usuário é fluida e o sistema de gestão nos deu total controle sobre as operações.",
      author: "Ana Costa",
      role: "Fundadora, FoodTech",
    },
  },
}

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const project = portfolioData[params.slug as keyof typeof portfolioData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Link href="/#portfolio">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              Codix Tech
            </Link>
            <Link href="/#portfolio">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Portfólio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">{project.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span>{project.team}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{project.status}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-primary" />
                <span>{project.client}</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border bg-card">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Funcionalidades Principais</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Desafios e Soluções</h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-2">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            <strong>Desafio:</strong> {challenge.description}
                          </p>
                          <p className="text-sm">
                            <strong className="text-green-600">Solução:</strong> {challenge.solution}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Resultados Alcançados</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <Card key={index} className="border-green-200 bg-green-50/50">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-green-600" />
                            <span className="font-medium text-green-800">{result}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-8">
                    <blockquote className="text-lg italic mb-4 text-balance">&quot;{project.testimonial.text}&quot;</blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{project.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Technologies */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Tecnologias Utilizadas</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Interessado em um projeto similar?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Entre em contato conosco para discutir seu projeto
                    </p>
                    <Link href="/#contato">
                      <Button className="w-full">Solicitar Orçamento</Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Navigation */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Outros Projetos</h3>
                    <div className="space-y-2">
                      {Object.entries(portfolioData)
                        .filter(([slug]) => slug !== params.slug)
                        .slice(0, 2)
                        .map(([slug, proj]) => (
                          <Link key={slug} href={`/portfolio/${slug}`}>
                            <div className="p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                              <div className="font-medium text-sm">{proj.title}</div>
                              <div className="text-xs text-muted-foreground">{proj.category}</div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
