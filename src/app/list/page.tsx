import React from "react";
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="bg-teal-50 px-2 xl:px-4 flex justify-between h-64 rounded-lg">
        <div className="w-2/4 md:2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-md md:text-xl  xl:text-4xl font-semibold leading-[48px] text-gray-700">
            Up to 70% off, Grab <br /> your favourites!
          </h1>
          <button className="rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-sm hover:bg-primary hover:text-white w-max">
            Buy now
          </button>
        </div>
        <div className="relative w-2/4 md:w-1/3">
          <Image
            src="/model.png"
            alt=""
            fill
            // height={}
            // width={}
            className="object-cover md:object-contain"
          />
        </div>
      </div>

      {/* FILTER COMPONENT */}
      <Filter />

      <h1 className="text-2xl mt-12 font-semibold">Clothes for you!</h1>
      {/* PRODUCT */}
      <ProductList />
    </div>
  );
};

export default ListPage;
