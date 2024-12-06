"use client";
import React, { useState } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

const AdminSubscriptionsTab = () => {
  const [showPlansOf, setShowPlansOf] = useState<"active" | "expired">(
    "active"
  );
  return (
    <div className="space-y-[1.5rem]">
      {/* Title  */}
      <div>
        {" "}
        <span className="text-3xl font-semibold text-regular ">
          {" "}
          StayFit <span className="text-gray-400 ml-2">Subscriptions</span>
        </span>{" "}
      </div>

      {/* Switch Buttons  */}
      <div className="space-x-3">
        <Button
          className={`${
            showPlansOf === "active" && "border-green-500 text-green-500"
          } `}
          variant={"outline"}
          onClick={() => setShowPlansOf("active")}
        >
          Active Plans
        </Button>
        <Button
          className={`${
            showPlansOf === "expired" && "border-red-500 text-red-500 "
          } `}
          variant={"outline"}
          onClick={() => setShowPlansOf("expired")}
        >
          Expired Plans
        </Button>
      </div>
      {showPlansOf === "active" ? (
        <div className="space-y-3">
          {/* Active Plans  */}
          <div className="flex items-center space-x-2 border-b pb-1">
            <span className="block w-3 h-3 bg-green-600 rounded-full" />
            <span>Active Plans</span>
          </div>

          <div className="flex flex-col space-y-[1em]  h-[63vh] overflow-auto ">
            {[1].map((i) => {
              return (
                <span key={i}>
                  <AdminSubscriptionCard />
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Expired Plans  */}
          <div className="flex items-center space-x-2 border-b pb-1">
            <span className="block w-3 h-3 bg-red-600 rounded-full" />
            <span>Expired Plans</span>
          </div>
          <div className="flex flex-col space-y-[1em]  h-[63vh] overflow-auto">
            {[1, 2].map((i) => {
              return (
                <span key={i}>
                  <AdminSubscriptionCard />
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export const AdminSubscriptionCard = () => {
  return (
    <Card className="relative">
      <div className="absolute right-[0.8em] top-[0.4em] ">
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-">Renew Plan</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CardHeader className="space-y-3">
        <CardTitle className="flex space-x-[3em] font-medium text-[0.95rem] ">
          <span className=" bg-blue-700 rounded-md text-white p-3 text-sm tracking-wider uppercase w-[50%] text-center ">
            New Lite CRM
          </span>
          <div className="flex-grow flex justify-end space-x-3">
            <div className="flex flex-col border-b border-green-500 h-fit ">
              <span className="text-[0.7rem]">Start Date</span>{" "}
              <span className="text-[1.1rem]">04 Jan 2024</span>{" "}
            </div>
            <div className="flex flex-col border-b border-red-500 h-fit">
              <span className="text-[0.7rem] ">End Date</span>{" "}
              <span className="text-[1.1rem]">04 Jan 2025</span>{" "}
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="grid grid-cols-2 gap-x-10 text-regular">
            <span className="flex ">
              <span className="w-[6em]"> Cost :</span>{" "}
              <span className="w-[8em] text-black font-semibold">₹ 8000</span>
            </span>
            <span className="flex ">
              <span className="w-[9em] "> Paid Amount :</span>{" "}
              <span className="w-[8em] text-black font-semibold">₹ 5000</span>
            </span>
            <span className="flex ">
              <span className="w-[6em]"> Due Date :</span>{" "}
              <span className="w-[8em] text-black font-semibold">
                4 Jan 2025
              </span>
            </span>
            <span className="flex ">
              <span className="w-[9em] "> Pending Amount :</span>{" "}
              <span className="w-[8em] text-black font-semibold">₹ 3000</span>
            </span>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AdminSubscriptionsTab;
