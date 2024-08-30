import Collections from "@/components/Collections";
import Newsletter from "@/components/Newsletter";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import VideoComp from "@/components/VideoComp";
import Image from "next/image";
import { Suspense } from "react";

const Homepage = () => {
  return (
    <div className="bg-[#f9f6f1] ">
      <Slider />
      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback="lading...">
          <ProductList limit={4} />
        </Suspense>
      </div>

      <div className="mt-24 px-2 py-12 bg-white md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 ">
            {" "}
            Our Collections
          </h2>
        </div>
        <Suspense fallback="lading...">
          <Collections />
        </Suspense>
      </div>
      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <h1 className="text-2xl">Products We Love </h1>
        <Suspense fallback="lading...">
          <ProductList limit={4} />
        </Suspense>
      </div>

      <div className="mt-24">
        <Suspense fallback="lading...">
          <VideoComp />
        </Suspense>
      </div>

      <div className="px-2 py-12 bg-white md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 ">
            {" "}
            Rosie & Dott Brides
          </h2>
        </div>
        <Suspense fallback="lading...">
          <Collections />
        </Suspense>
      </div>
      <div className="px-2 py-12  md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <Suspense fallback="lading...">
          <Newsletter />
        </Suspense>
      </div>
      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <h1 className="text-2xl">You might also love...</h1>
        <h1 className="text-sm text-gray-500">
          Our range of earrings and accessories
        </h1>
        <Suspense fallback="lading...">
          <ProductList limit={4} />
        </Suspense>
      </div>
    </div>
  );
};

export default Homepage;
