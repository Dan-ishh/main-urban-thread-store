"use client";
import React, { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  //   TEMPORARY

  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium">Quantity</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div>
            Only <span className="text-orange-500 font-bold underline">4 </span>{" "}
            left! <br />
            {"Grab"} before it's too late
          </div>
        </div>

        <button className="rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-sm hover:bg-primary hover:text-white w-max disabled:cursor-not-allowed disabled:text-white disabled:bg-gray-200 disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
