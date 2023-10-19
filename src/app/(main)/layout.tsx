import Footer from "@/components/main/footer";
import Header from "@/components/main/header/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
        <main className="relative">
          {children}
        </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
