import Footer from "@/containers/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export type MainLayoutProps = {
  children: JSX.Element;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout" id="main-layout">
      <div className="flex flex-col ">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
