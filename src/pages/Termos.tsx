import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Termos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <p>
              Bem-vindo ao <strong>Melhores Ofertas</strong>. Ao acessar e usar este site, você concorda 
              em cumprir e estar sujeito aos seguintes termos e condições de uso.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos termos e 
              condições desta política. Se você não concordar com alguma parte destes termos, não 
              deve usar nosso site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Descrição do Serviço</h2>
            <p>
              O <strong>Melhores Ofertas</strong> é um site de análise e recomendação de produtos 
              disponíveis no Mercado Livre. Fornecemos:
            </p>
            <ul className="space-y-2">
              <li>Análises detalhadas de produtos</li>
              <li>Comparativos de preços e especificações</li>
              <li>Recomendações baseadas em avaliações de consumidores</li>
              <li>Links de afiliados para produtos no Mercado Livre</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Programa de Afiliados</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">3.1 Divulgação de Afiliação</h3>
            <p>
              Este site participa do programa de afiliados do Mercado Livre. Quando você clica em 
              nossos links e realiza uma compra, podemos receber uma comissão <strong>sem custo 
              adicional para você</strong>.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3.2 Independência Editorial</h3>
            <p>
              Nossa participação no programa de afiliados não influencia nossas recomendações ou 
              análises. Mantemos independência editorial e só recomendamos produtos que acreditamos 
              serem de qualidade.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Isenção de Responsabilidade</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">4.1 Conteúdo Informativo</h3>
            <p>
              O conteúdo deste site é fornecido apenas para fins informativos. Não somos responsáveis 
              por decisões de compra baseadas em nossas análises e recomendações.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">4.2 Precisão das Informações</h3>
            <p>
              Embora nos esforcemos para fornecer informações precisas e atualizadas:
            </p>
            <ul className="space-y-2">
              <li>Preços, disponibilidade e especificações podem mudar sem aviso prévio</li>
              <li>Não garantimos a precisão de todas as informações de terceiros</li>
              <li>Recomendamos verificar todas as informações diretamente com o vendedor</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">4.3 Sites de Terceiros</h3>
            <p>
              Nosso site contém links para sites de terceiros (principalmente Mercado Livre). Não 
              somos responsáveis pelo conteúdo, políticas ou práticas desses sites. O uso de sites 
              de terceiros está sujeito aos seus próprios termos e condições.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens e software, 
              é propriedade do <strong>Melhores Ofertas</strong> ou de seus fornecedores de conteúdo 
              e está protegido por leis de direitos autorais.
            </p>
            <p>Você não pode:</p>
            <ul className="space-y-2">
              <li>Reproduzir, distribuir ou modificar nosso conteúdo sem permissão</li>
              <li>Usar nosso conteúdo para fins comerciais sem autorização</li>
              <li>Remover avisos de direitos autorais ou marcas registradas</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Uso Aceitável</h2>
            <p>Ao usar nosso site, você concorda em NÃO:</p>
            <ul className="space-y-2">
              <li>Violar qualquer lei ou regulamento aplicável</li>
              <li>Transmitir vírus, malware ou qualquer código malicioso</li>
              <li>Tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
              <li>Interferir ou interromper o funcionamento do site</li>
              <li>Coletar informações de outros usuários sem consentimento</li>
              <li>Usar o site para fins fraudulentos ou enganosos</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitação de Responsabilidade</h2>
            <p>
              Na máxima extensão permitida pela lei aplicável, o <strong>Melhores Ofertas</strong> 
              não será responsável por:
            </p>
            <ul className="space-y-2">
              <li>Danos diretos, indiretos, incidentais ou consequenciais</li>
              <li>Perda de lucros, receitas, dados ou uso</li>
              <li>Interrupção de negócios</li>
              <li>Qualquer dano resultante do uso ou incapacidade de usar nosso site</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Garantias</h2>
            <p>
              O site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, 
              expressas ou implícitas, incluindo:
            </p>
            <ul className="space-y-2">
              <li>Garantias de comercialização</li>
              <li>Adequação a um propósito específico</li>
              <li>Não violação</li>
              <li>Disponibilidade ininterrupta ou livre de erros</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Modificações do Serviço</h2>
            <p>
              Reservamos o direito de modificar ou descontinuar, temporária ou permanentemente, 
              o site (ou qualquer parte dele) com ou sem aviso prévio. Não seremos responsáveis 
              por qualquer modificação, suspensão ou descontinuação do serviço.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Alterações nos Termos</h2>
            <p>
              Podemos revisar estes Termos de Uso a qualquer momento, atualizando esta página. 
              Seu uso continuado do site após mudanças constitui aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa 
              relacionada a estes termos será resolvida nos tribunais brasileiros.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco.
            </p>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Aviso Importante:</strong> Este site é independente e não é afiliado, associado, 
                autorizado, endossado ou de qualquer forma oficialmente conectado ao Mercado Livre ou 
                qualquer uma de suas subsidiárias. Todas as marcas mencionadas são propriedade de seus 
                respectivos donos.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Termos;
