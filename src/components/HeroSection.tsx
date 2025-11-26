import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white mb-6">
            As <span className="underline decoration-secondary decoration-4">Melhores Ofertas</span> do Mercado Livre
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Análises detalhadas, avaliações reais e os melhores preços em produtos de qualidade. 
            Economize tempo e dinheiro com nossas recomendações especializadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-lg px-8 py-6 h-auto"
            >
              Ver Todas as Ofertas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8 py-6 h-auto"
            >
              Sobre o Projeto
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
