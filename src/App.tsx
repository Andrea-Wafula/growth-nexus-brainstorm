import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import IdeasPage from "./pages/IdeasPage";
import StrategyPage from "./pages/StrategyPage";
import EconomicImpactPage from "./pages/EconomicImpactPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/ideas" element={<Layout><IdeasPage /></Layout>} />
          <Route path="/strategy" element={<Layout><StrategyPage /></Layout>} />
          <Route path="/impact" element={<Layout><EconomicImpactPage /></Layout>} />
          <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
          <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
