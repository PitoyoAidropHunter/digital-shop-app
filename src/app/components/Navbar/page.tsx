"use client";
import Link from "next/link";
import SearchInput from "../form/SearchInput/page";

const Navbar = () => {
  return (
    <>
      <nav className="text-primary bg-secondary w-full py-5 px-10 lg:px-20 flex items-center justify-center">
        <div className="flex items-center justify-between max-w-7xl w-full">
          {/* logo */}
          <div className="leading-0">
            <h1 className="font-bold text-3xl">EmJeKa</h1>
            <p>Digital Products</p>
          </div>

          {/* search engine */}
          <div className="lg:ml-0 ml-10">
            <SearchInput />
          </div>

          {/* menu */}
          <div>
            <ul className="lg:flex hidden gap-8 ">
              <li>
                <Link href={"/home"}>Home</Link>
              </li>
              <li>
                <Link href={""}>Products</Link>
              </li>
              <li>
                <Link href={""}>About Us</Link>
              </li>
              <li>
                <Link href={""}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
