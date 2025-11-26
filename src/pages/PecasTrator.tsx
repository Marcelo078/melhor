import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, TrendingUp, Shield, Award } from "lucide-react";

const PecasTrator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Peças de Trator 2025 | Originais e Alternativas - Melhores Marcas e Preços";
  }, []);

  const products = [
    {
      title: "Filtro de Óleo Motor Trator - Melhores Marcas",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
      price: "R$ 89,90",
      rating: 4.7,
      reviews: 456,
      affiliateLink: "https://mercadolivre.com/sec/2d6sMcw",
      tag: "ORIGINAL"
    },
    {
      title: "Correia Alternador Trator - Melhores Preços",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
      price: "R$ 129,90",
      rating: 4.6,
      reviews: 234,
      affiliateLink: "https://mercadolivre.com/sec/2d6sMcw",
      tag: "DURÁVEL"
    },
    {
      title: "Kit Vedação Sistema Hidráulico - Melhores Ofertas",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
      price: "R$ 249,90",
      rating: 4.8,
      reviews: 178,
      affiliateLink: "https://mercadolivre.com/sec/2d6sMcw",
      tag: "KIT COMPLETO"
    },
    {
      title: "Rolamento Embreagem Trator - Certificado",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
      price: "R$ 199,90",
      rating: 4.9,
      reviews: 312,
      affiliateLink: "https://mercadolivre.com/sec/2d6sMcw",
      tag: "PREMIUM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6 text-foreground">
                Peças de Trator 2025: Originais e Alternativas Certificadas
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Guia completo das <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em peças para tratores: filtros, correias, sistemas hidráulicos e mais
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">Peças Certificadas</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Garantia de Procedência</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-info" />
                  <span className="font-medium">Entrega Rápida</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">🏆 Melhores Ofertas em Peças de Trator</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Peças Essenciais Para Manutenção de Tratores</h2>
              <p>
                A <strong>manutenção preventiva</strong> de tratores agrícolas exige peças de qualidade certificada. Com as <strong>melhores marcas</strong> do mercado, você garante durabilidade, desempenho e segurança operacional aos <strong>melhores preços</strong>.
              </p>

              <h2>🔧 Principais Categorias de Peças</h2>
              
              <h3>1. Filtros - Proteção do Motor e Sistemas</h3>
              <p>
                Os <strong>filtros</strong> são componentes críticos para longevidade do trator. Devem ser trocados conforme manual do fabricante. As <strong>melhores marcas</strong> incluem Tecfil, Mann Filter, Fram e Bosch.
              </p>
              <p>
                <strong>Melhores Ofertas Filtros</strong>:
              </p>
              <ul>
                <li><strong>Filtro de Óleo</strong>: Protege o motor contra impurezas. A partir de R$ 89,90</li>
                <li><strong>Filtro de Ar</strong>: Essencial para motores a diesel. A partir de R$ 129,90</li>
                <li><strong>Filtro de Combustível</strong>: Evita contaminação do sistema. A partir de R$ 79,90</li>
                <li><strong>Filtro Hidráulico</strong>: Mantém sistema hidráulico limpo. A partir de R$ 149,90</li>
              </ul>

              <h3>2. Correias e Mangueiras - Transmissão de Força</h3>
              <p>
                <strong>Correias</strong> em V e dentadas transmitem força do motor para alternador, bomba d'água e ventilador. Mangueiras conduzem fluidos sob pressão. Inspeção visual periódica previne quebras inesperadas.
              </p>
              <p>
                <strong>Melhores Marcas Correias</strong>: Gates, Continental, Dayco e Goodyear. Preços a partir de R$ 129,90.
              </p>

              <h3>3. Sistema Hidráulico - Vedações e Componentes</h3>
              <p>
                O <strong>sistema hidráulico</strong> é o coração dos implementos agrícolas. Retentores, o-rings, cilindros e bombas hidráulicas exigem peças de alta qualidade para suportar pressões extremas.
              </p>
              <p>
                <strong>Melhores Ofertas Hidráulico</strong>: kits de vedação completos a partir de R$ 249,90.
              </p>

              <h3>4. Embreagem e Transmissão - Durabilidade</h3>
              <p>
                <strong>Discos de embreagem</strong>, platôs, rolamentos e sincronizadores são peças de desgaste. Qualidade superior evita trocas frequentes e paradas não programadas.
              </p>

              <h2>🏅 Melhores Marcas de Peças Agrícolas</h2>
              
              <h3>Tecfil - Líder em Filtros</h3>
              <p>
                A <strong>Tecfil</strong> é referência nacional em filtros automotivos e agrícolas. Produtos com certificação ISO 9001 e compatibilidade garantida com todas as marcas de tratores.
              </p>

              <h3>Gates - Correias de Alta Performance</h3>
              <p>
                A <strong>Gates</strong> produz correias com tecnologia de ponta, resistentes a altas temperaturas e desgaste acelerado. Ideais para uso intensivo agrícola.
              </p>

              <h3>Parker - Sistemas Hidráulicos Profissionais</h3>
              <p>
                A <strong>Parker Hannifin</strong> oferece componentes hidráulicos de nível industrial. Conexões, mangueiras e válvulas com padrão internacional de qualidade.
              </p>

              <h3>SKF e NTN - Rolamentos de Precisão</h3>
              <p>
                <strong>SKF</strong> e <strong>NTN</strong> são líderes mundiais em rolamentos. Produtos com tratamento térmico especial e vedação eficiente contra contaminações.
              </p>

              <h2>💰 Tabela Comparativa: Melhores Preços</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Peça</th>
                      <th className="border border-border p-3 text-left">Marca</th>
                      <th className="border border-border p-3 text-left">Aplicação</th>
                      <th className="border border-border p-3 text-left">Preço</th>
                      <th className="border border-border p-3 text-left">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Filtro Óleo</td>
                      <td className="border border-border p-3">Tecfil</td>
                      <td className="border border-border p-3">Motor Diesel</td>
                      <td className="border border-border p-3"><strong>R$ 89,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Correia Poly-V</td>
                      <td className="border border-border p-3">Gates</td>
                      <td className="border border-border p-3">Alternador</td>
                      <td className="border border-border p-3"><strong>R$ 129,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.6/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Kit Vedação</td>
                      <td className="border border-border p-3">Parker</td>
                      <td className="border border-border p-3">Cilindro Hidráulico</td>
                      <td className="border border-border p-3"><strong>R$ 249,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.8/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Rolamento</td>
                      <td className="border border-border p-3">SKF</td>
                      <td className="border border-border p-3">Embreagem</td>
                      <td className="border border-border p-3"><strong>R$ 199,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.9/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>❓ Perguntas Frequentes</h2>
              
              <h3>Peça original ou alternativa: qual escolher?</h3>
              <p>
                <strong>Peças originais</strong> garantem encaixe perfeito e compatibilidade total. <strong>Peças alternativas</strong> de marcas certificadas (Tecfil, Gates, Mann) oferecem excelente custo-benefício com qualidade equivalente. Evite peças sem procedência.
              </p>

              <h3>Com que frequência devo trocar os filtros?</h3>
              <p>
                Siga o <strong>manual do fabricante</strong>. Geralmente: <strong>Filtro de óleo</strong> a cada 250 horas, <strong>Filtro de ar</strong> a cada 500 horas (ou antes em ambientes muito empoeirados), <strong>Filtro de combustível</strong> a cada 500-1000 horas.
              </p>

              <h3>Como identificar peça compatível com meu trator?</h3>
              <p>
                Verifique: <strong>marca e modelo</strong> do trator, <strong>número de série</strong>, <strong>código da peça original</strong>. No Mercado Livre, vendedores especializados possuem catálogos completos e auxílio técnico.
              </p>

              <h3>Qual a garantia das peças?</h3>
              <p>
                As <strong>melhores marcas</strong> oferecem garantia de 90 dias a 1 ano contra defeitos de fabricação. Guarde nota fiscal e instalação por profissional qualificado mantém garantia válida.
              </p>

              <h2>🔍 Marcas de Tratores Atendidas</h2>
              <ul>
                <li><strong>John Deere</strong>: Líder global, peças de alta tecnologia</li>
                <li><strong>Massey Ferguson</strong>: Tradição e robustez</li>
                <li><strong>New Holland</strong>: Inovação e eficiência</li>
                <li><strong>Case IH</strong>: Performance em campo</li>
                <li><strong>Valtra</strong>: Especialidade em transmissão</li>
                <li><strong>LS Tractor</strong>: Custo-benefício asiático</li>
                <li><strong>Agrale</strong>: Nacional para pequenas propriedades</li>
              </ul>

              <h2>🛠️ Manutenção Preventiva: Checklist</h2>
              <h3>A cada 50 horas ou semanal:</h3>
              <ul>
                <li>Verificar nível de óleo motor e hidráulico</li>
                <li>Inspecionar correias e mangueiras visualmente</li>
                <li>Limpar pré-filtro de ar</li>
                <li>Checar pressão dos pneus</li>
              </ul>

              <h3>A cada 250 horas ou mensal:</h3>
              <ul>
                <li>Trocar óleo motor e filtro de óleo</li>
                <li>Trocar filtro de combustível</li>
                <li>Lubrificar pontos de graxa</li>
                <li>Verificar aperto de parafusos</li>
              </ul>

              <h3>A cada 500 horas ou semestral:</h3>
              <ul>
                <li>Trocar filtro de ar</li>
                <li>Revisar sistema hidráulico completo</li>
                <li>Inspecionar embreagem e freios</li>
                <li>Verificar alinhamento e balanceamento</li>
              </ul>

              <h2>✅ Por Que Comprar no Mercado Livre?</h2>
              <p>
                O <strong>Mercado Livre</strong> oferece as <strong>melhores ofertas</strong> em peças agrícolas com:
              </p>
              <ul>
                <li>Vendedores especializados em peças agrícolas</li>
                <li>Catálogos completos por marca e modelo</li>
                <li>Frete para todo Brasil com rastreamento</li>
                <li>Parcelamento facilitado para produtores rurais</li>
                <li>Avaliações reais de outros agricultores</li>
                <li>Garantia Mercado Livre em todas compras</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-foreground">Encontre as Peças Ideais Para Seu Trator</h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Compare <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em peças de trator
            </p>
            <a 
              href="https://mercadolivre.com/sec/2d6sMcw"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-warning text-warning-foreground hover:bg-warning/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-elegant hover:shadow-glow"
            >
              <TrendingUp className="h-6 w-6" />
              Ver Todas as Ofertas no Mercado Livre
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PecasTrator;