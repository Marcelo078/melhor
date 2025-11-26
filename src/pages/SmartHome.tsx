import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, TrendingUp, Shield, Award } from "lucide-react";

const SmartHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Smart Home 2025 | Casa Inteligente - Melhores Dispositivos e Preços";
  }, []);

  const products = [
    {
      title: "Lâmpada LED Smart RGB Wi-Fi - Pack 4 Unidades",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
      price: "R$ 149,90",
      rating: 4.6,
      reviews: 892,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      tag: "MAIS VENDIDO"
    },
    {
      title: "Assistente Virtual Alexa Echo Dot 5ª Geração",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
      price: "R$ 299,90",
      rating: 4.8,
      reviews: 2341,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      tag: "ALEXA"
    },
    {
      title: "Câmera de Segurança Wi-Fi 360° Visão Noturna",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
      price: "R$ 189,90",
      rating: 4.7,
      reviews: 1456,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      tag: "SEGURANÇA"
    },
    {
      title: "Tomada Inteligente Wi-Fi Pack 2 Unidades",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
      price: "R$ 79,90",
      rating: 4.5,
      reviews: 678,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      tag: "ECONOMIA"
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
                Smart Home 2025: Transforme Sua Casa em Casa Inteligente
              </h1>
              <p className="text-xl text-foreground/90 mb-8">
                Guia completo das <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em dispositivos smart para automação residencial
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="font-medium">Compatível Alexa e Google</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-medium">Instalação Fácil</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-info" />
                  <span className="font-medium">Economia de Energia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center">🏆 Melhores Ofertas em Smart Home</h2>
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
              <h2>O Que é Smart Home (Casa Inteligente)?</h2>
              <p>
                <strong>Smart Home</strong> ou <strong>Casa Inteligente</strong> é a integração de dispositivos conectados à internet que automatizam e facilitam o controle de iluminação, segurança, temperatura e entretenimento. Com as <strong>melhores marcas</strong> e <strong>melhores preços</strong>, você transforma sua residência em um ambiente moderno, seguro e eficiente.
              </p>

              <h2>🎯 Principais Dispositivos Smart Home</h2>
              
              <h3>1. Lâmpadas Inteligentes - Iluminação Personalizada</h3>
              <p>
                As <strong>lâmpadas smart</strong> permitem controle por voz, aplicativo e automação programada. As <strong>melhores ofertas</strong> incluem modelos RGB que mudam milhões de cores, ajuste de intensidade e temperatura de cor.
              </p>
              <p>
                <strong>Melhores Marcas Lâmpadas Smart</strong>: Philips Hue, Positivo Casa Inteligente, Intelbras e Multilaser. Preços a partir de R$ 39,90 por unidade.
              </p>

              <h3>2. Assistentes Virtuais - Controle por Voz</h3>
              <p>
                <strong>Amazon Alexa</strong> e <strong>Google Assistant</strong> são os assistentes mais populares. Com eles, você controla todos dispositivos compatíveis apenas com comandos de voz. As <strong>melhores ofertas</strong> incluem modelos Echo Dot e Nest Mini.
              </p>
              <p>
                <strong>Melhores Preços Assistentes</strong>: Echo Dot 5ª Geração a partir de R$ 299,90 e Google Nest Mini a partir de R$ 249,90.
              </p>

              <h3>3. Câmeras de Segurança Wi-Fi - Proteção 24/7</h3>
              <p>
                As <strong>câmeras inteligentes</strong> oferecem monitoramento remoto via smartphone, detecção de movimento, visão noturna e armazenamento em nuvem. Essenciais para segurança residencial.
              </p>
              <p>
                <strong>Melhores Marcas Câmeras</strong>: Intelbras, Xiaomi, TP-Link e Positivo. Modelos com rotação 360° a partir de R$ 189,90.
              </p>

              <h3>4. Tomadas Inteligentes - Economia e Controle</h3>
              <p>
                As <strong>tomadas smart</strong> transformam qualquer aparelho em dispositivo inteligente. Controle lâmpadas, ventiladores, cafeteiras e mais pelo celular. Monitoramento de consumo energético incluso.
              </p>
              <p>
                <strong>Melhores Ofertas Tomadas</strong>: a partir de R$ 39,90 por unidade, compatíveis com Alexa e Google Home.
              </p>

              <h2>🏅 Melhores Marcas de Dispositivos Smart</h2>
              
              <h3>Amazon - Ecossistema Alexa</h3>
              <p>
                A <strong>Amazon</strong> lidera com seu ecossistema Alexa, oferecendo Echo Dot, Echo Show e centenas de dispositivos compatíveis. Integração perfeita e constantes atualizações.
              </p>

              <h3>Google - Google Home e Nest</h3>
              <p>
                O <strong>Google</strong> oferece os assistentes Nest Mini e Nest Hub, com integração nativa ao YouTube, Spotify e serviços Google. Reconhecimento de voz superior.
              </p>

              <h3>Intelbras - Líder Nacional em Segurança</h3>
              <p>
                A <strong>Intelbras</strong> se destaca em câmeras de segurança, fechaduras digitais e alarmes inteligentes. Produtos desenvolvidos para o mercado brasileiro com suporte local.
              </p>

              <h3>Philips Hue - Premium em Iluminação</h3>
              <p>
                A <strong>Philips</strong> oferece as lâmpadas smart mais avançadas do mercado, com cores vibrantes, sincronização com música e jogos. Investimento para quem busca o melhor.
              </p>

              <h2>💰 Tabela Comparativa: Melhores Preços</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Dispositivo</th>
                      <th className="border border-border p-3 text-left">Marca</th>
                      <th className="border border-border p-3 text-left">Recurso Principal</th>
                      <th className="border border-border p-3 text-left">Preço</th>
                      <th className="border border-border p-3 text-left">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Lâmpada RGB</td>
                      <td className="border border-border p-3">Positivo</td>
                      <td className="border border-border p-3">16 milhões cores</td>
                      <td className="border border-border p-3"><strong>R$ 39,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.6/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Echo Dot 5ª Gen</td>
                      <td className="border border-border p-3">Amazon</td>
                      <td className="border border-border p-3">Alexa integrada</td>
                      <td className="border border-border p-3"><strong>R$ 299,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.8/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Câmera 360°</td>
                      <td className="border border-border p-3">Intelbras</td>
                      <td className="border border-border p-3">Visão noturna</td>
                      <td className="border border-border p-3"><strong>R$ 189,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Tomada Wi-Fi</td>
                      <td className="border border-border p-3">Multilaser</td>
                      <td className="border border-border p-3">Monitor consumo</td>
                      <td className="border border-border p-3"><strong>R$ 39,90</strong></td>
                      <td className="border border-border p-3">⭐ 4.5/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>❓ Perguntas Frequentes</h2>
              
              <h3>Preciso de hub central para Smart Home?</h3>
              <p>
                Depende dos dispositivos. A maioria dos produtos atuais se conecta diretamente ao Wi-Fi, dispensando hub. Porém, para integrações avançadas (Zigbee, Z-Wave), um hub como Echo Plus ou SmartThings pode ser necessário.
              </p>

              <h3>Alexa ou Google Assistant: qual escolher?</h3>
              <p>
                <strong>Alexa</strong> possui mais skills (comandos) e dispositivos compatíveis. <strong>Google Assistant</strong> tem melhor compreensão contextual e integração com serviços Google. Ambos são excelentes; escolha baseado em seu ecossistema atual.
              </p>

              <h3>Smart Home consome muita energia?</h3>
              <p>
                Não! Dispositivos smart consomem pouquíssima energia em standby (geralmente menos de 2W). Além disso, a automação ajuda a <strong>economizar energia</strong> desligando aparelhos automaticamente quando não estão em uso.
              </p>

              <h3>É seguro? Podem me espionar?</h3>
              <p>
                As <strong>melhores marcas</strong> implementam criptografia de ponta a ponta. Mantenha firmware atualizado, use senhas fortes e redes Wi-Fi seguras. Dispositivos de marcas certificadas são seguros quando configurados corretamente.
              </p>

              <h2>🚀 Como Começar Sua Smart Home</h2>
              <ul>
                <li><strong>Passo 1</strong>: Escolha um assistente (Alexa ou Google Assistant)</li>
                <li><strong>Passo 2</strong>: Comece com lâmpadas inteligentes (resultado imediato e visual)</li>
                <li><strong>Passo 3</strong>: Adicione tomadas smart para controlar outros aparelhos</li>
                <li><strong>Passo 4</strong>: Instale câmeras para segurança (prioridade para entrada principal)</li>
                <li><strong>Passo 5</strong>: Expanda gradualmente conforme necessidades</li>
              </ul>

              <h2>✅ Benefícios da Casa Inteligente</h2>
              <ul>
                <li>Economia de energia com automação inteligente</li>
                <li>Segurança aumentada com monitoramento 24/7</li>
                <li>Conforto e praticidade no dia a dia</li>
                <li>Controle remoto de toda a casa pelo smartphone</li>
                <li>Valorização do imóvel</li>
                <li>Acessibilidade para idosos e pessoas com mobilidade reduzida</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-foreground">Monte Sua Smart Home Ideal</h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Compare <strong>melhores marcas</strong>, <strong>melhores preços</strong> e <strong>melhores ofertas</strong> em dispositivos smart
            </p>
            <a 
              href="https://mercadolivre.com/sec/14GQgfK"
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

export default SmartHome;