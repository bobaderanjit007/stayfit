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
import { GrYoga } from "react-icons/gr";

const PlanCard = ({ plan }: { plan: PlanCardTypes }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" flex items-center justify-between w-full">
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
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                Deactivate
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
        <CardDescription className="flex justify-between">
          <span className="flex items-center">
            {plan.category == "gym" ? (
              <Dumbbell className="h-3" />
            ) : (
              <GrYoga className="h-3" />
            )}{" "}
            <span className="ml-1 capitalize">{plan.category}</span>
          </span>
          <span>{plan.planType}</span>
          <span>{plan.planFor}</span>
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
