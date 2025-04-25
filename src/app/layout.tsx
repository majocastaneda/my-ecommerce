import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "My Ecommerce",
    template: "%s | My Ecommerce",
  },
  description: "A modern ecommerce platform built with Next.js",
  keywords: ["ecommerce", "next.js", "react", "typescript"],
  authors: [
    {
      name: "Your Name",
      url: "https://your-website.com",
    },
  ],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-website.com",
    title: "My Ecommerce",
    description: "A modern ecommerce platform built with Next.js",
    siteName: "My Ecommerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Ecommerce",
    description: "A modern ecommerce platform built with Next.js",
    creator: "@yourusername",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
