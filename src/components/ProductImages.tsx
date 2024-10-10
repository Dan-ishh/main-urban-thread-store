"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 0,
    src: "https://images.pexels.com/photos/1887975/pexels-photo-1887975.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 1,
    src: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          //   src="https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=800"
          src={images[index]?.src}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-4 mt-2">
        {images?.map((img, index) => {
          return (
            <div
              className="w-1/4 h-32 gap-4 mt-8 relative cursor-pointer"
              key={index}
              onClick={() => setIndex(index)}
            >
              <Image
                src={img?.src}
                alt=""
                fill
                className="object-cover rounded-md"
                sizes="50vw"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
