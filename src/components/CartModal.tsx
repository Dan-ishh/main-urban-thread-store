"use client";

import React from "react";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute w-max  p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty!!!</div>
      ) : (
        <>
          <h2 className="text-xl">Your Cart!</h2>
          {/* Item List */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/17615006/pexels-photo-17615006/free-photo-of-a-woman-in-a-floral-robe-standing-in-front-of-a-white-backdrop.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product X</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$30</div>
                  </div>

                  <div className="text-sm text-gray-500">Available</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-red-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-between font-semibold text-sm">
              <span>Subtotal</span>
              <span>$30</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 text-white bg-black">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
