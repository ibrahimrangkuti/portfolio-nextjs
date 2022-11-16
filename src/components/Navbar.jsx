import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

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
              href={menu.href}
              className={`hover:bg-text-gradient-primary`}
              className={router.pathname === menu.href ? "active" : ""}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
