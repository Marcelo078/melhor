import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, TrendingUp, Shield, Award } from "lucide-react";

const Suplementos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Melhores Suplementos 2025 | Whey, Creatina, BCAA - Melhores Marcas e Preços";
  }, []);

  const products = [
    {
      title: "Whey Protein Concentrado 900g - Melhores Marcas",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&q=80",
      price: "R$ 79,90",
      rating: 4.8,
      reviews: 3421,
      affiliateLink: "https://mercadolivre.com/sec/1WqdDGr",
      tag: "MAIS VENDIDO"
    },
    {
      title: "Creatina Monohidratada 300g - Melhores Preços",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&q=80",
      price: "R$ 49,90",
      rating: 4.9,
      reviews: 2134,
      affiliateLink: "https://mercadolivre.com/sec/1WqdDGr",
      tag: "TOP QUALIDADE"
    },
    {
      title: "BCAA 2:1:1 120 Cápsulas - Melhores Ofertas",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&q=80",
      price: "R$ 39,90",
      rating: 4.7,
      reviews: 1567,
      affiliateLink: "https://mercadolivre.com/sec/1WqdDGr",
      tag: "CUSTO-BENEFÍCIO"
    },
    {
      title: "Kit Suplementos Completo - Melhores Marcas",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&q=80",
      price: "R$ 149,90",
      rating: 4.8,
      reviews: 892,
      affiliateLink: "https://mercadolivre.com/sec/1WqdDGr",
      tag: "KIT COMPLETO"
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
                Melhores Suplementos 2025: Guia Completo de Compra
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Análise completa das <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> de suplementos: Whey Protein, Creatina, BCAA e mais
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">Procedência Garantida</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Marcas Certificadas</span>
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
            <h2 className="mb-8 text-center">🏆 Melhores Ofertas em Suplementos</h2>
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
              <h2>Por Que Usar Suplementos Alimentares?</h2>
              <p>
                Os <strong>suplementos alimentares</strong> são essenciais para complementar a dieta de praticantes de atividades físicas. Com as <strong>melhores marcas</strong> do mercado, você garante qualidade, procedência certificada e <strong>melhores preços</strong> para atingir seus objetivos.
              </p>

              <h2>🎯 Principais Tipos de Suplementos</h2>
              
              <h3>1. Whey Protein - Proteína de Alta Qualidade</h3>
              <p>
                O <strong>Whey Protein</strong> é o suplemento mais popular para ganho de massa muscular. As <strong>melhores marcas</strong> como Integral Médica, Max Titanium e Growth Supplements oferecem produtos com alta concentração proteica e excelente absorção.
              </p>
              <p>
                <strong>Melhores Ofertas Whey Protein</strong>: a partir de R$ 79,90 para potes de 900g com sabores variados (chocolate, baunilha, morango, cookies).
              </p>

              <h3>2. Creatina - Força e Desempenho</h3>
              <p>
                A <strong>Creatina Monohidratada</strong> é comprovadamente eficaz para aumentar força, potência e volume muscular. As <strong>melhores marcas</strong> garantem pureza de 99,9% e micronização para melhor absorção.
              </p>
              <p>
                <strong>Melhores Preços Creatina</strong>: a partir de R$ 49,90 para 300g (suficiente para 2 meses de uso).
              </p>

              <h3>3. BCAA - Recuperação Muscular</h3>
              <p>
                Os <strong>aminoácidos BCAA</strong> (Leucina, Isoleucina e Valina) aceleram a recuperação pós-treino e previnem catabolismo. A proporção 2:1:1 é a mais estudada cientificamente.
              </p>
              <p>
                <strong>Melhores Ofertas BCAA</strong>: a partir de R$ 39,90 para 120 cápsulas ou versões em pó com sabor.
              </p>

              <h3>4. Multivitamínicos - Saúde Completa</h3>
              <p>
                Os <strong>multivitamínicos</strong> suprem deficiências nutricionais comuns em dietas restritivas. Essenciais para imunidade, energia e metabolismo adequado.
              </p>

              <h2>🏅 Melhores Marcas de Suplementos</h2>
              
              <h3>Integral Médica - Referência Nacional</h3>
              <p>
                Líder do mercado brasileiro, a <strong>Integral Médica</strong> oferece linha completa de suplementos com certificação ANVISA e laboratórios próprios. Seus produtos são constantemente testados e aprovados por atletas profissionais.
              </p>

              <h3>Max Titanium - Inovação e Qualidade</h3>
              <p>
                A <strong>Max Titanium</strong> se destaca pela inovação em sabores e fórmulas avançadas. Suas versões isoladas de whey possuem baixíssimo teor de lactose e carboidratos.
              </p>

              <h3>Growth Supplements - Melhor Custo-Benefício</h3>
              <p>
                Para quem busca economia sem comprometer qualidade, a <strong>Growth Supplements</strong> oferece produtos com excelente composição a preços acessíveis. Ideal para iniciantes.
              </p>

              <h2>💰 Tabela Comparativa: Melhores Preços</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Produto</th>
                      <th className="border border-border p-3 text-left">Marca</th>
                      <th className="border border-border p-3 text-left">Quantidade</th>
                      <th className="border border-border p-3 text-left">Preço</th>
                      <th className="border border-border p-3 text-left">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Whey Concentrado</td>
                      <td className="border border-border p-3">Integral Médica</td>
                      <td className="border border-border p-3">900g</td>
                      <td className="border border-border p-3"><strong>R$ 79,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.8/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Creatina</td>
                      <td className="border border-border p-3">Max Titanium</td>
                      <td className="border border-border p-3">300g</td>
                      <td className="border border-border p-3"><strong>R$ 49,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.9/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">BCAA 2:1:1</td>
                      <td className="border border-border p-3">Growth</td>
                      <td className="border border-border p-3">120 cáps</td>
                      <td className="border border-border p-3"><strong>R$ 39,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Multivitamínico</td>
                      <td className="border border-border p-3">Integral Médica</td>
                      <td className="border border-border p-3">60 cáps</td>
                      <td className="border border-border p-3"><strong>R$ 29,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.6/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>❓ Perguntas Frequentes</h2>
              
              <h3>Qual o melhor horário para tomar Whey Protein?</h3>
              <p>
                O <strong>melhor horário</strong> é logo após o treino (janela anabólica de 30-60 minutos). Também pode ser consumido no café da manhã ou antes de dormir para manter o aporte proteico constante.
              </p>

              <h3>Creatina causa retenção de líquido?</h3>
              <p>
                A <strong>creatina</strong> aumenta a retenção hídrica intramuscular (dentro das células), o que é positivo para o desempenho. Não causa inchaço visível quando usada corretamente com hidratação adequada.
              </p>

              <h3>BCAA é necessário se já tomo Whey?</h3>
              <p>
                O <strong>Whey</strong> já contém BCAAs, mas a suplementação adicional pode ser benéfica para treinos longos (acima de 60 minutos) ou em jejum. Para a maioria, o Whey é suficiente.
              </p>

              <h3>Suplementos têm efeitos colaterais?</h3>
              <p>
                Quando usados corretamente e com as <strong>melhores marcas</strong> certificadas, suplementos são seguros. Consulte um nutricionista para dosagens personalizadas, especialmente se tiver condições de saúde preexistentes.
              </p>

              <h2>🚀 Como Usar Suplementos Corretamente</h2>
              <ul>
                <li><strong>Whey Protein</strong>: 1-2 scoops ao dia (30-60g), misturado com água ou leite</li>
                <li><strong>Creatina</strong>: 5g diários, preferencialmente pós-treino com carboidratos</li>
                <li><strong>BCAA</strong>: 5-10g antes ou durante treinos longos</li>
                <li><strong>Multivitamínico</strong>: 1 cápsula ao dia junto com refeições</li>
                <li>Mantenha hidratação adequada (2-3 litros de água/dia)</li>
              </ul>

              <h2>✅ Por Que Comprar no Mercado Livre?</h2>
              <p>
                O <strong>Mercado Livre</strong> oferece as <strong>melhores ofertas</strong> em suplementos com:
              </p>
              <ul>
                <li>Produtos com selo de autenticidade das marcas</li>
                <li>Frete grátis em milhares de suplementos</li>
                <li>Parcelamento em até 12x sem juros</li>
                <li>Avaliações reais de compradores verificados</li>
                <li>Devolução grátis em caso de insatisfação</li>
                <li>Nota fiscal e garantia de procedência</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-foreground">Encontre Seus Suplementos Ideais</h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Compare <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> de suplementos
            </p>
            <a 
              href="https://mercadolivre.com/sec/1WqdDGr"
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

export default Suplementos;