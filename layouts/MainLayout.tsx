import Footer from "@/containers/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export type MainLayoutProps = {
  children: JSX.Element;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout" id="main-layout">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col">
          <div className="container mx-auto flex-1 flex flex-col">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
