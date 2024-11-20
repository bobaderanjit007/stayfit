"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { PlanCardTypes } from "@/helpers/Types/plan";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import { FaFemale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import { FaMale } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { GiCutDiamond } from "react-icons/gi";
import Link from "next/link";

const PlanCard = ({ plan }: { plan: PlanCardTypes }) => {
  return (
    <Card onClick={() => console.log(plan)}>
      <CardHeader className="px-0 pb-3 pt-0">
        <CardTitle
          className={` flex items-center justify-between w-full border-b rounded-t-md px-6 py-2 ${
            plan.planType == "basic" ? "bg-blue-300" : "bg-red-300"
          }`}
        >
          <span> {plan.planName} </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <PiDotsThreeOutlineVerticalFill className="h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-0">
                <Link
                  href={`/gym/plans/${plan._id}/edit-plan`}
                  className="w-full p-2"
                >
                  Edit
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="text-red-500">
                Deactivate
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
        <CardDescription className=" px-6 grid grid-cols-3">
          <span className="flex items-center border-r justify-start">
            {plan.category == "gym" ? (
              <Dumbbell className="h-3" />
            ) : (
              <GrYoga className="h-3" />
            )}{" "}
            <span className="ml-1 capitalize">{plan.category}</span>
          </span>
          <span className="flex items-center border-r justify-center">
            {plan.planType == "basic" ? (
              <CiStar className="h-3" />
            ) : plan.planType == "special" ? (
              <GiCutDiamond className="h-3" />
            ) : (
              <CiStar />
            )}{" "}
            <span className="ml-1 capitalize">{plan.planType}</span>
          </span>
          <span className="flex items-center justify-end">
            {plan.planFor == "female" ? (
              <FaFemale className="h-3" />
            ) : plan.planFor == "male" ? (
              <FaMale className="h-3" />
            ) : (
              <BiMaleFemale />
            )}{" "}
            <span className="ml-1 capitalize">{plan.planFor}</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="border-b border-t py-1">
        <span>Packages - {plan.packages.length}</span>
      </CardContent>
      <CardFooter className="flex justify-between py-3 space-x-2">
        {plan.packages.map((palnPackage, index) => (
          <div
            key={index}
            className={`flex flex-col flex-grow   ${
              index < plan.packages.length - 1 && "border-r "
            }`}
          >
            <span className="font-semibold text-[0.7rem] uppercase">
              {palnPackage.packageType}
            </span>
            <span className="font-medium text-[0.9rem]">
              ₹ {palnPackage.priceInRupees}
            </span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
