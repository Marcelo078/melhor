import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, TrendingUp, Shield, Award } from "lucide-react";

const PetShop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pet Shop 2025 | Produtos para Cães e Gatos - Melhores Marcas e Preços";
  }, []);

  const products = [
    {
      title: "Ração Premium para Cães Adultos 15kg - Melhores Marcas",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&q=80",
      price: "R$ 149,90",
      rating: 4.8,
      reviews: 2341,
      affiliateLink: "https://mercadolivre.com/sec/2w3WCFN",
      tag: "MAIS VENDIDA"
    },
    {
      title: "Kit Brinquedos Interativos para Cães - Melhores Preços",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&q=80",
      price: "R$ 79,90",
      rating: 4.7,
      reviews: 1456,
      affiliateLink: "https://mercadolivre.com/sec/2w3WCFN",
      tag: "DIVERSÃO"
    },
    {
      title: "Ração Super Premium Gatos Castrados 10kg",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&q=80",
      price: "R$ 189,90",
      rating: 4.9,
      reviews: 1823,
      affiliateLink: "https://mercadolivre.com/sec/2w3WCFN",
      tag: "PREMIUM"
    },
    {
      title: "Casinha Plástica Resistente Cães Médio Porte",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&q=80",
      price: "R$ 229,90",
      rating: 4.6,
      reviews: 678,
      affiliateLink: "https://mercadolivre.com/sec/2w3WCFN",
      tag: "CONFORTO"
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
                Pet Shop 2025: Tudo Para Seu Cão e Gato
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Guia completo das <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em produtos para pets: ração, brinquedos, acessórios e mais
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">Marcas Veterinárias</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Produtos Aprovados</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-info" />
                  <span className="font-medium">Frete Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">🏆 Melhores Ofertas para Pets</h2>
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
              <h2>Produtos Essenciais Para Seu Pet</h2>
              <p>
                Escolher os produtos certos para seu <strong>cão</strong> ou <strong>gato</strong> é fundamental para garantir saúde, bem-estar e felicidade. Com as <strong>melhores marcas</strong> do mercado pet, você oferece nutrição completa, diversão e conforto aos <strong>melhores preços</strong>.
              </p>

              <h2>🐕 Produtos Para Cães: Guia Completo</h2>
              
              <h3>1. Ração Para Cães - Nutrição de Qualidade</h3>
              <p>
                A <strong>ração</strong> é o alimento mais importante. As <strong>melhores marcas</strong> como Royal Canin, Premier Pet, Pedigree e Golden oferecem fórmulas balanceadas para cada fase da vida e porte do cão.
              </p>
              <p>
                <strong>Melhores Ofertas Ração Cães</strong>:
              </p>
              <ul>
                <li><strong>Filhotes</strong>: Rica em proteínas e cálcio para crescimento. A partir de R$ 89,90 (10kg)</li>
                <li><strong>Adultos</strong>: Balanceada para manutenção. A partir de R$ 149,90 (15kg)</li>
                <li><strong>Sênior</strong>: Com glucosamina para articulações. A partir de R$ 169,90 (15kg)</li>
              </ul>

              <h3>2. Brinquedos Para Cães - Diversão e Saúde</h3>
              <p>
                <strong>Brinquedos interativos</strong> estimulam a inteligência, previnem ansiedade e fortalecem a mordida. As <strong>melhores marcas</strong> incluem Kong, Jambo e Chalesco, com produtos resistentes e seguros.
              </p>
              <p>
                <strong>Melhores Preços Brinquedos</strong>: kits com 5-8 brinquedos a partir de R$ 79,90.
              </p>

              <h3>3. Casinhas e Camas - Conforto Garantido</h3>
              <p>
                Todo cão precisa de um <strong>espaço próprio</strong>. Casinhas plásticas são ideais para áreas externas (resistem à chuva), enquanto camas ortopédicas são perfeitas para dentro de casa.
              </p>
              <p>
                <strong>Melhores Ofertas Casinhas</strong>: a partir de R$ 229,90 para porte médio.
              </p>

              <h2>🐱 Produtos Para Gatos: Guia Completo</h2>
              
              <h3>1. Ração Para Gatos - Nutrição Felina</h3>
              <p>
                Gatos são carnívoros obrigatórios e precisam de ração com alta concentração proteica. As <strong>melhores marcas</strong> como Whiskas, Royal Canin, Premier Pet e Golden Cat oferecem fórmulas específicas.
              </p>
              <p>
                <strong>Melhores Ofertas Ração Gatos</strong>:
              </p>
              <ul>
                <li><strong>Castrados</strong>: Controle de peso e pH urinário. A partir de R$ 189,90 (10kg)</li>
                <li><strong>Indoor</strong>: Controle de bolas de pelo. A partir de R$ 179,90 (10kg)</li>
                <li><strong>Filhotes</strong>: Desenvolvimento completo. A partir de R$ 99,90 (7,5kg)</li>
              </ul>

              <h3>2. Arranhadores e Brinquedos - Comportamento Saudável</h3>
              <p>
                <strong>Arranhadores</strong> são essenciais para evitar que gatos danifiquem móveis. Modelos com prateleiras estimulam escalada natural. Brinquedos com penas e varinhas ativam instinto caçador.
              </p>
              <p>
                <strong>Melhores Preços Arranhadores</strong>: a partir de R$ 89,90 para modelos de coluna.
              </p>

              <h3>3. Caixas de Areia - Higiene Felina</h3>
              <p>
                Caixas de areia com <strong>tampa</strong> controlam odores, enquanto modelos abertos facilitam limpeza. Areia sanitária aglomerante é a mais prática e econômica.
              </p>

              <h2>🏅 Melhores Marcas de Produtos Pet</h2>
              
              <h3>Royal Canin - Nutrição Veterinária Premium</h3>
              <p>
                A <strong>Royal Canin</strong> é referência mundial em nutrição para pets, com fórmulas desenvolvidas por veterinários para cada raça, idade e necessidade específica.
              </p>

              <h3>Premier Pet - Qualidade Nacional</h3>
              <p>
                A <strong>Premier Pet</strong> oferece rações super premium brasileiras com excelente custo-benefício. Linha completa para cães e gatos de todos os portes.
              </p>

              <h3>Chalesco e Jambo - Acessórios de Qualidade</h3>
              <p>
                <strong>Chalesco</strong> e <strong>Jambo</strong> são líderes em acessórios: coleiras, guias, camas, brinquedos e produtos de higiene com design moderno e durabilidade superior.
              </p>

              <h2>💰 Tabela Comparativa: Melhores Preços</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Produto</th>
                      <th className="border border-border p-3 text-left">Marca</th>
                      <th className="border border-border p-3 text-left">Animal</th>
                      <th className="border border-border p-3 text-left">Preço</th>
                      <th className="border border-border p-3 text-left">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Ração Premium 15kg</td>
                      <td className="border border-border p-3">Premier Pet</td>
                      <td className="border border-border p-3">Cães</td>
                      <td className="border border-border p-3"><strong>R$ 149,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.8/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Ração Castrados 10kg</td>
                      <td className="border border-border p-3">Royal Canin</td>
                      <td className="border border-border p-3">Gatos</td>
                      <td className="border border-border p-3"><strong>R$ 189,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.9/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Kit Brinquedos</td>
                      <td className="border border-border p-3">Jambo</td>
                      <td className="border border-border p-3">Cães</td>
                      <td className="border border-border p-3"><strong>R$ 79,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Arranhador Torre</td>
                      <td className="border border-border p-3">Chalesco</td>
                      <td className="border border-border p-3">Gatos</td>
                      <td className="border border-border p-3"><strong>R$ 129,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.6/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>❓ Perguntas Frequentes</h2>
              
              <h3>Como escolher a ração ideal para meu pet?</h3>
              <p>
                Considere: <strong>idade</strong> (filhote, adulto, sênior), <strong>porte</strong> (pequeno, médio, grande), <strong>condição</strong> (castrado, indoor, sensibilidade alimentar). As <strong>melhores marcas</strong> têm linhas específicas para cada necessidade.
              </p>

              <h3>Quantas vezes devo alimentar meu pet por dia?</h3>
              <p>
                <strong>Cães adultos</strong>: 2 vezes ao dia. <strong>Filhotes</strong>: 3-4 vezes. <strong>Gatos</strong>: podem ter ração disponível o dia todo (controlam melhor a quantidade). Sempre com água fresca disponível.
              </p>

              <h3>Brinquedos são realmente necessários?</h3>
              <p>
                Sim! <strong>Brinquedos</strong> previnem ansiedade, destrutividade e obesidade. Para cães, estimulam exercício físico. Para gatos, mantêm instinto caçador ativo. Investimento essencial para saúde mental dos pets.
              </p>

              <h3>Produtos importados são melhores que nacionais?</h3>
              <p>
                Não necessariamente. Marcas nacionais como <strong>Premier Pet</strong> e <strong>Guabi</strong> possuem qualidade equivalente a importadas, com <strong>melhores preços</strong> e maior disponibilidade. Avalie sempre a composição, não apenas a origem.
              </p>

              <h2>✅ Checklist do Pet Feliz</h2>
              <h3>🐕 Para Cães:</h3>
              <ul>
                <li>Ração de qualidade adequada ao porte e idade</li>
                <li>Comedouro e bebedouro em inox (mais higiênicos)</li>
                <li>Coleira, guia e plaquinha de identificação</li>
                <li>Brinquedos variados (mastigação e interativos)</li>
                <li>Caminha confortável ou casinha</li>
                <li>Produtos de higiene: shampoo, escova, cortador de unhas</li>
              </ul>

              <h3>🐱 Para Gatos:</h3>
              <ul>
                <li>Ração específica para gatos (alta proteína)</li>
                <li>Caixa de areia com tampa + areia aglomerante</li>
                <li>Arranhador (vertical ou horizontal)</li>
                <li>Brinquedos para caça simulada</li>
                <li>Caminha ou nichos elevados</li>
                <li>Escova para pelagem e cortador de unhas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-foreground">Tudo Para Seu Pet em Um Só Lugar</h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Compare <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em produtos pet
            </p>
            <a 
              href="https://mercadolivre.com/sec/2w3WCFN"
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

export default PetShop;