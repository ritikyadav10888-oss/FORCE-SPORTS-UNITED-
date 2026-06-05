import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Corporate from "./pages/Corporate";
import Community from "./pages/Community";
import Government from "./pages/Government";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SplashScreen />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/community" element={<Community />} />
          <Route path="/government" element={<Government />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
