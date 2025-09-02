import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Code, Rocket, Settings, Users, CheckCircle, Star, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Codix Tech</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Serviços
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Começar Projeto</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Software House Especializada
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Transformamos suas <span className="text-secondary">ideias</span> em soluções digitais completas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Da prototipagem ao deploy, oferecemos desenvolvimento completo de software, manutenção de projetos
              existentes e criação de novos módulos para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para todas as etapas do desenvolvimento de software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Desenvolvimento Completo</CardTitle>
                <CardDescription>
                  Da prototipagem ao deploy, criamos soluções sob medida para seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Prototipagem e UX/UI Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Desenvolvimento Frontend e Backend
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Deploy e Configuração de Servidores
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Manutenção de Projetos</CardTitle>
                <CardDescription>Mantemos seus sistemas funcionando perfeitamente com suporte contínuo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Correção de bugs e melhorias
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Atualizações de segurança
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Monitoramento 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Novos Módulos</CardTitle>
                <CardDescription>Expandimos suas aplicações existentes com novas funcionalidades</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Integração com APIs externas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Desenvolvimento de dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Automação de processos
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Sobre a Codix Tech</h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
              {/* Problem Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-background border-2 border-destructive/30 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="h-4 w-4 bg-destructive rounded-full mr-4 animate-pulse"></div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-destructive">O Problema do Mercado</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      O mercado atual vem sacrificando <span className="font-semibold text-destructive">qualidade</span>{" "}
                      em favor de entregas rápidas.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      Essa abordagem tem trazido consequências devastadoras para projetos de longo prazo:
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {[
                      "Código difícil de manter",
                      "Bugs constantes e retrabalho",
                      "Custos elevados de manutenção",
                      "Sistemas que se tornam obsoletos rapidamente",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-destructive/5 rounded-lg border border-destructive/20"
                      >
                        <div className="h-2 w-2 bg-destructive rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-background border-2 border-secondary/30 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-secondary mr-4" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary">Nossa Solução</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      A <span className="font-semibold text-secondary">Codix Tech</span> surgiu para retomar não apenas
                      as boas práticas de desenvolvimento.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      Focamos na{" "}
                      <span className="font-semibold text-secondary">qualidade de projetos a longo prazo</span> com
                      arquitetura sólida e fácil manutenção.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {[
                      "Código limpo e bem documentado",
                      "Arquitetura escalável e sustentável",
                      "Testes automatizados e CI/CD",
                      "Manutenção simplificada e econômica",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-secondary/5 rounded-lg border border-secondary/20"
                      >
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-secondary/5 to-background rounded-3xl p-10 lg:p-16 text-center border border-secondary/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-secondary/50 to-transparent"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-8">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Nossa Filosofia</h3>
                  <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                      Acreditamos que{" "}
                      <span className="font-bold text-secondary">qualidade não é um luxo, é uma necessidade</span>.
                    </p>
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                      Investir em desenvolvimento de qualidade desde o início economiza tempo, dinheiro e dores de
                      cabeça no futuro. Nossos projetos são construídos para durar e evoluir junto com seu negócio.
                    </p>
                  </div>
                  <div className="mt-10">
                    <Button
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Conheça Nossa Metodologia
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-center mb-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Nosso Processo de Desenvolvimento
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Seguimos uma metodologia estruturada que garante qualidade e transparência em cada etapa
                </p>
              </div>

              {/* Timeline */}
              <div className="relative max-w-5xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block"></div>

                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-background">
                      1
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                          Levantamento de Requisitos
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Entendemos profundamente suas necessidades e objetivos de negócio através de reuniões
                          detalhadas e análise do mercado.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-background">
                      2
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                          Prototipação - Foco em Usabilidade
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Criamos protótipos interativos focados na experiência do usuário, garantindo interfaces
                          intuitivas e funcionais.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-background">
                      3
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                          Feedback do Protótipo para Validação
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Validamos o protótipo com você e seus usuários finais, coletando feedback valioso antes de
                          prosseguir para o desenvolvimento.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-background">
                      4
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                          Arquitetura e Definição de Tecnologias
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Definimos a arquitetura ideal e selecionamos as melhores tecnologias para garantir
                          escalabilidade e performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-background">
                      5
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">Definição de Tarefas</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Priorizamos os módulos principais e organizamos o desenvolvimento em sprints, garantindo
                          entregas incrementais de valor.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-background">
                      6
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">Definição da Equipe</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Montamos a equipe ideal com os especialistas necessários: desenvolvedores, designers e
                          analistas dedicados ao seu projeto.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 7 */}
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-background">
                      7
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                        <h4 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">Entregas Contínuas</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Realizamos entregas frequentes e demonstrações regulares, mantendo você sempre informado sobre
                          o progresso do projeto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="bg-secondary/5 rounded-xl p-6 lg:p-8 max-w-4xl mx-auto">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <strong>Transparência total:</strong> Você acompanha cada etapa do desenvolvimento e recebe
                    relatórios regulares sobre o progresso. Nossa metodologia garante que seu projeto seja entregue com
                    a mais alta qualidade, no prazo acordado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Nosso Portfólio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos com excelência e qualidade para nossos clientes
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center">
                <div className="text-6xl font-bold text-blue-500/30">E</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    E-commerce
                  </Badge>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Plataforma E-commerce</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Sistema completo de vendas online com painel administrativo, gestão de estoque e integração com
                  gateways de pagamento.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">6 meses de projeto</span>
                  <a href="/portfolio/ecommerce-platform">
                    <Button size="sm" variant="ghost" className="text-secondary hover:text-secondary/80">
                      Ver detalhes <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-green-600/30 flex items-center justify-center">
                <div className="text-6xl font-bold text-green-500/30">S</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    SaaS
                  </Badge>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sistema de Gestão</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Plataforma SaaS para gestão empresarial com módulos de CRM, financeiro e relatórios avançados.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prisma
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">8 meses de projeto</span>
                  <a href="/portfolio/sistema-gestao">
                    <Button size="sm" variant="ghost" className="text-secondary hover:text-secondary/80">
                      Ver detalhes <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-purple-600/30 flex items-center justify-center">
                <div className="text-6xl font-bold text-purple-500/30">A</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Mobile App
                  </Badge>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">App de Delivery</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Aplicativo mobile completo para delivery com rastreamento em tempo real e sistema de pagamentos.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Firebase
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Maps API
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">4 meses de projeto</span>
                  <a href="/portfolio/app-delivery">
                    <Button size="sm" variant="ghost" className="text-secondary hover:text-secondary/80">
                      Ver detalhes <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Stats */}
          <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-sm border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground font-medium">Projetos Concluídos</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">98%</div>
                <div className="text-muted-foreground font-medium">Taxa de Satisfação</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-muted-foreground font-medium">Tecnologias Dominadas</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">24h</div>
                <div className="text-muted-foreground font-medium">Tempo Médio de Resposta</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/portfolio/ecommerce-platform">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Ver Portfólio Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">30+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "A Codix Tech transformou nossa ideia em uma plataforma incrível. O suporte é excepcional e a
                  qualidade do código é impecável."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Maria Silva</div>
                    <div className="text-sm text-muted-foreground">CEO, TechStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Profissionais extremamente competentes. Entregaram nosso projeto no prazo e com qualidade superior ao
                  esperado."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">João Santos</div>
                    <div className="text-sm text-muted-foreground">CTO, InnovaCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "A manutenção do nosso sistema nunca foi tão tranquila. Equipe sempre disponível e soluções rápidas."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Ana Costa</div>
                    <div className="text-sm text-muted-foreground">Diretora, DigitalPro</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Entre em Contato</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pronto para transformar sua ideia em realidade? Nossa equipe está aqui para ajudar você a criar soluções
                digitais excepcionais.
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Solicite um Orçamento</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <Input id="name" placeholder="Seu nome completo" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input id="phone" placeholder="(11) 99999-9999" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <Input id="company" placeholder="Nome da sua empresa" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Serviço *
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="desenvolvimento-completo">Desenvolvimento Completo</option>
                      <option value="manutencao">Manutenção de Projeto</option>
                      <option value="novos-modulos">Novos Módulos</option>
                      <option value="consultoria">Consultoria Técnica</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Descrição do Projeto *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos sobre seu projeto, objetivos e necessidades específicas..."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Orçamento Estimado
                    </label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Selecione uma faixa</option>
                      <option value="ate-10k">Até R$ 10.000</option>
                      <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                      <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                      <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                      <option value="acima-100k">Acima de R$ 100.000</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    Enviar Solicitação
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                        <p className="text-muted-foreground">contato@codixtech.com</p>
                        <p className="text-muted-foreground">comercial@codixtech.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                        <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                        <p className="text-muted-foreground">+55 (11) 8888-8888</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Localização</h4>
                        <p className="text-muted-foreground">São Paulo, SP</p>
                        <p className="text-muted-foreground">Atendimento em todo Brasil</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                        <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-muted-foreground">Suporte 24/7 para clientes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/5 rounded-2xl p-8 border border-secondary/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">Resposta Rápida</h3>
                  <p className="text-muted-foreground mb-4">
                    Respondemos todas as solicitações em até <strong>2 horas úteis</strong>. Para projetos urgentes,
                    entre em contato diretamente pelo WhatsApp.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    WhatsApp: (11) 9999-9999
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/5 rounded-2xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Pronto para começar seu projeto?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar suas ideias em realidade digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Casos de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Codix Tech</span>
              </div>
              <p className="text-muted-foreground">Transformando ideias em soluções digitais inovadoras desde 2019.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Desenvolvimento Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Aplicativos Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Manutenção
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Consultoria
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contato</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@codixtech.com</li>
                <li>+55 (11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Codix Tech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
