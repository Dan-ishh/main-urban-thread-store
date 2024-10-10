"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./cartModal";

const NavbarMenus = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setProfileOpen((prev) => !prev);
  };
  const handleCart = () => {
    // if (!isLoggedIn) {
    //   router.push("/login");
    // }

    setCartOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between gap-4 xl:gap-6 relative">
      <Image
        src="/profile1.png"
        alt="profile"
        height={24}
        width={24}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {profileOpen && (
        <div className="absolute p-4 rounded-md bg-neutral-100 top-12 left-0 text-sm lg:text-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10">
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image src="/profile2.png" alt="profile" height={20} width={20} />
              Profile
            </div>
          </Link>

          <div className="cursor-pointer mt-4 flex items-center gap-4">
            <Image src="/logout.png" alt="logout" height={20} width={20} />
            Logout
          </div>
        </div>
      )}
      <Image
        src="/notif.png"
        alt="notif"
        height={24}
        width={24}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart1.png"
          alt="cart"
          height={24}
          width={24}
          className=""
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 text-white bg-primary rounded-full text-sm flex items-center justify-center">
          21
        </div>
      </div>
      {cartOpen && <CartModal />}
    </div>
  );
};

export default NavbarMenus;
