import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky h-max top-20">
        <ProductImages />
      </div>

      {/* DES */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1
          className="text-4xl font-medium
        "
        >
          Product Name
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          praesentium officiis fugit provident accusamus, neque libero id, ea at
          officia reiciendis error, aut nam voluptatum sint rem earum magni
          optio.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$45</h3>
          <h2 className="font-medium text-2xl">$35</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam
            ipsam saepe temporibus nulla, ipsa voluptatibus ea accusantium,
            itaque nemo culpa facilis odio tempora quis magni minima tenetur
            cupiditate nobis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam
            ipsam saepe temporibus nulla, ipsa voluptatibus ea accusantium,
            itaque nemo culpa facilis odio tempora quis magni minima tenetur
            cupiditate nobis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam
            ipsam saepe temporibus nulla, ipsa voluptatibus ea accusantium,
            itaque nemo culpa facilis odio tempora quis magni minima tenetur
            cupiditate nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
