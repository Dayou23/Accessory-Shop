// import Reviews from "@/components/Reviews";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import ProductList from "@/components/ProductList";
import { Products } from "@/lib/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="px-4 py-10 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>
        {/* TEXTS */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">product</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            soluta earum ut quod fugit nulla ratione perspiciatis error
            accusantium, non ullam provident iure facere odit voluptates
            architecto, expedita reiciendis magnam?
          </p>
          <div className="h-[2px] bg-gray-100" />

          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">$20</h3>
            <h2 className="font-medium text-2xl">$45</h2>
          </div>

          <div className="h-[2px] bg-gray-100" />

          <CustomizeProducts />

          <div className="h-[2px] bg-gray-100" />

          <div className="text-sm">
            <h4 className="font-medium mb-4">PRODUCT INFO</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              iste reiciendis tenetur laudantium similique saepe autem sint in
              vitae sequi, debitis nobis praesentium ullam. Non ad modi maxime
              ratione quo?
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">RETURN & REFUND POLICY</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              iste reiciendis tenetur laudantium similique saepe autem sint in
              vitae sequi, debitis nobis praesentium ullam. Non ad modi maxime
              ratione quo?
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">SHIPPING INFO</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              iste reiciendis tenetur laudantium similique saepe autem sint in
              vitae sequi, debitis nobis praesentium ullam. Non ad modi maxime
              ratione quo?
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">shortDesc</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="mt-24 pb-24 px-2 md:px-4 lg:px-8 xl:px-8 2xl:px-32">
        <h1 className="text-2xl">Products We Love </h1>
        <Suspense fallback="lading...">
          <ProductList limit={4} Products={Products} />
        </Suspense>
      </div>
    </>
  );
};

export default SinglePage;
