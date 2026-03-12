import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "./pages/Dashboard";
import Segments from "./pages/Segments";
import ChurnPrediction from "./pages/ChurnPrediction";
import CLV from "./pages/CLV";
import Recommendations from "./pages/Recommendations";
import Attribution from "./pages/Attribution";
import Journey from "./pages/Journey";
import DataUpload from "./pages/DataUpload";
import ModelTraining from "./pages/ModelTraining";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/churn" element={<ChurnPrediction />} />
          <Route path="/clv" element={<CLV />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/attribution" element={<Attribution />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/upload" element={<DataUpload />} />
          <Route path="/training" element={<ModelTraining />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
