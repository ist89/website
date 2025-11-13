import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedGradient } from "@/components/background/AnimatedGradient";
import { getSiteUrl } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tom Davidov — Software Engineer",
    template: "Tom Davidov — %s",
  },
  description:
    "Professional portfolio of Tom Davidov. Software engineer, developer, and technology enthusiast.",
  keywords: ["Tom Davidov", "Software Engineer", "Developer", "Portfolio"],
  authors: [{ name: "Tom Davidov" }],
  creator: "Tom Davidov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getSiteUrl(),
    siteName: "Tom Davidov",
    title: "Tom Davidov — Software Engineer",
    description:
      "Professional portfolio of Tom Davidov. Software engineer, developer, and technology enthusiast.",
    images: [
      {
        url: `${getSiteUrl()}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tom Davidov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Davidov — Software Engineer",
    description:
      "Professional portfolio of Tom Davidov. Software engineer, developer, and technology enthusiast.",
    images: [`${getSiteUrl()}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(getSiteUrl()),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased bg-background text-text-primary`}
      >
        <AnimatedGradient />
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

