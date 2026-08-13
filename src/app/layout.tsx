import type { Metadata } from "next";
import { Syncopate, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-futuristic",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HACKRIT 2026 · DEVX 2.0 | GDG On Campus Techno India University",
  description:
    "Build. Innovate. Connect. Join HACKRIT 2026, the official 24-hour flagship hackathon of DEVX 2.0 organized by School of the Future X GDG On Campus Techno India University.",
  keywords: [
    "HACKRIT 2026",
    "DEVX 2.0",
    "GDG Techno India University",
    "Google Developer Groups",
    "Hackathon Kolkata",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
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
      className={`${syncopate.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="bg-black text-white antialiased min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
