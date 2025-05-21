import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="pt-[calc(var(--height-nav)+16px)] px-2 md:px-5">{props.children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
