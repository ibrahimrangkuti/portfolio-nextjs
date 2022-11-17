import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Navbar = () => {
  const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();
    if (theme === "light") {
      return (
        <BsFillMoonFill
          className="cursor-pointer"
          size={20}
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <BsFillSunFill
          className="cursor-pointer"
          size={20}
          onClick={() => setTheme("light")}
        />
      );
    }
  };

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

  const { asPath } = useRouter();

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
                  className={`${
                    asPath === menu.href
                      ? "font-semibold bg-text-gradient-primary"
                      : ""
                  } hover:bg-text-gradient-primary`}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 items-center">
            <ThemeChanger />
            <AiOutlineMenu size={26} className="md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
