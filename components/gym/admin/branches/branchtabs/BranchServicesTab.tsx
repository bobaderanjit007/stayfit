"use client";
import { MapPin } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { useParams } from "next/navigation";

const categories = ["Gym", "Yoga"];

const activities = [
  "Gym",
  "Fitness",
  "Workouts",
  "Flexibility",
  "Massage",
  "Weight Training",
  "Crossfit",
  "Cardio",
  "Functional",
  "Breathing",
];

const services = [
  "Group Classes",
  "Personal Training",
  "Weight Management",
  "Physical Therapy",
  "Nutrition Counseling",
  "Cross-Functional",
];

const BranchServicesTab = () => {
  const { branchId } = useParams();
  return (
    <div className="space-y-3">
      <div className="flex items-center border-b justify-between">
        <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
          <MapPin className="h-[0.9em]" />
          <span>Services</span>
        </span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href={`/gym/profile/branch/${branchId}/edit-services`}>
                {" "}
                <CiEdit className="w-[1.3em] h-[1.3em]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Services</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Categories  */}
      <div className=" text-regular ">
        <span className="w-fit text-[1.3rem] ml-2">Categories</span>
        <span className="font-semibold text-[1rem] flex flex-wrap  ml-0">
          {categories.map((category, index) => {
            return (
              <span
                key={index}
                className="bg-gray-200 mx-2 rounded-md py-1 px-2 my-2 line-clamp-1"
              >
                {category}
              </span>
            );
          })}
        </span>
      </div>
      {/* Activities  */}
      <div className=" text-regular ">
        <span className="w-fit text-[1.3rem] ml-2">Activities</span>
        <span className="font-semibold text-[1rem] flex flex-wrap ml-0">
          {activities.map((activity, index) => {
            return (
              <span
                key={index}
                className="bg-gray-200 mx-2 rounded-md py-1 px-2 my-2 line-clamp-1"
              >
                {activity}
              </span>
            );
          })}
        </span>
      </div>
      {/* Services  */}
      <div className=" text-regular ">
        <span className="w-fit text-[1.3rem] ml-2">Services</span>
        <span className="font-semibold text-[1rem] flex flex-wrap ml-0">
          {services.map((service, index) => {
            return (
              <span
                key={index}
                className="bg-gray-200 mx-2 rounded-md py-1 px-2 my-2 line-clamp-1"
              >
                {service}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default BranchServicesTab;
