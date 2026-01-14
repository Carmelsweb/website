import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./site/theme";
import { SiteLayout } from "./site/SiteLayout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { GalleryPage } from "./pages/Gallery";
import { HowItWorksPage } from "./pages/HowItWorks";
import { WeddingsPage } from "./pages/Weddings";
import { VowRenewalsPage } from "./pages/VowRenewals";
import { NamingPage } from "./pages/Naming";
import { CelebrationOfLifePage } from "./pages/CelebrationOfLife";
import { YourFuneralPage } from "./pages/YourFuneral";
import { FAQPage } from "./pages/FAQ";
import { ContactPage } from "./pages/Contact";
import { RecommendationsPage } from "./pages/Recommendations";
import { PrivacyPage } from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import { PaymentPolicyPage } from "./pages/PaymentPolicy";
import { CookiesPage } from "./pages/Cookies";
import { NotFoundPage } from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/weddings" element={<WeddingsPage />} />
            <Route path="/vow-renewals" element={<VowRenewalsPage />} />
            <Route path="/naming" element={<NamingPage />} />
            <Route path="/celebration-of-life" element={<CelebrationOfLifePage />} />
            <Route path="/your-funeral" element={<YourFuneralPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/payment-policy" element={<PaymentPolicyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
