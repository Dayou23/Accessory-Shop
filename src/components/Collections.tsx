import Link from "next/link";
// type CollectionType = {
//   image: String;
//   title: String;
//   style: String;
//   link: String;
// };

const Collections = ({ OurCollection }: { OurCollection: any }) => {
  return (
    <div className="my-10 px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex md:grid md:grid-cols-3 gap-4 ">
        {OurCollection.map((item: any, index: number) => (
          <Link
            href={item.link}
            key={item.image}
            className={`relative  flex-shrink-0  w-[95%] md:w-full md:h-[404px] h-[500px]   rounded-3xl ${
              (index === 0 && "md:col-span-2") ||
              (index === 3 && "md:col-span-2")
            } `}
          >
            <img
              src={item.image}
              alt="image"
              className={`object-cover h-full w-full rounded-3xl ${
                (index === 0 && "md:col-span-2") ||
                (index === 3 && "md:col-span-2")
              }`}
            />
            <div className=" absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70 rounded-3xl "></div>

            <div className="absolute  ml-5 bottom-10 flex text-white  flex-col">
              <h3 className="text-3xl font-black font-serif">{item.title}</h3>

              <span className="text-base text-primary font-semibold font-serif">
                {" "}
                {item.title === "New In" ? "VIEW ALL" : "VIEW COLLECTION"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Collections;
