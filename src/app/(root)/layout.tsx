import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePageLoader from "@/components/Loader/HomepageLoader";
import GsapProvider from "@/provider/GsapProvider";
import SmothScrollScrollProvider from "@/provider/SmoothScrollProvider";
import TransitionProvider from "@/provider/TransitionProvider";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GsapProvider>
        <SmothScrollScrollProvider>
          <HomePageLoader></HomePageLoader>
          <Header />
          {children}
          {/* <Footer /> */}
        </SmothScrollScrollProvider>
      </GsapProvider>
    </>
  );
}
