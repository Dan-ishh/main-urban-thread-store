import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Searchbar from "./Searchbar";
import dynamic from "next/dynamic";
// import NavbarMenus from "./NavbarMenus";

const NavbarMenus = dynamic(() => import("./NavbarMenus"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* FOR MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl tracking-wide"
        >
          <Image
            src="/shop.png"
            alt="menu"
            height={24}
            width={24}
            className="cursor-pointer"
          />
          Urban Thead
        </Link>
        <Menu />
      </div>

      {/* LARGE */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl tracking-wide"
          >
            <Image
              src="/shop.png"
              alt="menu"
              height={24}
              width={24}
              className="cursor-pointer"
            />
            Urban Thead
          </Link>

          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Searchbar />
          <NavbarMenus />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
