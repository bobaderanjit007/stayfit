"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { TbCheckupList } from "react-icons/tb";
import { CgUserList } from "react-icons/cg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const MemberSubscriptionTab = () => {
  return (
    <div className="space-y-[1em]">
      <div className="space-x-[1em]">
        <Button variant="outline">
          <TbCheckupList className="w-[1.3em] h-[1.3em] -translate-y-[0.05em]" />{" "}
          Add Membership Plan
        </Button>
        <Button variant="outline">
          <CgUserList className="w-[1.3em] h-[1.3em]" />
          Add Trainer Plan
        </Button>
      </div>

      <MemberSubscriptionCard />
    </div>
  );
};

const MemberSubscriptionCard = () => {
  return (
    <Card>
      <CardHeader className="bg-blue-400 rounded-t-md py-4">
        <CardTitle className="font-medium flex justify-between ">
          <div className="flex flex-col space-y-2">
            <span>Plan Name - Plan </span>
            <span className="text-[0.8rem]">
              START DATE : <span className="font-semibold">Nov 18, 2024</span> -
              END DATE : <span className="font-semibold">May 16, 2025</span>
            </span>
          </div>
          <div className="font-semibold flex items-center pl-[5em] border-l-2 border-gray-100 uppercase tracking-wide">
            Membership Plan
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="py-[0.5em]">
        <div className="text-[0.8rem] grid grid-cols-2">
          <span className="w-[14em] flex justify-between">
            <span>Package Price : </span>
            <span className="font-semibold w-[5em]">3500 ₹</span>
          </span>
          <span className="w-[14em] flex justify-between">
            <span>Discounted Price :</span>{" "}
            <span className="font-semibold w-[5em]">3000 ₹</span>
          </span>
          <span className="w-[14em] flex justify-between">
            <span>Discount : </span>
            <span className="font-semibold w-[5em]">500 ₹</span>
          </span>

          <span className="w-[14em] flex justify-between">
            <span>Pending Balance :</span>{" "}
            <span className="font-semibold w-[5em]">1000 ₹</span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="relative">
        <span className="absolute left-0 top-2 px-5 py-1 bg-green-600 rounded-r-md text-gray-100">
          Active
        </span>
        <div className="flex-grow flex justify-end  space-x-[0.5em]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button
                  variant="outline"
                  className="rounded-full px-2  text-blue-400 border-blue-400"
                >
                  <CiEdit />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Plan</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button
                  variant="outline"
                  className="rounded-full px-2  text-red-400 border-red-400"
                >
                  <MdDeleteOutline />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete Plan</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MemberSubscriptionTab;
