import { OurCollection } from "@/lib/data";
import Link from "next/link";

const Collections = () => {
  return (
    // <div className="w-[90vw] max-w-[1200px] mx-auto mt-8 grid-rows-[1fr]">
    //   <div className="flex flex-col mb-10">
    //     <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
    //       <div className=" md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
    //         <img
    //           src="https://images.pexels.com/photos/27855448/pexels-photo-27855448/free-photo-of-jewelry-set-women-accessories-pink-and-green.jpeg?auto=compress&cs=tinysrgb&w=800"
    //           alt="Gallery image"
    //           className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full"
    //         />
    //       </div>
    //       <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
    //         <img
    //           src="https://images.pexels.com/photos/27855447/pexels-photo-27855447/free-photo-of-jewelry-set-women-accessories-yellow.jpeg?auto=compress&cs=tinysrgb&w=800"
    //           alt="Gallery image"
    //           className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full"
    //         />
    //       </div>
    //     </div>
    //     <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
    //       <div className="h-[277px] w-full rounded-3xl">
    //         <img
    //           src="https://images.pexels.com/photos/27855449/pexels-photo-27855449/free-photo-of-jewelry-set-women-accessories-green.jpeg?auto=compress&cs=tinysrgb&w=800"
    //           alt="Gallery image"
    //           className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
    //         />
    //       </div>
    //       <div className="h-[277px] w-full rounded-3xl">
    //         <img
    //           src="https://images.pexels.com/photos/27855448/pexels-photo-27855448/free-photo-of-jewelry-set-women-accessories-pink-and-green.jpeg?auto=compress&cs=tinysrgb&w=800"
    //           alt="Gallery image"
    //           className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
    //         />
    //       </div>
    //       <div className="h-[277px] w-full rounded-3xl">
    //         <img
    //           src="https://images.pexels.com/photos/27855448/pexels-photo-27855448/free-photo-of-jewelry-set-women-accessories-pink-and-green.jpeg?auto=compress&cs=tinysrgb&w=800"
    //           alt="Gallery image"
    //           className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="my-10 px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex md:grid md:grid-cols-3 gap-4 ">
        {OurCollection.map((item, index) => (
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
