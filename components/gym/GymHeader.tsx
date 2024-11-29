"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { IoIosMenu, IoMdArrowDropdown } from "react-icons/io";
import Store from "@/helpers/store";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  // MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AppWindow, Bell, LogOut, Settings, User } from "lucide-react";

const GymHeader = () => {
  const pathname = usePathname();

  const { isShowSidebar, setIsShowSidebar } = Store.useMain();

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
          <Link href="/gym/dashboard">StayFit</Link>
        </span>
      </div>

      {/* Setting, Notifications, Profile */}
      <div className="flex text-[1.4em] items-center space-x-[0.6em]">
        <Menubar className="rounded-none shadow-none borde r-b pb-2 focus:bg-transparent border-gray-300 border-x-0 border-t-0 ">
          <MenubarMenu>
            <MenubarTrigger className="space-x-5 ">
              {" "}
              <span
                className="block w-[2.2em] h-[2.2em] rounded-full bg-slate-500 overflow-hidden bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(https://i.pinimg.com/originals/a5/a8/b9/a5a8b9ce5bda5871f138603fb10ce01d.jpg)`,
                }}
              ></span>
              <span className="text-sm flex items-center border-none ">
                Pune <IoMdArrowDropdown className="mx-1 text-lg text-regular" />
              </span>
            </MenubarTrigger>
            <MenubarContent className="translate-x-[-2em]">
              <MenubarItem>
                {" "}
                <span className="text-blue-500">
                  Jayant Sawarkar{" "}
                  <span className="text-[0.8rem] text-orange-500 opacity-70">
                    (Admin)
                  </span>
                </span>
              </MenubarItem>{" "}
              <MenubarSeparator />
              <Link href={`/gym/profile`}>
                <MenubarItem>
                  {" "}
                  <User className="h-4 -translate-x-[0.1em] " />
                  <span>Profile</span>
                </MenubarItem>{" "}
              </Link>
              <Link href={`${pathname}`} target="_blank">
                <MenubarItem>
                  {" "}
                  <AppWindow className="h-4 -translate-x-[0.1em] " />
                  <span>New Window</span>
                </MenubarItem>
              </Link>
              <MenubarItem>
                {" "}
                <Bell className="h-4 -translate-x-[0.1em] " />
                <span>Notifications</span>
              </MenubarItem>
              <Link href={`/gym/settings`}>
                <MenubarItem className="flex items-center">
                  {" "}
                  <Settings className="h-4 -translate-x-[0.1em] " />
                  <span>Settings</span>
                </MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href={`/`}>
                <MenubarItem className="flex items-center">
                  {" "}
                  <LogOut className="h-4 -translate-y-[0.1em] " />
                  <span>Log out</span>
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};

export default GymHeader;
