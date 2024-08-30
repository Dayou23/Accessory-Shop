import Link from "next/link";

import Image from "next/image";
// import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import Menu from "./Menu";
import NavIcons from "./NavIcons";
import MenuLinks from "./MenuLinks";
import SearchBar from "./SearchBar";
// import NavIcons from "./NavIcons";

// const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-2 bg-[#f9f6f1] md:px-4 lg:px-8 xl:px-8 2xl:px-32 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="font-bold text-xl text-primary tracking-wide">
            Accessory Shop
          </div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-[60%] flex items-center  justify-between">
          <Link href="/">
            <div className="font-bold text-xl text-primary tracking-wide">
              Accessory-Shop
            </div>
          </Link>

          <div className="hidden xl:flex">
            <MenuLinks />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-[40%] flex items-center justify-between gap-8">
          <SearchBar typeBar="search" />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
