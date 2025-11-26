import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, TrendingUp, Shield, Award } from "lucide-react";

const TVs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Melhores Smart TVs 2025 | Guia 4K e 8K - Melhores Marcas e Preços";
  }, []);

  const products = [
    {
      title: "Smart TV 50\" 4K UHD LED HDR - Melhores Marcas",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      price: "R$ 1.899,00",
      rating: 4.6,
      reviews: 1823,
      affiliateLink: "https://mercadolivre.com/sec/2DLVWrw",
      tag: "MAIS VENDIDA"
    },
    {
      title: "Smart TV 55\" 4K QLED 120Hz Gaming - Melhores Preços",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      price: "R$ 2.999,00",
      rating: 4.8,
      reviews: 1456,
      affiliateLink: "https://mercadolivre.com/sec/2DLVWrw",
      tag: "GAMER"
    },
    {
      title: "Smart TV 65\" 4K UHD Android TV Dolby Atmos",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      price: "R$ 3.499,00",
      rating: 4.7,
      reviews: 892,
      affiliateLink: "https://mercadolivre.com/sec/2DLVWrw",
      tag: "CINEMA"
    },
    {
      title: "Smart TV 43\" Full HD LED Wi-Fi - Melhores Ofertas",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      price: "R$ 1.299,00",
      rating: 4.5,
      reviews: 2341,
      affiliateLink: "https://mercadolivre.com/sec/2DLVWrw",
      tag: "ENTRADA"
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
                Melhores Smart TVs 2025: Guia Completo 4K e 8K
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Análise detalhada das <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em Smart TVs: qualidade de imagem, recursos smart e som
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">Análise de Imagem</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Marcas Top</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-info" />
                  <span className="font-medium">4K e 8K</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">🏆 Melhores Ofertas em Smart TVs</h2>
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
              <h2>Como Escolher a Smart TV Perfeita?</h2>
              <p>
                Escolher a <strong>Smart TV</strong> ideal exige análise de resolução, tecnologia de tela, sistema operacional e recursos de áudio. Com as <strong>melhores marcas</strong> do mercado, você encontra qualidade de imagem excepcional aos <strong>melhores preços</strong>.
              </p>

              <h2>🎯 Smart TVs Por Categoria</h2>
              
              <h3>1. Smart TVs 4K UHD - Padrão Atual</h3>
              <p>
                A resolução <strong>4K (3840x2160)</strong> é o padrão atual, oferecendo 4x mais pixels que Full HD. As <strong>melhores marcas</strong> como Samsung, LG e Sony equipam modelos 4K com HDR, upscaling inteligente e taxa de atualização nativa de 60Hz.
              </p>
              <p>
                <strong>Melhores Ofertas 4K</strong>: Smart TVs 50" 4K com HDR10 a partir de R$ 1.899,00.
              </p>

              <h3>2. Smart TVs QLED - Cores Vibrantes</h3>
              <p>
                A tecnologia <strong>QLED (Quantum Dot LED)</strong> da Samsung oferece brilho superior (até 2000 nits), cores mais saturadas e melhor desempenho em ambientes claros. Ideal para salas iluminadas.
              </p>
              <p>
                <strong>Melhores Preços QLED</strong>: modelos 55" QLED 4K com 120Hz a partir de R$ 2.999,00.
              </p>

              <h3>3. Smart TVs OLED - Preto Perfeito</h3>
              <p>
                TVs <strong>OLED</strong> possuem pixels auto-iluminados, gerando preto absoluto, contraste infinito e ângulos de visão perfeitos. A LG lidera essa tecnologia. Melhor escolha para cinema em casa.
              </p>
              <p>
                <strong>Melhores Ofertas OLED</strong>: modelos 55" OLED 4K a partir de R$ 4.499,00.
              </p>

              <h3>4. Smart TVs Para Gaming - 120Hz e HDMI 2.1</h3>
              <p>
                Gamers precisam de <strong>HDMI 2.1</strong> para 4K@120Hz, VRR (Variable Refresh Rate) e ALLM (Auto Low Latency Mode). Essencial para PS5 e Xbox Series X extraírem máximo desempenho.
              </p>

              <h2>🏅 Melhores Marcas de Smart TVs</h2>
              
              <h3>Samsung - Líder em Tecnologia QLED</h3>
              <p>
                A <strong>Samsung</strong> domina o mercado com tecnologia QLED, sistema Tizen intuitivo e design sem bordas. Linha Crystal UHD oferece ótimo custo-benefício, enquanto Neo QLED representa o topo de linha.
              </p>

              <h3>LG - Referência em OLED</h3>
              <p>
                A <strong>LG</strong> é líder mundial em TVs OLED, oferecendo preto perfeito e cores precisas. Sistema webOS é um dos mais rápidos e fluidos. Linha NanoCell é alternativa LED de qualidade.
              </p>

              <h3>Sony - Qualidade de Imagem Premium</h3>
              <p>
                A <strong>Sony</strong> se destaca pelo processamento de imagem superior (processador X1) e calibração de fábrica precisa. Escolha de profissionais de audiovisual. Android TV com Google Assistant integrado.
              </p>

              <h3>TCL - Melhor Custo-Benefício</h3>
              <p>
                A <strong>TCL</strong> oferece tecnologia QLED a preços competitivos. Modelos com Dolby Vision, Android TV e HDMI 2.1 por até 40% menos que concorrentes premium. Ideal para quem busca economia sem sacrificar qualidade.
              </p>

              <h2>💰 Tabela Comparativa: Melhores Preços</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Modelo</th>
                      <th className="border border-border p-3 text-left">Tamanho</th>
                      <th className="border border-border p-3 text-left">Tecnologia</th>
                      <th className="border border-border p-3 text-left">Preço</th>
                      <th className="border border-border p-3 text-left">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Samsung Crystal</td>
                      <td className="border border-border p-3">50" 4K</td>
                      <td className="border border-border p-3">LED HDR</td>
                      <td className="border border-border p-3"><strong>R$ 1.899,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.6/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">TCL QLED</td>
                      <td className="border border-border p-3">55" 4K</td>
                      <td className="border border-border p-3">QLED 120Hz</td>
                      <td className="border border-border p-3"><strong>R$ 2.999,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.8/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">LG NanoCell</td>
                      <td className="border border-border p-3">65" 4K</td>
                      <td className="border border-border p-3">NanoCell ThinQ</td>
                      <td className="border border-border p-3"><strong>R$ 3.499,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">LG OLED</td>
                      <td className="border border-border p-3">55" 4K</td>
                      <td className="border border-border p-3">OLED evo</td>
                      <td className="border border-border p-3"><strong>R$ 4.999,00</strong></td>
                      <td className="border border-border p-3">⭐ 4.9/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>❓ Perguntas Frequentes</h2>
              
              <h3>Qual tamanho de TV escolher?</h3>
              <p>
                Regra prática: <strong>distância de visualização ÷ 1.5</strong>. Para 2 metros de distância, TV de 50-55". Para 3 metros, 65-75". TVs 4K permitem distâncias menores sem perder qualidade (pixels invisíveis).
              </p>

              <h3>4K vale a pena ou Full HD ainda é suficiente?</h3>
              <p>
                <strong>4K</strong> é o padrão atual. Streaming (Netflix, Prime Video, Disney+) oferece vasto catálogo 4K. Games atuais são 4K nativos. Preços de TVs 4K estão equivalentes a Full HD. Não há motivo para comprar Full HD em 2025.
              </p>

              <h3>QLED ou OLED: qual é melhor?</h3>
              <p>
                <strong>OLED</strong>: preto perfeito, contraste infinito, melhor para filmes/séries. <strong>QLED</strong>: brilho superior, melhor em ambientes claros, sem risco de burn-in. Para gaming intenso e salas iluminadas: QLED. Para cinema: OLED.
              </p>

              <h3>Preciso de HDMI 2.1 para PS5 e Xbox Series X?</h3>
              <p>
                Sim! <strong>HDMI 2.1</strong> é essencial para aproveitar 4K@120Hz nos consoles de nova geração. Também suporta VRR (reduz tearing) e ALLM (menor latência). Se for gamer, HDMI 2.1 é obrigatório.
              </p>

              <h2>🚀 Recursos Smart Essenciais</h2>
              
              <h3>Sistemas Operacionais</h3>
              <ul>
                <li><strong>Tizen (Samsung)</strong>: Interface limpa, rápida, apps principais disponíveis</li>
                <li><strong>webOS (LG)</strong>: Visual elegante, Magic Remote inovador</li>
                <li><strong>Android TV (Sony, TCL)</strong>: Google Play Store completa, Chromecast integrado</li>
                <li><strong>Roku TV</strong>: Simples, intuitivo, ideal para usuários básicos</li>
              </ul>

              <h3>Recursos de Imagem</h3>
              <ul>
                <li><strong>HDR10/HDR10+</strong>: Maior alcance dinâmico, cores vívidas</li>
                <li><strong>Dolby Vision</strong>: HDR premium com metadados dinâmicos</li>
                <li><strong>120Hz</strong>: Essencial para gaming, esportes e ação</li>
                <li><strong>ALLM</strong>: Modo jogo automático com menor latência</li>
              </ul>

              <h3>Recursos de Áudio</h3>
              <ul>
                <li><strong>Dolby Atmos</strong>: Som tridimensional imersivo</li>
                <li><strong>eARC</strong>: Transmite áudio de alta qualidade para soundbar</li>
                <li><strong>AI Sound</strong>: Otimização automática baseada em conteúdo</li>
              </ul>

              <h2>✅ Checklist de Compra</h2>
              <ul>
                <li>Resolução: mínimo 4K UHD (3840x2160)</li>
                <li>HDR: pelo menos HDR10, preferir Dolby Vision</li>
                <li>Sistema Smart: Android TV, Tizen ou webOS</li>
                <li>HDMI: mínimo 3 portas, preferir HDMI 2.1 (gamers)</li>
                <li>Taxa atualização: 60Hz mínimo, 120Hz para gaming</li>
                <li>Conectividade: Wi-Fi 5 GHz, Bluetooth</li>
                <li>Assistente virtual: Google Assistant ou Alexa integrado</li>
              </ul>

              <h2>📺 Tamanhos Recomendados Por Cômodo</h2>
              <ul>
                <li><strong>Quarto</strong>: 32"-43" (ambientes pequenos)</li>
                <li><strong>Sala pequena</strong>: 43"-50" (até 2.5m de distância)</li>
                <li><strong>Sala média</strong>: 55"-65" (2.5m-3.5m de distância)</li>
                <li><strong>Sala grande</strong>: 65"-75"+ (acima de 3.5m)</li>
                <li><strong>Home theater</strong>: 75"+ (experiência cinematográfica)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-foreground">Encontre Sua Smart TV Ideal</h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Compare <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em Smart TVs
            </p>
            <a 
              href="https://mercadolivre.com/sec/2DLVWrw"
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

export default TVs;