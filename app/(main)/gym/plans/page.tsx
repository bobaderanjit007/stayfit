"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const GymPlans = () => {
  const randomPlanData = Array.from({ length: 10 }, () => ({
    planDetails: {
      planName: `Plan ${Math.random().toString(36).substring(7)}`, // Random alphanumeric name
      category: "gym", // Default value
      planType: ["Basic", "Premium", "Custom"][Math.floor(Math.random() * 3)], // Random from an array
      planFor: ["Individual", "Group", "Corporate"][
        Math.floor(Math.random() * 3)
      ], // Random from an array
      showPlanOnline: Math.random() > 0.5, // Random boolean
      description: `This is a description for a ${
        ["Basic", "Premium", "Custom"][Math.floor(Math.random() * 3)]
      } plan.`,
    },
    packageDetails: {
      packageType: ["Standard", "Custom", "Advanced"][
        Math.floor(Math.random() * 3)
      ], // Random from an array
      durationInDays: Math.floor(Math.random() * 365) + 1, // Random duration between 1 and 365 days
      sessions: Math.floor(Math.random() * 50) + 1, // Random sessions between 1 and 50
      priceInRupees: Math.floor(Math.random() * 50000) + 1000, // Random price between 1000 and 50000
      discountInRupees: Math.floor(Math.random() * 5000), // Random discount between 0 and 5000
    },
  }));
  return (
    <div className=" py-5 space-y-5">
      {/* Title  */}
      <div className="flex justify-between w-full">
        <span className="text-[1.7em] text-[#4a4a4a] ">Plans</span>
        <Link href="/gym/plans/add-new-plan">
          <Button variant="outline">Add New Plan</Button>
        </Link>
      </div>

      {/* Plan Cards  */}
      <div className="grid grid-cols-3 gap-[1.5em] w-full">
        {randomPlanData.map((plan, index) => {
          return (
            <div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{plan.planDetails.planName}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymPlans;
