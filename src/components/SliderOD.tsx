import { NewIn } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import CustomCarousel from "./CustomCarousel";

const SliderOD = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative z-40 w-full">
      <div className=" flex items-center md:p-7">
        <div className="max-w-3xl relative z-40 w-full 2xl:mx-auto">
          <div className="font-display text-5xl md:text-8xl italic font-bold tracking-tight text-slate-900">
            <span className="md:hidden"> Sun, Sea, and Sparkle...</span>
            <span className="hidden md:inline">Sundaze Collection</span>
          </div>
          <div className="max-w-lg mt-4 md:mt-8 hidden md:block">
            <p className="text-lg md:text-2xl text-brand-800 md:text-slate-500">
              Each piece is 18ct gold plated and perfect for those beach
              parties, sunset dinners or anything in between.
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
      <div className="hidden md:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
};

export default SliderOD;
