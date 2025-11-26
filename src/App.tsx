import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sobre from "./pages/Sobre";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Transparencia from "./pages/Transparencia";
import BicicletasErgometricas from "./pages/BicicletasErgometricas";
import Suplementos from "./pages/Suplementos";
import SmartHome from "./pages/SmartHome";
import PetShop from "./pages/PetShop";
import PecasTrator from "./pages/PecasTrator";
import Notebooks from "./pages/Notebooks";
import TVs from "./pages/TVs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/bicicletas-ergometricas" element={<BicicletasErgometricas />} />
          <Route path="/suplementos" element={<Suplementos />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route path="/pet-shop" element={<PetShop />} />
          <Route path="/pecas-trator" element={<PecasTrator />} />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/tvs" element={<TVs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
