import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePageLoader from "@/components/Loader/HomepageLoader";
import GsapProvider from "@/provider/GsapProvider";
import SmothScrollScrollProvider from "@/provider/SmoothScrollProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GsapProvider>
        <SmothScrollScrollProvider>
          <HomePageLoader />
          <Header />
          {children}
          <Footer />
        </SmothScrollScrollProvider>
      </GsapProvider>
    </>
  );
}
