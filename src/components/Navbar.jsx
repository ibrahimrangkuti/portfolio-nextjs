import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-semibold text-2xl bg-text-gradient-primary">
          Rangkuti.
        </h1>
      </div>
      <ul className="hidden md:flex space-x-6 text-base">
        <li>
          <a href="" className="hover:bg-text-gradient-primary">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:bg-text-gradient-primary">
            Portfolio
          </a>
        </li>
        <li>
          <a href="" className="hover:bg-text-gradient-primary">
            Blog
          </a>
        </li>
        <li>
          <a href="" className="hover:bg-text-gradient-primary">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
