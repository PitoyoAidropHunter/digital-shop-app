"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Pastikan sudah install lucide-react
import SearchInput from "../form/SearchInput/page";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="text-primary bg-secondary w-full py-5 px-6 lg:px-20 flex items-center justify-center sticky top-0 z-50 shadow-md backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl w-full">
          {/* Logo */}
          <div>
            <h1 className="font-bold text-xl lg:text-3xl">Design Kita</h1>
          </div>

          {/* Search */}
          <div className="hidden md:block ml-10">
            <SearchInput />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-medium">
            <ul className="hidden lg:flex gap-8 font-medium">
              {[
                { href: "/home", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative pb-1 ${
                      pathname === item.href
                        ? "text-indigo-600 font-semibold"
                        : ""
                    } group`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-indigo-600 transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                        pathname === item.href ? "scale-x-100" : ""
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden block text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-6 right-0 h-full w-64 bg-white text-black z-40 transition-transform duration-300 ease-in-out shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <button
            className="self-end text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          {[
            { href: "/home", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.href}
              onClick={() => setIsOpen(false)}
              href={item.href}
              className={`relative pb-1 ${
                pathname === item.href ? "text-indigo-600 font-semibold" : ""
              } group`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-indigo-600 transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                  pathname === item.href ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
          ))}

          {/* Optional: Search on mobile */}
          <div className="block md:hidden pt-4 border-t">
            <SearchInput />
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
