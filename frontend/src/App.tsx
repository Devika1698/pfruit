import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import MoviesService from "./pages/MoviesService";
import PFWedding from "./pages/PFWedding";
import RentalServices from "./pages/RentalServices";
import Contact from "./pages/Contact";
import AdvertisingService from "./pages/AdService";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";
import RentFormPage from "./components/RentalForm";
import GalleryPage from "./pages/GalleryPage";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/movies" element={<MoviesService />} />
            <Route path="/pf-wedding" element={<PFWedding />} />
            <Route path="/services/advertising" element={<AdvertisingService />} />
            <Route path="/rental-services" element={<RentalServices />} />
            <Route path="/rent-form" element={<RentFormPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/gallery" element={<GalleryPage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;