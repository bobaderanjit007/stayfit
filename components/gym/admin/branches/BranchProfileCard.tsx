"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { CiEdit } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { GrLocation } from "react-icons/gr";
import { Phone, QrCode } from "lucide-react";

const BranchProfileCard = () => {
  const router = useRouter();
  return (
    <Card className="relative">
      <div className="absolute right-[0.8em] top-[0.4em] ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <CiEdit
                className="w-[1.3em] h-[1.3em]"
                onClick={() => router.push("edit-profile")}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Branch</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <CardHeader className="space-y-3">
        <CardTitle className="flex space-x-[3em] font-medium text-[0.95rem] h-[10em]">
          {" "}
          <span
            className="block rounded-md flex-grow bg-slate-500 overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/a5/a8/b9/a5a8b9ce5bda5871f138603fb10ce01d.jpg)`,
            }}
          ></span>
          <span className="flex flex-col w-[60%]">
            <span className="text-orange-600 uppercase text-[1.2rem] tracking-wide  flex items-center ">
              <GrLocation className="mr-1 translate-y-[-0.1em]" /> Narhe
            </span>
            <span className="text-regular font-semibold capitalize text-[1.8rem]">
              StayFit Fitness Club
            </span>
            <span className="flex  ">
              <Phone className=" translate-y-[0.1em] h-4" /> 8459299123
            </span>
            <span className="flex  ">
              <Phone className=" translate-y-[0.1em] h-4" />
              7598649865
            </span>
            <span className="flex border-b mt-3 text-blue-500 cursor-pointer w-fit">
              <QrCode className=" translate-y-[0.1em] h-4" />
              View QR Code
            </span>
          </span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default BranchProfileCard;
