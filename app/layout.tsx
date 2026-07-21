import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cascadiaLocal = localFont({
  src: [
    {
      path: "../public/fonts/CascadiaCode_VTT.ttf",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../public/fonts/CascadiaCodeItalic_VTT.ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Dmytro Farbun | Fullstack Developer",
  description: "High-performance fullstack engineering portfolio.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Dmytro Farbun" }],

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    title: "Dmytro Farbun | Fullstack Developer Portfolio",
    description:
      "Explore clean code architecture, modern tech stack implementations, and live interaction analytics.",
    url: "http://localhost:3000",
    siteName: "Dmytro Farbun Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Dmytro Farbun Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dmytro Farbun | Fullstack Developer Portfolio",
    description: "High-performance fullstack engineering portfolio.",
    images: ["/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cascadiaLocal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
