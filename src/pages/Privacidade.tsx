import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <p>
              A sua privacidade é importante para nós. Esta Política de Privacidade explica como 
              coletamos, usamos e protegemos suas informações quando você visita o site 
              <strong> Melhores Ofertas</strong>.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Informações que Coletamos</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">1.1 Informações Coletadas Automaticamente</h3>
            <p>
              Quando você visita nosso site, podemos coletar automaticamente certas informações, incluindo:
            </p>
            <ul className="space-y-2">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Origem do acesso (de onde você veio para nosso site)</li>
              <li>Data e hora de acesso</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">1.2 Cookies e Tecnologias Similares</h3>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência. Os cookies são 
              pequenos arquivos de texto armazenados no seu dispositivo. Você pode configurar seu 
              navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Como Usamos Suas Informações</h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul className="space-y-2">
              <li>Melhorar a experiência de navegação no site</li>
              <li>Analisar o desempenho e comportamento dos visitantes</li>
              <li>Personalizar conteúdo e recomendações</li>
              <li>Enviar comunicações relevantes (se você optar por recebê-las)</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
              para fins de marketing. Podemos compartilhar informações com:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Parceiros de Análise:</strong> Utilizamos ferramentas como Google Analytics 
                para entender como os visitantes usam nosso site
              </li>
              <li>
                <strong>Programa de Afiliados:</strong> Quando você clica em nossos links de afiliados, 
                pode ser redirecionado para o Mercado Livre, que tem sua própria política de privacidade
              </li>
              <li>
                <strong>Obrigações Legais:</strong> Quando exigido por lei ou para proteger nossos direitos
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Links de Afiliados</h2>
            <p>
              Nosso site contém links de afiliados para o Mercado Livre. Quando você clica nesses links 
              e realiza uma compra, podemos receber uma comissão. Este site não é responsável pelas 
              práticas de privacidade de sites de terceiros. Recomendamos que você leia as políticas 
              de privacidade do Mercado Livre ao fazer compras.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Segurança das Informações</h2>
            <p>
              Implementamos medidas de segurança razoáveis para proteger suas informações contra 
              acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método 
              de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul className="space-y-2">
              <li>Acessar as informações que mantemos sobre você</li>
              <li>Solicitar a correção de informações incorretas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Opor-se ao processamento de suas informações</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies de Terceiros</h2>
            <p>
              Utilizamos serviços de terceiros que podem definir cookies próprios, incluindo:
            </p>
            <ul className="space-y-2">
              <li>Google Analytics (análise de tráfego)</li>
              <li>Mercado Livre (programa de afiliados)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Menores de Idade</h2>
            <p>
              Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente 
              informações de menores. Se você acredita que coletamos informações de um menor, 
              entre em contato conosco imediatamente.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
              mudanças significativas publicando a nova política nesta página com uma data de 
              atualização revisada.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas 
              informações, entre em contato conosco.
            </p>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                e outras legislações aplicáveis de proteção de dados.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;
