"use client";
import React, { useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  // // TEMPORARY
  // const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const { addItem, isLoading } = useCartStore();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium">Quantity</h1>
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className={`cursor-pointer text-xl ${
                quantity === 1 ? "cursor-not-allowed opacity-40" : ""
              }`}
              onClick={() => handleQuantity("d")}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className={`cursor-pointer text-xl ${
                quantity === stockNumber ? "cursor-not-allowed opacity-40" : ""
              }`}
              onClick={() => handleQuantity("i")}
              disabled={quantity === stockNumber}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-xs">
              Only{" "}
              <span className="text-orange-500 underline font-bold">
                {stockNumber}
              </span>{" "}
              left!
              <br /> {"Grab"} it before it goes!
            </div>
          )}
        </div>

        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading || !variantId}
          className="rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-sm hover:bg-primary hover:text-white w-max disabled:text-white disabled:bg-gray-600 disabled:ring-none disabled:cursor-not-allowed disabled:ring-gray-600 disabled:opacity-75 mt-4 sm:mt-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
