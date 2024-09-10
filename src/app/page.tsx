import Collections from "@/components/Collections";
import Newsletter from "@/components/Newsletter";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import VideoComp from "@/components/VideoComp";
import {
  OurCollection,
  OurCollection2,
  Products,
  Products2,
  Products3,
} from "@/lib/data";

import { Suspense } from "react";

const Homepage = () => {
  return (
    <div className="bg-[#f9f6f1] ">
      <Slider />
      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <h1 className="text-3xl font-bold text-slate-900">Featured Products</h1>
        <h1 className="text-lg text-slate-500">
          Elegant, gorgeous, and entirely hypoallergenic.{" "}
        </h1>
        <Suspense fallback="lading...">
          <ProductList limit={4} Products={Products} />
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
          <Collections OurCollection={OurCollection} />
        </Suspense>
      </div>
      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <h1 className="text-2xl">Products We Love </h1>
        <Suspense fallback="lading...">
          <ProductList limit={4} Products={Products2} />
        </Suspense>
      </div>

      <div className="mt-24">
        <Suspense fallback="lading...">
          <VideoComp />
        </Suspense>
      </div>

      <div className="px-2 py-12 bg-white md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 "> Collections</h2>
        </div>
        <Suspense fallback="lading...">
          <Collections OurCollection={OurCollection2} />
        </Suspense>
      </div>
      <div className="px-2 py-12  md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <Suspense fallback="lading...">
          <Newsletter />
        </Suspense>
      </div>
      <div className="pb-24 px-2 md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <h1 className="text-3xl font-bold text-slate-900">
          Perhaps you might also adore...
        </h1>
        <h1 className="text-lg text-slate-500">
          Our selection of jewellery and accessories.
        </h1>
        <Suspense fallback="lading...">
          <ProductList limit={4} Products={Products3} />
        </Suspense>
      </div>
    </div>
  );
};

export default Homepage;
