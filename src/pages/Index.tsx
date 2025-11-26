import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Melhores Bicicletas Ergométricas",
      description: "Descubra as bicicletas ergométricas com melhor custo-benefício, avaliações reais e especificações técnicas detalhadas para sua academia em casa.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      link: "https://mercadolivre.com/sec/2nKZmda",
      tag: "TOP VENDAS"
    },
    {
      title: "Melhores Suplementos",
      description: "Análise completa dos suplementos mais vendidos: whey protein, creatina, BCAA e mais. Procedência garantida e melhores marcas do mercado.",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80",
      link: "https://mercadolivre.com/sec/1WqdDGr",
      tag: "PROMOÇÃO"
    },
    {
      title: "Smart Home - Casa Inteligente",
      description: "Transforme sua casa com dispositivos inteligentes: assistentes virtuais, lâmpadas smart, câmeras de segurança e automação residencial.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      link: "https://mercadolivre.com/sec/14GQgfK",
      tag: "TECNOLOGIA"
    },
    {
      title: "Pet Shop - Cães e Gatos",
      description: "Tudo para seu pet: ração premium, brinquedos, acessórios e produtos de higiene. Marcas confiáveis com avaliações positivas de donos de pets.",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
      link: "https://mercadolivre.com/sec/2w3WCFN"
    },
    {
      title: "Peças de Trator",
      description: "Peças originais e alternativas para tratores: filtros, correias, sistemas hidráulicos e componentes mecânicos de qualidade certificada.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      link: "https://mercadolivre.com/sec/2d6sMcw"
    },
    {
      title: "Melhores Notebooks",
      description: "Notebooks para trabalho, estudo e games: análises técnicas, comparativos de desempenho e melhores configurações para cada necessidade.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
      link: "https://mercadolivre.com/sec/2cQ33FV",
      tag: "DESTAQUE"
    },
    {
      title: "Melhores TVs",
      description: "Smart TVs 4K e 8K: análise de imagem, recursos smart, qualidade de som e comparativo entre as principais marcas do mercado.",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
      link: "https://mercadolivre.com/sec/2DLVWrw",
      tag: "NOVIDADE"
    }
  ];

  const featuredProducts = [
    {
      title: "Bicicleta Ergométrica Dobrável - Ajuste 8 Níveis",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
      price: "R$ 899,90",
      rating: 4.7,
      reviews: 1234,
      affiliateLink: "https://mercadolivre.com/sec/2nKZmda",
      tag: "FRETE GRÁTIS"
    },
    {
      title: "Whey Protein Concentrado 900g - Chocolate",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
      price: "R$ 79,90",
      rating: 4.8,
      reviews: 3421,
      affiliateLink: "https://mercadolivre.com/sec/1WqdDGr",
      tag: "BEST SELLER"
    },
    {
      title: "Lâmpada LED Smart RGB Wi-Fi - Pack 4 Unidades",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80",
      price: "R$ 149,90",
      rating: 4.6,
      reviews: 892,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      tag: "PROMOÇÃO"
    },
    {
      title: "Notebook i5 11ª Gen 8GB RAM 256GB SSD Tela 15.6\"",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
      price: "R$ 2.499,00",
      rating: 4.5,
      reviews: 567,
      affiliateLink: "https://mercadolivre.com/sec/2cQ33FV",
      tag: "OFERTA"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Trust Badges */}
        <section className="py-8 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Análises Detalhadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Avaliações Reais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Melhores Preços</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Marcas Confiáveis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Produtos em Destaque</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Selecionamos os produtos mais bem avaliados e com melhor custo-benefício
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Explore por Categoria</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Navegue por nossas categorias especializadas e encontre exatamente o que precisa
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Por que confiar nas nossas análises?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              Analisamos cuidadosamente cada produto considerando: avaliações reais de compradores, 
              especificações técnicas, procedência das marcas, histórico de vendas e custo-benefício. 
              Nossa missão é ajudar você a fazer a melhor escolha.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                <p className="text-muted-foreground">Produtos Analisados</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50k+</div>
                <p className="text-muted-foreground">Avaliações Verificadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Satisfação dos Leitores</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
