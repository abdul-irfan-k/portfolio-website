import "./globals.css";

import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Suspense } from "react";

import HomePageLoader from "@/components/Loader/HomepageLoader";
import GsapProvider from "@/provider/GsapProvider";
import SmothScrollScrollProvider from "@/provider/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Abdul Irfan",
  description: "Self-taught full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="no-scrollbar font-sans antialiased">
        <div className="w-[100vw] overflow-x-hidden ">
          <GsapProvider>
            <SmothScrollScrollProvider>
              <Suspense fallback={null}>
                <HomePageLoader />
              </Suspense>
              {children}
            </SmothScrollScrollProvider>
          </GsapProvider>
        </div>
      </body>
    </html>
  );
}
