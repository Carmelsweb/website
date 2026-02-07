import { waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutPage } from "./About";
import { CelebrationOfLifePage } from "./CelebrationOfLife";
import { ContactPage } from "./Contact";
import { CookiesPage } from "./Cookies";
import { FAQPage } from "./FAQ";
import { GalleryPage } from "./Gallery";
import { HomePage } from "./Home";
import { HowItWorksPage } from "./HowItWorks";
import { NamingPage } from "./Naming";
import { NotFoundPage } from "./NotFound";
import { PaymentPolicyPage } from "./PaymentPolicy";
import { PrivacyPage } from "./Privacy";
import { RecommendationsPage } from "./Recommendations";
import { ServicesPage } from "./Services";
import { TermsPage } from "./Terms";
import { VowRenewalsPage } from "./VowRenewals";
import { WeddingsPage } from "./Weddings";
import { YourFuneralPage } from "./YourFuneral";
import { renderWithProviders } from "../test/test-utils";

const pageCases = [
  { name: "HomePage", component: <HomePage />, title: "Ceremonies crafted with heart | West Coast Celebrants" },
  { name: "AboutPage", component: <AboutPage />, title: "About Carmel | West Coast Celebrants" },
  { name: "ServicesPage", component: <ServicesPage />, title: "Services | West Coast Celebrants" },
  { name: "GalleryPage", component: <GalleryPage />, title: "Gallery | West Coast Celebrants" },
  { name: "HowItWorksPage", component: <HowItWorksPage />, title: "How it works | West Coast Celebrants" },
  { name: "RecommendationsPage", component: <RecommendationsPage />, title: "Recommendations | West Coast Celebrants" },
  { name: "WeddingsPage", component: <WeddingsPage />, title: "Weddings | West Coast Celebrants" },
  { name: "VowRenewalsPage", component: <VowRenewalsPage />, title: "Wedding vow renewals | West Coast Celebrants" },
  { name: "NamingPage", component: <NamingPage />, title: "Naming ceremonies | West Coast Celebrants" },
  { name: "CelebrationOfLifePage", component: <CelebrationOfLifePage />, title: "Celebration of life | West Coast Celebrants" },
  { name: "YourFuneralPage", component: <YourFuneralPage />, title: "Writing your own funeral | West Coast Celebrants" },
  { name: "FAQPage", component: <FAQPage />, title: "FAQ | West Coast Celebrants" },
  { name: "ContactPage", component: <ContactPage />, title: "Check availability | West Coast Celebrants" },
  { name: "PrivacyPage", component: <PrivacyPage />, title: "Privacy policy | West Coast Celebrants" },
  { name: "TermsPage", component: <TermsPage />, title: "Terms of service | West Coast Celebrants" },
  { name: "PaymentPolicyPage", component: <PaymentPolicyPage />, title: "Payment policy | West Coast Celebrants" },
  { name: "CookiesPage", component: <CookiesPage />, title: "Cookie policy | West Coast Celebrants" },
  { name: "NotFoundPage", component: <NotFoundPage />, title: "Page not found | West Coast Celebrants" },
];

describe("page smoke coverage", () => {
  it.each(pageCases)("renders $name without crashing", async ({ component, title }) => {
    const view = renderWithProviders(component);
    expect(view.container.firstChild).not.toBeNull();

    await waitFor(() => {
      expect(document.title).toBe(title);
    });
  });
});
