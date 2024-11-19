"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { ImNewTab } from "react-icons/im";
import {
  IoIosMenu,
  IoIosNotificationsOutline,
  IoMdArrowDropdown,
} from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Store from "@/helpers/store";

const GymHeader = () => {
  const pathname = usePathname();

  const { isShowSidebar, setIsShowSidebar } = Store.mainStore();

  return (
    <header className=" h-[5em] flex justify-between px-[2em] shadow-lg ">
      {/* Menu btn, logo */}
      <div className="flex items-center space-x-[1em]">
        <span className="text-[1.4em] ">
          <IoIosMenu
            className="cursor-pointer"
            onClick={() => {
              setIsShowSidebar(!isShowSidebar);
            }}
          />
        </span>
        <span className="text-3xl font-semibold ">
          {" "}
          <Link href="/">StayFit</Link>
        </span>
      </div>

      {/* SideBar Indications  */}
      <div className="flex items-center space-x-[1em]">
        <span>SideBar Indications</span>
        <span className="bg-red-600 p-1.5 text-white rounded-md">
          Active Tab
        </span>
        <span className="bg-blue-700 p-1.5 text-white rounded-md">
          Work In Process
        </span>
      </div>

      {/* Setting, Notifications, Profile */}
      <div className="flex text-[1.4em] items-center space-x-[0.6em]">
        <Link
          href={`https://stayfit-beta.vercel.app${pathname}`}
          target="_blank"
        >
          <ImNewTab />
        </Link>
        <span>
          <IoSettingsOutline />
        </span>
        <span>
          <IoIosNotificationsOutline />
        </span>
        <div className="flex items-center space-x-2">
          <span
            className="block w-[1.5em] h-[1.5em] rounded-full bg-slate-500 overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(https://e1.pxfuel.com/desktop-wallpaper/583/1005/desktop-wallpaper-god-of-war-kratos-gaming-logo-thumbnail.jpg)`,
            }}
          ></span>
          <span className="text-sm flex items-center ">
            Dubai <IoMdArrowDropdown className="mx-1" />
          </span>
        </div>
        <span
          className="block w-[1.5em] h-[1.5em] rounded-full bg-slate-500 overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(https://i.pinimg.com/originals/a5/a8/b9/a5a8b9ce5bda5871f138603fb10ce01d.jpg)`,
          }}
        ></span>
      </div>
    </header>
  );
};

export default GymHeader;
