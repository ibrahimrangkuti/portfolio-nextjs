import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ibrahim Rangkuti - Portfolio</title>
      </Head>
      <Navbar />
      <div className="max-w-[800px] mx-auto my-8 px-4 md:px-0">{children}</div>
    </>
  );
};

export default Layout;
