import Image from "next/image";
import Link from "next/link";

const ProductList = async ({
  limit,
  searchParams,
  Products,
}: {
  limit?: number;
  searchParams?: any;
  Products: any;
}) => {
  const Stars = () => {
    let arr = [];

    for (let index = 0; index < 5; index++) {
      arr[index] = <Image src="/star.png" alt="star" width={22} height={22} />;
    }
    return arr;
  };

  return (
    <div className="px-4 mt-4 md:mt-8 py-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8 ">
        {Products.map((product: any) => (
          <Link
            href={"/productSlug"}
            className="flex-shrink-0 w-[95%] sm:w-[45%] xl:w-[22%]"
            key={product.image}
          >
            <div className="relative bg-white w-full h-[500] shadow-xl ">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={500}
                className="w-full h-[75%] object-cover rounded-md p-2"
              />

              <div className="relative flex items-center justify-center flex-col">
                <h3 className="text-lg font-bold ">
                  Bláithín Necklace (Silver)
                </h3>
                {product.Reviews && (
                  <div className="flex items-center flex-row">
                    <Stars />
                    <p className="pr-1 text-sm text-slate-600">
                      {product.Reviews}
                    </p>
                  </div>
                )}
                <span className="text-sm text-slate-600 py-1">
                  {" "}
                  {product.price}
                </span>
                <button className="rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
