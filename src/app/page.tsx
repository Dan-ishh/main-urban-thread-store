"use client";

import Slider from "@/components/Slider";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import NewArrivals from "@/components/NewArrivals";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Arrivals</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
