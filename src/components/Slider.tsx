"use client";

import { NewIn } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {NewIn.map((slide) => (
          <div
            className={`w-screen h-full flex flex-col  xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}

            <div className="hidden md:flex md:h-1/2 xl:w-1/2 xl:h-full  items-center justify-center ">
              <div className="max-w-3xl md:max-w-2xl xl:max-w-xl relative z-40 w-full 2xl:mx-auto">
                <div className="font-display text-5xl md:text-7xl xl:text-8xl italic font-bold tracking-tight text-slate-900">
                  <span className="hidden md:inline">Autumn Collection</span>
                </div>
                <div className="max-w-lg mt-4 md:mt-8 hidden md:block">
                  <p className="text-lg md:text-2xl text-brand-800 md:text-slate-500">
                    silly respect slept early article remove related sell
                    property war verb wing of silent solid statement smooth yet
                    modern largest difficulty dirt flag farm.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    className="rounded-full bg-white p-2 px-6 shadow inline-block font-bold mt-4 md:mt-8"
                    href="#"
                  >
                    View the collection
                  </Link>
                </div>
              </div>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="flex h-full md:h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
              <div className="md:hidden max-w-3xl z-40 w-full flex items-center justify-center flex-col">
                <div className="font-display text-5xl  italic font-bold tracking-tight text-slate-900">
                  <span>Autumn Collection</span>
                </div>
                <div className="mt-4">
                  <Link
                    className="rounded-full bg-white p-2 px-6 shadow inline-block font-bold mt-4 md:mt-8"
                    href="#"
                  >
                    View the collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex absolute m-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2  bottom-8  gap-4">
        {NewIn.map((slide, index) => (
          <div
            className={`w-2 h-2  rounded-full bg-black bg-opacity-40 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-2 h-2 bg-primary  rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
