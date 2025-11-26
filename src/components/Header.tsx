import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "Bicicletas Ergométricas", path: "/bicicletas-ergometricas" },
    { name: "Suplementos", path: "/suplementos" },
    { name: "Casa Inteligente", path: "/casa-inteligente" },
    { name: "Pet Shop", path: "/pet-shop" },
    { name: "Peças de Trator", path: "/pecas-trator" },
    { name: "Notebooks", path: "/notebooks" },
    { name: "TVs", path: "/tvs" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                Melhores Ofertas
              </span>
              <span className="text-xs text-muted-foreground">Mercado Livre</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
