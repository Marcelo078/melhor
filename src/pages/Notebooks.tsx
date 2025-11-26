import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, TrendingUp, Shield, Award } from "lucide-react";

const Notebooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Melhores Notebooks 2025 | Guia Completo - Melhores Marcas e Preços";
  }, []);

  const products = [
    {
      title: "Notebook i5 11ª Gen 8GB RAM 256GB SSD Tela 15.6\"",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      price: "R$ 2.499,00",
      rating: 4.5,
      reviews: 567,
      affiliateLink: "https://mercadolivre.com/sec/2cQ33FV",
      tag: "CUSTO-BENEFÍCIO"
    },
    {
      title: "Notebook Gamer i7 12ª Gen RTX 3050 16GB 512GB SSD",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      price: "R$ 4.999,00",
      rating: 4.8,
      reviews: 892,
      affiliateLink: "https://mercadolivre.com/sec/2cQ33FV",
      tag: "GAMER"
    },
    {
      title: "Notebook Ultrafino i7 16GB 512GB SSD Tela Full HD",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      price: "R$ 3.799,00",
      rating: 4.7,
      reviews: 1234,
      affiliateLink: "https://mercadolivre.com/sec/2cQ33FV",
      tag: "PROFISSIONAL"
    },
    {
      title: "Notebook 2 em 1 Touchscreen i5 8GB 256GB SSD",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      price: "R$ 2.899,00",
      rating: 4.6,
      reviews: 456,
      affiliateLink: "https://mercadolivre.com/sec/2cQ33FV",
      tag: "VERSÁTIL"
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
                Melhores Notebooks 2025: Guia Completo de Compra
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Análise detalhada das <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em notebooks para trabalho, estudo e games
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">Comparativo Técnico</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Marcas Confiáveis</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-info" />
                  <span className="font-medium">Melhor Desempenho</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">🏆 Melhores Ofertas em Notebooks</h2>
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
              <h2>Como Escolher o Notebook Ideal?</h2>
              <p>
                Escolher o <strong>notebook</strong> certo exige análise de processador, memória RAM, armazenamento e placa de vídeo. Com as <strong>melhores marcas</strong> do mercado, você encontra configurações adequadas para cada necessidade aos <strong>melhores preços</strong>.
              </p>

              <h2>🎯 Notebooks Por Categoria de Uso</h2>
              
              <h3>1. Notebooks Para Trabalho e Escritório</h3>
              <p>
                Para <strong>uso corporativo</strong>, priorize processadores Intel Core i5/i7 ou AMD Ryzen 5/7, mínimo de 8GB RAM e SSD de 256GB. As <strong>melhores marcas</strong> incluem Dell, Lenovo e HP com linhas business.
              </p>
              <p>
                <strong>Melhores Ofertas Trabalho</strong>: notebooks i5 11ª geração com 8GB RAM e SSD 256GB a partir de R$ 2.499,00.
              </p>

              <h3>2. Notebooks Para Estudos</h3>
              <p>
                Estudantes precisam de <strong>mobilidade e bateria</strong> duradoura. Modelos com tela de 14" a 15.6", peso até 2kg e autonomia de 8+ horas são ideais. Processadores i3/i5 ou Ryzen 3/5 suficientes.
              </p>
              <p>
                <strong>Melhores Preços Estudantes</strong>: modelos com i3 10ª geração, 8GB RAM e SSD 256GB a partir de R$ 1.999,00.
              </p>

              <h3>3. Notebooks Gamers - Alta Performance</h3>
              <p>
                <strong>Notebooks gamer</strong> exigem placa de vídeo dedicada (GTX 1650 mínimo), processador i5/i7 ou Ryzen 5/7, 16GB RAM e SSD NVMe. Tela com taxa de atualização 120Hz+ aumenta fluidez.
              </p>
              <p>
                <strong>Melhores Ofertas Gamer</strong>: configurações com RTX 3050, i7 12ª geração e 16GB RAM a partir de R$ 4.999,00.
              </p>

              <h3>4. Notebooks Para Criação de Conteúdo</h3>
              <p>
                Edição de vídeo e design exigem <strong>alta performance</strong>: i7/Ryzen 7, 16-32GB RAM, SSD 512GB+ e tela com boa cobertura de cores (100% sRGB mínimo). Placa de vídeo dedicada acelera renderização.
              </p>

              <h2>🏅 Melhores Marcas de Notebooks</h2>
              
              <h3>Dell - Confiabilidade Corporativa</h3>
              <p>
                A <strong>Dell</strong> lidera em notebooks corporativos com as linhas Inspiron (uso geral), Vostro (pequenas empresas) e XPS (premium). Construção robusta e suporte técnico superior.
              </p>

              <h3>Lenovo - Inovação e Durabilidade</h3>
              <p>
                A <strong>Lenovo</strong> oferece a icônica linha ThinkPad (business), IdeaPad (consumidor) e Legion (gamer). Teclados excepcionais e bateria duradoura são diferenciais.
              </p>

              <h3>Acer e Asus - Melhor Custo-Benefício</h3>
              <p>
                <strong>Acer</strong> (Aspire, Nitro) e <strong>Asus</strong> (VivoBook, ROG) entregam configurações potentes a preços competitivos. Ideais para quem busca performance sem gastar muito.
              </p>

              <h3>Samsung - Design e Mobilidade</h3>
              <p>
                A <strong>Samsung</strong> se destaca em notebooks ultrafinos (Galaxy Book) com telas AMOLED vibrantes, design premium e integração com ecossistema Galaxy.
              </p>

              <h2>💰 Tabela Comparativa: Melhores Preços</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Modelo</th>
                      <th className="border border-border p-3 text-left">Processador</th>
                      <th className="border border-border p-3 text-left">RAM/SSD</th>
                      <th className="border border-border p-3 text-left">Preço</th>
                      <th className="border border-border p-3 text-left">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Dell Inspiron 15</td>
                      <td className="border border-border p-3">i5 11ª Gen</td>
                      <td className="border border-border p-3">8GB / 256GB</td>
                      <td className="border border-border p-3"><strong>R$ 2.499,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.5/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Acer Nitro 5</td>
                      <td className="border border-border p-3">i7 12ª Gen</td>
                      <td className="border border-border p-3">16GB / 512GB + RTX 3050</td>
                      <td className="border border-border p-3"><strong>R$ 4.999,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.8/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Lenovo IdeaPad 3</td>
                      <td className="border border-border p-3">Ryzen 5 5500U</td>
                      <td className="border border-border p-3">8GB / 256GB</td>
                      <td className="border border-border p-3"><strong>R$ 2.199,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.6/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Samsung Book</td>
                      <td className="border border-border p-3">i7 11ª Gen</td>
                      <td className="border border-border p-3">16GB / 512GB</td>
                      <td className="border border-border p-3"><strong>R$ 3.799,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.7/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>❓ Perguntas Frequentes</h2>
              
              <h3>Qual melhor processador: Intel ou AMD?</h3>
              <p>
                <strong>Intel</strong> lidera em performance single-core (melhor para games). <strong>AMD Ryzen</strong> oferece mais núcleos pelo mesmo preço (melhor para multitarefa). Ambos são excelentes; escolha baseado na oferta disponível.
              </p>

              <h3>8GB ou 16GB de RAM?</h3>
              <p>
                <strong>8GB</strong> suficiente para navegação, estudos e trabalho leve. <strong>16GB</strong> necessário para edição de vídeo, programação, games e multitarefa pesada. Para futureproof, priorize 16GB.
              </p>

              <h3>SSD é realmente necessário?</h3>
              <p>
                SIM! <strong>SSD</strong> é a atualização que mais impacta desempenho. Sistema inicia em 10-15 segundos (vs 1-2 minutos com HD). Aplicativos abrem instantaneamente. Nunca compre notebook com HD tradicional em 2025.
              </p>

              <h3>Placa de vídeo integrada ou dedicada?</h3>
              <p>
                <strong>Integrada</strong> (Intel Iris, AMD Radeon Vega) suficiente para trabalho e estudos. <strong>Dedicada</strong> (NVIDIA GTX/RTX) essencial para games, edição de vídeo e renderização 3D. Não confunda com VRAM compartilhada!
              </p>

              <h2>🚀 Especificações Técnicas Explicadas</h2>
              
              <h3>Processadores (CPU)</h3>
              <ul>
                <li><strong>Intel Core i3</strong>: Tarefas básicas, navegação, estudos leves</li>
                <li><strong>Intel Core i5</strong>: Trabalho, multitarefa, games leves (melhor custo-benefício)</li>
                <li><strong>Intel Core i7</strong>: Alta performance, edição, games exigentes</li>
                <li><strong>AMD Ryzen 5/7</strong>: Equivalente a i5/i7 com mais núcleos</li>
              </ul>

              <h3>Memória RAM</h3>
              <ul>
                <li><strong>4GB</strong>: Obsoleto, evitar</li>
                <li><strong>8GB</strong>: Mínimo aceitável para uso geral</li>
                <li><strong>16GB</strong>: Ideal para multitarefa e criação de conteúdo</li>
                <li><strong>32GB+</strong>: Profissional (edição 4K, máquinas virtuais)</li>
              </ul>

              <h3>Armazenamento</h3>
              <ul>
                <li><strong>SSD 256GB</strong>: Mínimo recomendado</li>
                <li><strong>SSD 512GB</strong>: Ideal para maioria dos usuários</li>
                <li><strong>SSD 1TB+</strong>: Criadores de conteúdo, gamers</li>
                <li><strong>Tipo NVMe</strong>: 5x mais rápido que SATA, priorize</li>
              </ul>

              <h2>✅ Checklist de Compra</h2>
              <ul>
                <li>Processador: mínimo i5 11ª geração ou Ryzen 5 5000</li>
                <li>RAM: 8GB para uso básico, 16GB para performance</li>
                <li>Armazenamento: SSD 256GB mínimo, preferir 512GB</li>
                <li>Tela: Full HD (1920x1080) mínimo, evitar HD (1366x768)</li>
                <li>Bateria: autonomia de 6+ horas para mobilidade</li>
                <li>Conectividade: Wi-Fi 6, USB-C, HDMI</li>
                <li>Peso: até 2kg para portabilidade</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-foreground">Encontre Seu Notebook Ideal</h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Compare <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em notebooks
            </p>
            <a 
              href="https://mercadolivre.com/sec/2cQ33FV"
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

export default Notebooks;