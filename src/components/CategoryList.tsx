import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll mt-12 scrollbar-hidden">
      <div className="flex gap-4 md:gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => {
          return (
            <>
              <Link
                href="/list?category=test"
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                key={index}
              >
                <div className="relative bg-slate-100 w-full min-h-96">
                  <Image
                    src="https://images.pexels.com/photos/15187362/pexels-photo-15187362/free-photo-of-a-cup-of-coffee-and-a-book-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <h1 className="mt-8 font-light text-cl tracking-wide">
                  Category Name
                </h1>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
