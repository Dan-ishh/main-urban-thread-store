"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Superhero T-Shirt Collections",
    description: "Sale! Up to 50% off!",
    img: "/img_hero.png",
    url: "/",
    bg: "bg-gradient-to-r from-green-50 to-blue-100",
  },
  {
    id: 2,
    title: "Oversized Shirt Collections",
    description: "Sale! Up to 50% off!",
    img: "/img_shirt.png",
    url: "/",
    bg: "bg-gradient-to-r from-orange-50 to-gray-100",
  },
  {
    id: 3,
    title: "Oversized T-Shirt Collections",
    description: "Sale! Up to 50% off!",
    img: "/img_tshirt.png",
    url: "/",
    bg: "bg-gradient-to-r from-red-50 to-teal-100",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides?.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translate(-${current * 100}vw)` }}
      >
        {slides &&
          slides?.map((item, index) => {
            return (
              <div
                className={`${item?.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                key={index}
              >
                {/* TEXT CONTAINER */}
                <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center mt-4">
                  <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                    {item?.description}
                  </h2>
                  <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                    {item?.title}
                  </h1>
                  <Link href={item?.url}>
                    <button className="rounded-md bg-black text-white py-3 px-4">
                      Shop now!
                    </button>
                  </Link>
                </div>

                {/* IMAGE CONTAINER */}
                <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                  <Image
                    src={item?.img}
                    fill
                    alt=""
                    sizes="100%"
                    className="object-contain bg-transparent"
                  />
                </div>
              </div>
            );
          })}
        {/* <Slider /> */}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides &&
          slides?.map((item, index) => {
            return (
              <div
                className={`w-3 h-3 rounded-full ring-1 □ ring-gray-600 cursor-pointer flex items-center justify-center ${
                  current === index ? "scale-150" : ""
                }`}
                key={index}
                onClick={() => setCurrent(index)}
              >
                {current === index && (
                  <div className="w-[6px] h-[6px] □ bg-gray-600 rounded-full"></div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Slider;
