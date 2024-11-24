"use client";
import React from "react";

import {
  MdDashboard,
  MdPerson,
  MdPeople,
  MdEvent,
  // MdOutlineSchedule,
  // MdAnalytics,
  // MdReport,
  // MdFitnessCenter,
  MdAccountCircle,
} from "react-icons/md";
import {
  FaPhone,
  FaMoneyBillWave,
  // FaBookOpen,
  // FaCalendarCheck,
} from "react-icons/fa";
import {
  GiHealthIncrease,
  GiPayMoney,
  // GiReceiveMoney
} from "react-icons/gi";
// import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import Store from "@/helpers/store";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", icon: <MdDashboard />, itemLoc: "/gym/dashboard" },
  {
    name: "Enquiry",
    icon: <FaPhone />,
    itemLoc: "/gym/enquiry",
    inprocess: true,
  },
  {
    name: "Members",
    icon: <MdPerson />,
    itemLoc: "/gym/members",
    inprocess: true,
  },
  {
    name: "Batches",
    icon: <MdPeople />,
    itemLoc: "/gym/batches",
    inprocess: true,
  },
  { name: "Attendance", icon: <MdEvent />, itemLoc: "/gym/attendance" },
  {
    name: "Plans",
    icon: <GiHealthIncrease />,
    itemLoc: "/gym/plans",
    inprocess: true,
  },
  { name: "Staff", icon: <MdPeople />, itemLoc: "/gym/staff", inprocess: true },
  // {
  //   name: "Appointments",
  //   icon: <FaCalendarCheck />,
  //   itemLoc: "/gym/appointments",
  // },
  // { name: "Bookings", icon: <FaBookOpen />, itemLoc: "/gym/bookings" },
  // {
  //   name: "Communications",
  //   icon: <IoMdNotificationsOutline />,
  //   itemLoc: "/gym/communications",
  // },
  {
    name: "Expenses",
    icon: <FaMoneyBillWave />,
    itemLoc: "/gym/expenses",
    inprocess: true,
  },
  { name: "Accounts", icon: <GiPayMoney />, itemLoc: "/gym/accounts" },
  // {
  //   name: "Add On Services",
  //   icon: <GiReceiveMoney />,
  //   itemLoc: "/gym/add-on-services",
  // },
  // { name: "Schedule", icon: <MdOutlineSchedule />, itemLoc: "/gym/schedule" },
  // { name: "Analytics", icon: <MdAnalytics />, itemLoc: "/gym/analytics" },
  // { name: "Reports", icon: <MdReport />, itemLoc: "/gym/reports" },
  // {
  //   name: "Equipments",
  //   icon: <MdFitnessCenter />,
  //   itemLoc: "/gym/equipments",
  // },
  { name: "Profile", icon: <MdAccountCircle />, itemLoc: "/gym/profile" },
];

const GymSidebar = () => {
  const pathname = usePathname();
  const { isShowSidebar } = Store.mainStore();
  return (
    <div className=" text-[1.1rem] space-y-[0.3em] bottom-0 overflow-auto h-full border-r shadow-md scrollbar-none pt-4 pb-10 scrollbar-hide">
      {menuItems.map((item, index) => (
        <Link
          href={item.itemLoc}
          key={index}
          className={`${
            pathname.includes(item.itemLoc)
              ? "bg-red-600 text-white"
              : item.inprocess
              ? "bg-blue-700 text-white"
              : "text-[#4a4a4a]"
          } flex items-center  space-x-[0.5em] px-4 ${
            isShowSidebar && "min-w-[10em]"
          }`}
        >
          <div className="py-3">{item.icon}</div>
          <div
            className={`${
              isShowSidebar ? "" : "hidden"
            } transition-all duration-200`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GymSidebar;
