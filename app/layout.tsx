import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandu | Data Engineering & AI Enthusiast",
  description:
    "Portfolio of Chandu — a developer interested in data engineer, artificial intelligence, Linux, and building useful technology.",
  applicationName: "Chandu Portfolio",
  keywords: [
    "Chandu",
    "Data Engineering",
    "Artificial Intelligence",
    "Developer Portfolio",
    "Next.js",
    "LearnX OS",
    "MedGen",
  ],
  openGraph: {
    title: "Chandu | Data Engineering & AI Enthusiast",
    description:
      "Projects, skills, and experiments at the intersection of data, AI, and software.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandu | Data Engineering & AI Enthusiast",
    description: "Projects, skills, and experiments in data engineering and AI.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
