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
    <div className="border-b border-slate-200">
      <div className="max-w-[800px] mx-auto my-8 px-4 md:px-0">
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <h1 className="font-semibold text-2xl bg-text-gradient-primary">
                Rangkuti.
              </h1>
            </Link>
          </div>
          <ul className="hidden md:flex space-x-6 text-base">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
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
      </div>
    </div>
  );
};

export default Navbar;
