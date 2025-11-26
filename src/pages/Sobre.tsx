import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Award, Users, Shield } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="mb-8">Sobre Nós</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              O <strong>Melhores Ofertas</strong> nasceu da necessidade de facilitar a vida de quem busca 
              produtos de qualidade no Mercado Livre, mas se perde em meio a tantas opções disponíveis.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Simplificar o processo de compra online através de análises honestas, 
                    detalhadas e baseadas em dados reais de produtos e avaliações de consumidores.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nossos Valores</h3>
                  <p className="text-muted-foreground">
                    Transparência, qualidade e compromisso com a verdade. Analisamos produtos 
                    considerando avaliações reais, procedência e custo-benefício.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nossa Equipe</h3>
                  <p className="text-muted-foreground">
                    Contamos com especialistas em diversas áreas: tecnologia, esportes, 
                    casa inteligente, nutrição e muito mais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compromisso</h3>
                  <p className="text-muted-foreground">
                    Mantemos a independência editorial e sempre indicamos quando um link é de afiliado, 
                    garantindo total transparência com nossos leitores.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Como Trabalhamos</h2>
            <p>
              Nosso processo de análise é rigoroso e metódico. Para cada produto destacado em nosso site:
            </p>
            <ol className="space-y-4 my-6">
              <li>
                <strong>Pesquisa de Mercado:</strong> Identificamos os produtos mais vendidos e 
                bem avaliados em cada categoria.
              </li>
              <li>
                <strong>Análise de Avaliações:</strong> Lemos centenas de avaliações reais de 
                compradores para entender prós e contras.
              </li>
              <li>
                <strong>Verificação de Procedência:</strong> Checamos a reputação das marcas e 
                vendedores, garantindo confiabilidade.
              </li>
              <li>
                <strong>Comparativo de Preços:</strong> Monitoramos histórico de preços para 
                identificar ofertas genuínas.
              </li>
              <li>
                <strong>Especificações Técnicas:</strong> Analisamos detalhadamente as 
                características de cada produto.
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4">Programa de Afiliados</h2>
            <p>
              Somos parceiros afiliados do Mercado Livre. Isso significa que podemos receber uma 
              comissão por compras realizadas através dos nossos links, <strong>sem nenhum custo 
              adicional para você</strong>. Esta parceria nos permite continuar produzindo conteúdo 
              de qualidade gratuitamente.
            </p>
            <p>
              É importante destacar que nossa participação no programa de afiliados não influencia 
              nossas análises. Mantemos total independência editorial e só recomendamos produtos que 
              realmente acreditamos serem de qualidade.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Entre em Contato</h2>
            <p>
              Tem alguma dúvida, sugestão ou gostaria de ver a análise de um produto específico? 
              Estamos sempre abertos ao feedback da nossa comunidade.
            </p>
            <p className="text-muted-foreground italic">
              Este projeto é mantido de forma independente e busca sempre oferecer o melhor 
              conteúdo para nossos leitores.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
