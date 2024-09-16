import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { FooterCollections, headerLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="px-5 py-12 lg:w-1/2 relative md:p-16">
        <Image
          src="https://images.pexels.com/photos/27836556/pexels-photo-27836556/free-photo-of-a-purse-sunglasses-and-other-accessories-are-laid-out-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="footer_Image"
          className="w-full h-full absolute inset-0 z-10 object-cover"
          fill
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85 z-20 "></div>
        <div className="relative z-20 max-w-md">
          {" "}
          <div className="font-bold text-xl text-primary tracking-wide">
            Accessory Shop
          </div>
          <div className="uppercase text-tertiary mt-12 text-sm font-sans tracking-wider font-semibold">
            Jewellery and Accessories for Every Occasion
          </div>
          <p className="text-sm mt-4 text-white">
            Welcome to Accessory Shop! secret catch eventually produce finish
            very what blind map deer war lady child accident influence farm us
            is road top nice plan they too
          </p>
          <div className="hidden md:block space-x-6 text-secondary font-sans text-sm mt-12 xl:mt-24">
            © 2024 Accessory Shop
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 px-5 py-12  md:p-16">
        <h4 className="uppercase text-sm font-sans text-secondary tracking-wider font-semibold">
          {" "}
          Join Our Newsletter Subscription
        </h4>
        <div className="max-w-sm mt-5">
          <SearchBar typeBar="subscribe" />
        </div>
        <ul className="flex space-x-8 mt-4 md:mt-8">
          <li className="">
            <Link href="#">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </li>
          <li className="">
            <Link href="#">
              <Image
                src="/instagram.png"
                alt="instagram"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </li>
        </ul>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          <div className="space-y-5">
            <h4 className="uppercase text-sm font-sans text-secondary tracking-wider font-semibold">
              Useful Links
            </h4>
            <ul className="text-sm space-y-2 text-slate-600">
              {headerLinks.map((item, index) => (
                <li className="cursor-pointer" key={index}>
                  <Link href="#"> {item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <h4 className="uppercase text-sm font-sans text-secondary tracking-wider font-semibold">
              Collections
            </h4>
            <ul className="text-sm space-y-2 text-slate-600">
              {FooterCollections.map((item, index) => (
                <li className="cursor-pointer" key={index}>
                  <Link href="#"> {item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
