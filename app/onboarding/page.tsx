import OnboardingComponent from "@/components/OnboardingComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spend Guard | Onboarding",
  description: "Spend Guard onboarding page",
  keywords: ["Spend Guard", "onboarding", "budgeting"],
  robots: "noindex, nofollow",
  openGraph: {
    title: "Spend Guard | Onboarding",
    description: "Spend Guard onboarding page",
    url: "https://spend-guard.com/onboarding",
    type: "website",
    images: [
      {
        url: "https://spend-guard.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spend Guard Onboarding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spend Guard | Onboarding",
    description: "Spend Guard onboarding page",
    creator: "@leoojigbo",
    site: "@leoojigbo",
    images: ["https://spend-guard.com/og-image.png"],
  },
};
const Onboarding = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white px-4 py-16">
      <OnboardingComponent />
    </section>
  );
};

export default Onboarding;
