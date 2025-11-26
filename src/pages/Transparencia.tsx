import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DollarSign, TrendingUp, Award, Shield } from "lucide-react";

const Transparencia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="mb-8">Transparência e Isenção de Responsabilidade</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-muted-foreground">
              Acreditamos em total transparência com nossos leitores. Esta página explica como 
              funciona nosso modelo de negócios e como mantemos a qualidade das nossas recomendações.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <DollarSign className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Como Ganhamos Dinheiro</h3>
                <p className="text-sm text-muted-foreground">
                  Participamos do programa de afiliados do Mercado Livre. Quando você clica em nossos 
                  links e faz uma compra, recebemos uma pequena comissão sem custo extra para você.
                </p>
              </div>

              <div className="bg-success/10 p-6 rounded-lg border border-success/20">
                <Shield className="h-8 w-8 text-success mb-4" />
                <h3 className="text-xl font-bold mb-2">Independência Editorial</h3>
                <p className="text-sm text-muted-foreground">
                  Nossas análises e recomendações são 100% independentes. A comissão de afiliados 
                  não influencia nossa avaliação dos produtos.
                </p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
                <Award className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Critérios de Seleção</h3>
                <p className="text-sm text-muted-foreground">
                  Selecionamos produtos baseados em avaliações de consumidores, especificações técnicas, 
                  reputação da marca e custo-benefício.
                </p>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                <TrendingUp className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Atualizações Constantes</h3>
                <p className="text-sm text-muted-foreground">
                  Monitoramos constantemente preços, disponibilidade e novas avaliações para manter 
                  nossas recomendações atualizadas.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Nosso Compromisso com Você</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. Análises Honestas</h3>
            <p>
              Todas as nossas análises são baseadas em pesquisa extensiva, incluindo:
            </p>
            <ul className="space-y-2">
              <li>Leitura de centenas de avaliações reais de compradores</li>
              <li>Análise detalhada de especificações técnicas</li>
              <li>Comparação com produtos similares no mercado</li>
              <li>Verificação de histórico de preços e ofertas</li>
              <li>Checagem da reputação de marcas e vendedores</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">2. Sem Recomendações Pagas</h3>
            <p>
              <strong>Importante:</strong> Não aceitamos pagamento de marcas ou vendedores para 
              destacar produtos. Todas as recomendações são baseadas exclusivamente em mérito próprio 
              e análise objetiva.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">3. Divulgação Clara</h3>
            <p>
              Sempre que um link é de afiliado, deixamos isso claro. Você nunca será enganado sobre 
              a natureza comercial de nossos links.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">4. Prós e Contras Equilibrados</h3>
            <p>
              Não escondemos problemas ou limitações de produtos. Apresentamos tanto os pontos positivos 
              quanto negativos para ajudar você a tomar uma decisão informada.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Como Funcionam os Links de Afiliados</h2>
            <div className="bg-muted p-6 rounded-lg">
              <ol className="space-y-4">
                <li>
                  <strong>Você clica em um link</strong> para o Mercado Livre em nosso site
                </li>
                <li>
                  <strong>Um cookie é definido</strong> no seu navegador identificando que você veio 
                  do nosso site
                </li>
                <li>
                  <strong>Você faz uma compra</strong> no Mercado Livre (o preço é exatamente o mesmo 
                  que se você fosse direto)
                </li>
                <li>
                  <strong>Recebemos uma pequena comissão</strong> do Mercado Livre pela indicação
                </li>
                <li>
                  <strong>Esta comissão nos permite</strong> continuar produzindo conteúdo gratuito 
                  e de qualidade
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">O Que Não Fazemos</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✗</span>
                <span>Não manipulamos rankings para favorecer produtos com maior comissão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✗</span>
                <span>Não ocultamos informações negativas sobre produtos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✗</span>
                <span>Não aceitamos pagamento para melhorar avaliações</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✗</span>
                <span>Não vendemos suas informações pessoais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✗</span>
                <span>Não criamos avaliações falsas ou enganosas</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Isenção de Responsabilidade</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg">
              <p className="font-bold mb-4">Por favor, leia atentamente:</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Decisões de Compra:</strong> As decisões finais de compra são de sua 
                  responsabilidade. Nossas análises são opinativas e informativas.
                </li>
                <li>
                  <strong>Variações de Produto:</strong> Especificações, preços e disponibilidade 
                  podem variar. Sempre verifique as informações no Mercado Livre antes de comprar.
                </li>
                <li>
                  <strong>Experiências Individuais:</strong> Sua experiência com um produto pode 
                  diferir das nossas análises e das avaliações de outros compradores.
                </li>
                <li>
                  <strong>Sites de Terceiros:</strong> Não somos responsáveis pelo conteúdo, políticas 
                  ou serviços do Mercado Livre ou outros sites de terceiros.
                </li>
                <li>
                  <strong>Garantias e Devoluções:</strong> Questões relacionadas a garantia, devolução 
                  ou suporte devem ser tratadas diretamente com o vendedor ou Mercado Livre.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Atualizações e Correções</h2>
            <p>
              Se você identificar informações incorretas ou desatualizadas em nosso site, por favor, 
              entre em contato conosco. Levamos a precisão a sério e faremos correções prontamente.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Contato</h2>
            <p>
              Dúvidas sobre nossa política de transparência? Entre em contato conosco. Estamos 
              comprometidos em manter a confiança dos nossos leitores.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mt-8 border border-primary/20">
              <p className="text-sm">
                <strong>Última atualização desta página:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                Revisamos e atualizamos esta página regularmente para refletir nossas práticas atuais.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Transparencia;
