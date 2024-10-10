import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
      {[1, 2, 3, 4]?.map(() => {
        return (
          <>
            <Link
              href="/test"
              className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
              <div className="relative w-full h-80">
                <Image
                  src="https://images.pexels.com/photos/10828237/pexels-photo-10828237.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  fill
                  alt=""
                  sizes="25vw"
                  className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                />
                <Image
                  src="https://images.pexels.com/photos/15187362/pexels-photo-15187362/free-photo-of-a-cup-of-coffee-and-a-book-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  fill
                  alt=""
                  sizes="25vw"
                  className="absolute object-cover bg-transparent rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$30</span>
              </div>
              <div className="text-sm text-gray-500">
                This is a Description of the product, Click on the button below
              </div>
              <button className="rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-sm hover:bg-primary hover:text-white w-max">
                Add to Cart
              </button>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default ProductList;
