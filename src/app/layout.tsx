import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nithish — AI & Machine Learning Engineer Portfolio",
  description: "Personal portfolio and engineering identity of Nithish, an AI/ML Engineer specializing in Large Language Models, RAG Architectures, Fine-Tuning, and High-Throughput Inference Infrastructure.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Architecture",
    "RAG",
    "PyTorch",
    "vLLM",
    "Qdrant",
    "FastAPI",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Nithish" }],
  openGraph: {
    title: "Nithish — AI & Machine Learning Engineer",
    description: "Designing Scalable AI Architecture, Fine-Tuning LLMs & Building High-Performance Inference Systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#09090b] text-neutral-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
