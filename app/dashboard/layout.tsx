import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spend Guard | Dashboard",
  description: "Building financial freedom",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  openGraph: {
    title: "Spend Guard | Dashboard",
    description: "Building financial freedom",
    url: "https://spend-guard.netlify.app/dashboard",
    siteName: "Spend Guard",
    images: [
      {
        url: "https://spend-guard.netlify.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Spend Guard | Dashboard",
    description: "Building financial freedom",
    images: [
      {
        url: "https://spend-guard.netlify.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    card: "summary_large_image",
    creator: "@leoojigbo",
    site: "@leoojigbo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen bg-[#E5E5E5]">{children}</div>
      </body>
    </html>
  );
}
