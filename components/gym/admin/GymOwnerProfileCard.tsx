"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { CiEdit } from "react-icons/ci";
import { MdBlock, MdOutlineMessage } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoSnowSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const GymOwnerProfileCard = () => {
  const router = useRouter();
  return (
    <div>
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
                <p>Edit Profile</p>
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
              <span className="text-orange-400 uppercase">Admin</span>
              <span className="text-blue-400 capitalize">Jayant Sawarkar</span>
              <span className="text-[#707070]">jayantsawarkar@gmail.com</span>
              <span className="capitalize">Male</span>
              <span>8459299123</span>
              <span>DOB - Jan 04, 2003</span>
            </span>
          </CardTitle>
          <CardDescription className="flex justify-between items-center ">
            <div className="space-x-[1.4em]">
              <Button
                variant="outline"
                className="uppercase text-[0.7rem] p-2 py-0 text-blue-500 border-blue-500"
              >
                <IoSnowSharp className="w-[1.5em] h-[1.5em]" /> Add Finger Print
              </Button>
              <Button
                variant="outline"
                className="uppercase text-[0.7rem] p-2 py-0 text-blue-500 border-blue-500"
              >
                <MdBlock className="w-[1.5em] h-[1.5em] " /> Refresh Finger
                Print
              </Button>
            </div>
            <div className="flex justify-end items-center space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={`sms:${8459299123}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineMessage className="w-[1.5em] h-[1.5em] text-blue-500" />
                    </a>{" "}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>SMS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={`https://wa.me/${8459299123}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="w-[1.5em] h-[1.5em] -translate-y-[0.1em] text-green-600" />
                    </a>{" "}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Whatsapp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default GymOwnerProfileCard;
