import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spend Guard | Home",
  description: "Building financial freedom",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  openGraph: {
    title: "Spend Guard | Home",
    description: "Building financial freedom",
    url: "https://spend-guard.netlify.app/",
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
    title: "Spend Guard | Home",
    description: "Building financial freedom",
    card: "summary_large_image",
    images: ["https://spend-guard.netlify.app/og.png"],
    creator: "@leoojigbo",
    site: "https://spend-guard.netlify.app/",
    creatorId: "@leoojigbo",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
  metadataBase: new URL("https://spend-guard.netlify.app/"),

  colorScheme: "light",
  appleWebApp: {
    title: "Spend Guard | Home",
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
