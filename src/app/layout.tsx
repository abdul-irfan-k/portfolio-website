import "./globals.css";

import type { Metadata } from "next";
import { Suspense } from "react";

import HomePageLoader from "@/components/Loader/HomepageLoader";
import GsapProvider from "@/provider/GsapProvider";
import SmothScrollScrollProvider from "@/provider/SmoothScrollProvider";

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
    <html lang="en">
      <body
        className="no-scrollbar"
        style={{ fontFamily: `"Dennis Sans", sans-serif` }}
      >
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
