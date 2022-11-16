import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const menus = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <div className="flex justify-between">
      <div>
        <a href="/">
          <h1 className="font-semibold text-2xl bg-text-gradient-primary">
            Rangkuti.
          </h1>
        </a>
      </div>
      <ul className="hidden md:flex space-x-6 text-base">
        {menus.map((menu, index) => (
          <li>
            <Link
              key={index}
              href={menu.href}
              className={`hover:bg-text-gradient-primary`}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <AiOutlineMenu size={26} className="md:hidden cursor-pointer" />
    </div>
  );
};

export default Navbar;
