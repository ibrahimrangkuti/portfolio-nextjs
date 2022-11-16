import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[800px] mx-auto my-8 px-4 md:px-0">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
