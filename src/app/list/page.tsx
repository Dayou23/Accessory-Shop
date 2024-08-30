// import Filter from "@/components/Filter";
// import ProductList from "@/components/ProductList";
// import Skeleton from "@/components/Skeleton";
// import { wixClientServer } from "@/lib/wixClientServer";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  // const wixClient = await wixClientServer();

  // const cat = await wixClient.collections.getCollectionBySlug(
  //   searchParams.cat || "all-products"
  // );

  return (
    <div>
      <div className="flex  flex-col items-center justify-center pt-[10vh]">
        <h2 className="text-3xl font-serif font-bold ">
          Searched for "{searchParams.name}"
        </h2>
        <p className="p-2">0 Products Found</p>
        <div className="p-2 md:w-[50%]">
          <SearchBar typeBar="search" />
        </div>
      </div>
      <div className="p-5">Result</div>
    </div>
  );
};

export default ListPage;
