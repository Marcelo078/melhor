import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-accent py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary-glow rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-white">
              Mais de 50 mil produtos analisados
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Encontre as{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-secondary via-secondary-hover to-accent bg-clip-text text-transparent">
                Melhores Ofertas
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/30 -skew-y-1"></span>
            </span>
            <br />
            do Mercado Livre
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Análises detalhadas, avaliações reais e comparativos completos. 
            Economize tempo e dinheiro com nossas recomendações especializadas.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">Marcas Verificadas</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Star className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Avaliações Reais</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Melhores Preços</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-white shadow-glow text-lg px-8 py-6 h-auto font-semibold transition-all duration-300 hover:scale-105"
            >
              <a href="#categorias">
                Ver Todas as Ofertas
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-md text-lg px-8 py-6 h-auto font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/sobre">
                Sobre o Projeto
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
