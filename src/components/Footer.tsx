import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Melhores Ofertas</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              As melhores análises e ofertas de produtos do Mercado Livre. 
              Qualidade, procedência e avaliações reais.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-bold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/bicicletas-ergometricas" className="text-muted-foreground hover:text-primary transition-colors">
                  Bicicletas Ergométricas
                </Link>
              </li>
              <li>
                <Link to="/suplementos" className="text-muted-foreground hover:text-primary transition-colors">
                  Suplementos
                </Link>
              </li>
              <li>
                <Link to="/casa-inteligente" className="text-muted-foreground hover:text-primary transition-colors">
                  Casa Inteligente
                </Link>
              </li>
              <li>
                <Link to="/notebooks" className="text-muted-foreground hover:text-primary transition-colors">
                  Notebooks
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-muted-foreground hover:text-primary transition-colors">
                  Transparência
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclosure */}
          <div>
            <h3 className="font-bold mb-4">Isenção de Responsabilidade</h3>
            <p className="text-xs text-muted-foreground">
              Este site contém links de afiliados. Podemos receber comissão por compras 
              realizadas através dos nossos links, sem custo adicional para você.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Melhores Ofertas. Todos os direitos reservados.</p>
          <p className="mt-2">
            Parceiro afiliado do Mercado Livre Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
