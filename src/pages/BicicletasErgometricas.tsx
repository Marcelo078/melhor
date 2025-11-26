import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, TrendingUp, Shield, Award } from "lucide-react";

const BicicletasErgometricas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Melhores Bicicletas Ergométricas 2025 | Análise Completa e Melhores Preços";
  }, []);

  const products = [
    {
      title: "Bicicleta Ergométrica Dobrável Residencial 8 Níveis",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
      price: "R$ 899,90",
      rating: 4.7,
      reviews: 1234,
      affiliateLink: "https://mercadolivre.com/sec/2nKZmda",
      tag: "MAIS VENDIDA"
    },
    {
      title: "Bicicleta Ergométrica Vertical Profissional 16 Níveis",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
      price: "R$ 1.299,00",
      rating: 4.8,
      reviews: 892,
      affiliateLink: "https://mercadolivre.com/sec/2nKZmda",
      tag: "PROFISSIONAL"
    },
    {
      title: "Bicicleta Ergométrica Horizontal Conforto Plus",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
      price: "R$ 1.599,00",
      rating: 4.6,
      reviews: 567,
      affiliateLink: "https://mercadolivre.com/sec/2nKZmda",
      tag: "CONFORTO"
    },
    {
      title: "Bicicleta Ergométrica Spinning Premium Com Monitor",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
      price: "R$ 1.899,00",
      rating: 4.9,
      reviews: 423,
      affiliateLink: "https://mercadolivre.com/sec/2nKZmda",
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
                Melhores Bicicletas Ergométricas 2025: Guia Completo
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Análise detalhada das <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> de bicicletas ergométricas para sua academia em casa
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">Avaliações Reais</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Marcas Confiáveis</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-info" />
                  <span className="font-medium">Melhor Custo-Benefício</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">🏆 Melhores Ofertas em Bicicletas Ergométricas</h2>
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
              <h2>Por Que Escolher uma Bicicleta Ergométrica?</h2>
              <p>
                As <strong>bicicletas ergométricas</strong> são a escolha ideal para quem busca praticar exercícios cardiovasculares no conforto de casa. Com as <strong>melhores marcas</strong> do mercado, você encontra equipamentos duráveis, eficientes e com <strong>melhores preços</strong> que cabem no seu bolso.
              </p>

              <h2>🎯 Como Escolher a Melhor Bicicleta Ergométrica</h2>
              <h3>1. Tipo de Bicicleta</h3>
              <p>
                <strong>Bicicleta Ergométrica Vertical</strong>: Simula a posição de uma bike tradicional, ideal para treinos intensos e fortalecimento muscular. As <strong>melhores ofertas</strong> começam a partir de R$ 899.
              </p>
              <p>
                <strong>Bicicleta Ergométrica Horizontal</strong>: Oferece mais conforto com apoio para as costas, perfeita para reabilitação e terceira idade. <strong>Melhores marcas</strong> como Movement e Kikos garantem qualidade superior.
              </p>
              <p>
                <strong>Bicicleta de Spinning</strong>: Para treinos de alta intensidade, com resistência ajustável e design profissional. Encontre as <strong>melhores ofertas</strong> a partir de R$ 1.499.
              </p>

              <h3>2. Níveis de Resistência</h3>
              <p>
                Busque modelos com no mínimo 8 níveis de resistência magnética para progressão adequada dos treinos. As <strong>melhores marcas</strong> oferecem até 16 níveis diferentes.
              </p>

              <h3>3. Peso Suportado e Estrutura</h3>
              <p>
                Verifique se a bicicleta suporta seu peso com folga (ideal: +20kg acima do seu peso). Estruturas em aço reforçado garantem estabilidade e durabilidade.
              </p>

              <h3>4. Monitor e Recursos</h3>
              <p>
                Monitores LCD que mostram tempo, distância, velocidade, calorias e frequência cardíaca são essenciais. Algumas das <strong>melhores ofertas</strong> incluem suporte para tablet e conectividade Bluetooth.
              </p>

              <h2>🏅 Melhores Marcas de Bicicletas Ergométricas</h2>
              
              <h3>Movement - Referência Nacional</h3>
              <p>
                A <strong>Movement</strong> lidera o mercado brasileiro com produtos robustos e excelente custo-benefício. Suas bicicletas ergométricas possuem garantia estendida e peças de reposição facilmente encontradas.
              </p>

              <h3>Kikos - Qualidade Profissional</h3>
              <p>
                A <strong>Kikos</strong> oferece equipamentos de nível profissional para uso residencial. Suas bicicletas são conhecidas pela durabilidade excepcional e sistemas de resistência suaves.
              </p>

              <h3>Athletic - Melhor Custo-Benefício</h3>
              <p>
                Para quem busca economia sem abrir mão da qualidade, a <strong>Athletic</strong> apresenta modelos dobráveis e compactos, ideais para apartamentos.
              </p>

              <h2>💰 Tabela Comparativa: Melhores Preços</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Modelo</th>
                      <th className="border border-border p-3 text-left">Tipo</th>
                      <th className="border border-border p-3 text-left">Níveis</th>
                      <th className="border border-border p-3 text-left">Preço</th>
                      <th className="border border-border p-3 text-left">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Movement V3</td>
                      <td className="border border-border p-3">Vertical</td>
                      <td className="border border-border p-3">8 níveis</td>
                      <td className="border border-border p-3"><strong>R$ 899,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Kikos KR9.1</td>
                      <td className="border border-border p-3">Vertical</td>
                      <td className="border border-border p-3">16 níveis</td>
                      <td className="border border-border p-3"><strong>R$ 1.299,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.8/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Movement H300</td>
                      <td className="border border-border p-3">Horizontal</td>
                      <td className="border border-border p-3">12 níveis</td>
                      <td className="border border-border p-3"><strong>R$ 1.599,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.6/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Athletic Spinning</td>
                      <td className="border border-border p-3">Spinning</td>
                      <td className="border border-border p-3">Contínuo</td>
                      <td className="border border-border p-3"><strong>R$ 1.899,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.9/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>❓ Perguntas Frequentes</h2>
              
              <h3>Qual a melhor bicicleta ergométrica para iniciantes?</h3>
              <p>
                Para iniciantes, recomendamos a <strong>Movement V3</strong> com 8 níveis de resistência. É uma das <strong>melhores ofertas</strong> do mercado, com excelente custo-benefício e estrutura robusta para treinos progressivos.
              </p>

              <h3>Bicicleta ergométrica emagrece?</h3>
              <p>
                Sim! Treinos regulares de 30-45 minutos podem queimar entre 300-500 calorias. Combinado com alimentação balanceada, a bicicleta ergométrica é excelente para emagrecimento e condicionamento cardiovascular.
              </p>

              <h3>Qual a diferença entre vertical e horizontal?</h3>
              <p>
                A <strong>vertical</strong> simula uma bike tradicional, exigindo mais dos músculos e ideal para treinos intensos. A <strong>horizontal</strong> oferece apoio lombar, sendo mais confortável para treinos longos e recomendada para pessoas com problemas nas costas.
              </p>

              <h3>Precisa de montagem profissional?</h3>
              <p>
                A maioria dos modelos vem com manual ilustrado e ferramentas incluídas. A montagem é simples e pode ser feita em 30-60 minutos. As <strong>melhores marcas</strong> oferecem vídeos tutoriais no YouTube.
              </p>

              <h2>🚀 Dicas Para Treino Eficiente</h2>
              <ul>
                <li>Comece com 15-20 minutos diários e aumente gradualmente</li>
                <li>Mantenha postura correta: costas retas e joelhos alinhados</li>
                <li>Varie a intensidade: alterne entre ritmo moderado e intenso</li>
                <li>Hidrate-se antes, durante e após o treino</li>
                <li>Use roupas confortáveis e tênis adequado</li>
              </ul>

              <h2>✅ Por Que Comprar no Mercado Livre?</h2>
              <p>
                O <strong>Mercado Livre</strong> oferece as <strong>melhores ofertas</strong> em bicicletas ergométricas com:
              </p>
              <ul>
                <li>Frete grátis em milhares de produtos</li>
                <li>Parcelamento em até 12x sem juros</li>
                <li>Garantia do vendedor + Garantia Mercado Livre</li>
                <li>Avaliações reais de milhares de compradores</li>
                <li>Devolução grátis em 30 dias</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-foreground">Encontre Sua Bicicleta Ergométrica Ideal</h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Compare <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> de bicicletas ergométricas
            </p>
            <a 
              href="https://mercadolivre.com/sec/2nKZmda"
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

export default BicicletasErgometricas;