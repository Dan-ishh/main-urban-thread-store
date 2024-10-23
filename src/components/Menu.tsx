"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/hooks/useCartStore";
import CartModal from "./CartModal";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart, counter, getCart } = useCartStore();
  return (
    <div>
      <Image
        src={open ? "/close2.png" : "/menu1.png"}
        alt="menu"
        height={24}
        width={24}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="absolute bg-neutral-900 text-white left-0 top-20 w-full h=[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 py-10">
          <Link href="/">Home</Link>
          <Link href="/list?cat=all-products">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/login">Login</Link>
          {/* <Link href="/">Cart(1)</Link> */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <Image
              src="/cart1.png"
              alt="cart"
              height={50}
              width={50}
              className="bg-white p-2 rounded-full"
            />
            <div className="absolute -top-4 -right-4 w-6 h-6 text-white bg-primary rounded-full text-sm flex items-center justify-center">
              {counter}
            </div>
          </div>
          {/* {isCartOpen && <CartModal />} */}
        </div>
      )}
    </div>
  );
};

export default Menu;
