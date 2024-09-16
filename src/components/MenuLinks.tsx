"use client";

import Link from "next/link";
import { useState } from "react";
import NavImages from "./NavImages";
import { Bags, Collection, NewIn } from "@/lib/data";
import SearchBar from "./SearchBar";
import Image from "next/image";

const MenuLinks = () => {
  const [showCollections, setShowCollections] = useState(false);
  const [showNewIn, setShowNewIn] = useState(false);
  const [showBags, setShowBags] = useState(false);
  const [showBridal, setShowBridal] = useState(false);
  const [showEverythingElse, setShowEverythingElse] = useState(false);

  const Arrow_down_menu = () => {
    return (
      <Image
        src="/arrow_down_menu.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer p-1 "
      />
    );
  };
  const Arrow_up_menu = () => {
    return (
      <Image
        src="/arrow_up_menu.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer p-1 "
      />
    );
  };

  return (
    <div className="flex flex-col  justify-center gap-4 pt-6 md:flex-row md:pt-0 z-40">
      <div className="md:hidden">
        <SearchBar typeBar="search" />
      </div>
      <div className="flex flex-col  justify-center gap-4 md:flex-row">
        <div className="md:relative">
          <div className="flex items-center  w-fit border-x-0 border-t-0 border-b-2 border-b-transparent  hover:border-b-primary ">
            <Link href="#" className="cursor-pointer font-semibold">
              Collections
            </Link>
            <button
              onClick={() =>
                !showCollections
                  ? (setShowNewIn(false),
                    setShowBags(false),
                    setShowCollections(true))
                  : setShowCollections(false)
              }
            >
              {showCollections ? <Arrow_up_menu /> : <Arrow_down_menu />}
            </button>
          </div>
          <div>{showCollections && <NavImages propImage={Collection} />}</div>
        </div>
        <div className="md:relative">
          <div className="flex items-center  w-fit border-0  hover:border-b-2  hover:border-b-primary">
            <Link href="#" className="cursor-pointer font-semibold">
              New In
            </Link>
            <button
              onClick={() => {
                !showNewIn
                  ? (setShowNewIn(true),
                    setShowBags(false),
                    setShowCollections(false))
                  : setShowNewIn(false);
              }}
            >
              {showNewIn ? <Arrow_up_menu /> : <Arrow_down_menu />}
            </button>
          </div>
          {showNewIn && <NavImages propImage={NewIn} />}
        </div>
        <div className="md:relative">
          <div className="flex items-center  w-fit border-0  hover:border-b-2  hover:border-b-primary">
            <Link href="#" className="cursor-pointer font-semibold">
              Bags{" "}
            </Link>
            <button
              onClick={() =>
                !showBags
                  ? (setShowNewIn(false),
                    setShowBags(true),
                    setShowCollections(false))
                  : setShowBags(false)
              }
            >
              {showBags ? <Arrow_up_menu /> : <Arrow_down_menu />}
            </button>
          </div>
          {showBags && <NavImages propImage={Bags} />}
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
