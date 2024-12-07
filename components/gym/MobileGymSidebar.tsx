"use client";
import React from "react";
import Link from "next/link";
import Store from "@/helpers/store";
import { usePathname } from "next/navigation";
import { menuItems } from "./GymSidebar";

const MobileGymSidebar = () => {
  const pathname = usePathname();
  const { isShowSidebar } = Store.useMain();
  return (
    <div
      className={`${
        !isShowSidebar ? "" : "translate-x-[-50em]"
      } absolute z-10 transition-transform duration-300 flex xl:hidden flex-col text-[1.1rem] space-y-[0.3em] bottom-0 left-0 overflow-auto h-full border-r shadow-md scrollbar-none pt-4 pb-10 scrollbar-hide bg-white `}
    >
      {menuItems.map((item, index) => (
        <Link
          href={item.itemLoc}
          key={index}
          className={`${
            pathname.includes(item.itemLoc)
              ? "bg-red-600 text-white"
              : "text-[#4a4a4a]"
          } flex items-center  space-x-[0.5em] px-4 ${
            isShowSidebar && "min-w-[10em]"
          }`}
        >
          <div className="py-3">{item.icon}</div>
          <span className=" ">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileGymSidebar;
