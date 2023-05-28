"use client";

import React from "react";
import ThemeChanger from "@/lib/ThemeChanger";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", href: "/" },
    // { title: "Blog", href: "/blog" },
    // { title: "Projects", href: "/projects" },
    { title: "Contacts", href: "/contacts" },
  ];

  return (
    <header className="mb-10">
      <ul className="flex items-center">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={index}
              className={`pr-4 ${isActive ? "font-bold" : "font-normal"}`}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
        <li className="cursor-pointer ml-auto">
          <ThemeChanger />
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
