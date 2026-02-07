import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./site/theme";
import { SiteLayout } from "./site/SiteLayout";
import { RouteFallback } from "./site/RouteFallback";

// Route-level code splitting (smaller initial JS, faster first load)
const HomePage = lazy(() => import("./pages/Home").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/About").then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import("./pages/Services").then((m) => ({ default: m.ServicesPage })));
const GalleryPage = lazy(() => import("./pages/Gallery").then((m) => ({ default: m.GalleryPage })));
const HowItWorksPage = lazy(() => import("./pages/HowItWorks").then((m) => ({ default: m.HowItWorksPage })));
const WeddingsPage = lazy(() => import("./pages/Weddings").then((m) => ({ default: m.WeddingsPage })));
const VowRenewalsPage = lazy(() => import("./pages/VowRenewals").then((m) => ({ default: m.VowRenewalsPage })));
const NamingPage = lazy(() => import("./pages/Naming").then((m) => ({ default: m.NamingPage })));
const CelebrationOfLifePage = lazy(() => import("./pages/CelebrationOfLife").then((m) => ({ default: m.CelebrationOfLifePage })));
const YourFuneralPage = lazy(() => import("./pages/YourFuneral").then((m) => ({ default: m.YourFuneralPage })));
const FAQPage = lazy(() => import("./pages/FAQ").then((m) => ({ default: m.FAQPage })));
const ContactPage = lazy(() => import("./pages/Contact").then((m) => ({ default: m.ContactPage })));
const RecommendationsPage = lazy(() => import("./pages/Recommendations").then((m) => ({ default: m.RecommendationsPage })));
const PrivacyPage = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import("./pages/Terms").then((m) => ({ default: m.TermsPage })));
const PaymentPolicyPage = lazy(() => import("./pages/PaymentPolicy").then((m) => ({ default: m.PaymentPolicyPage })));
const CookiesPage = lazy(() => import("./pages/Cookies").then((m) => ({ default: m.CookiesPage })));
const NotFoundPage = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFoundPage })));

export default function App() {
  useEffect(() => {
    const warmRoutes = () => {
      void import("./pages/About");
      void import("./pages/Services");
      void import("./pages/Gallery");
      void import("./pages/Contact");
      void import("./pages/FAQ");
    };

    const timeout = window.setTimeout(warmRoutes, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
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
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
