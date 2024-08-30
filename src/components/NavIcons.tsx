"use client";

import Image from "next/image";
import Link from "next/link";

const NavIcons = () => {
  return (
    <Link href="#" className="flex items-center justify-center gap-1 relative">
      <div className="rounded-full bg-primary text-white text-xs py-1 px-2 flex items-center justify-center">
        2 / 33.5$
      </div>
      <Image src="/bag.png" alt="" width={22} height={22} />
    </Link>
  );
};

export default NavIcons;
