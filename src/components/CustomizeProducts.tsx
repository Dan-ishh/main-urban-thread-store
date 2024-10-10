"use client";
import React from "react";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Available Colors</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 ring ring-gray-200 rounded-full cursor-pointer relative bg-green-300">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 ring ring-gray-200 rounded-full cursor-pointer relative bg-blue-300"></li>
        <li className="w-8 h-8 ring ring-gray-200 rounded-full cursor-not-allowed relative bg-yellow-300">
          <div className="absolute w-10 h-[2px] bg-red-700 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Sizes</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-primary text-primary rounded-md py-1 px-4 text-sm cursor-pointer">
          small
        </li>
        <li className="ring-1 ring-primary text-white bg-primary rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-gray-400 text-white bg-gray-200  rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
