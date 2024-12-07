"use client";
import { Dumbbell, ListCheck, MapPin } from "lucide-react";
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

const MemberProfileTab = () => {
  const { memberId } = useParams();
  return (
    <div className="space-y-5 ">
      {/* Personal Details */}
      <div className="space-y-3">
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
            <ListCheck className="h-[0.9em]" />
            <span>Personal Details</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={`/gym/members/${memberId}/edit-profile`}>
                  <CiEdit className="w-[1.3em] h-[1.3em]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Email</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              jayant.sawarkar@gmail.com
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Date Of Birth</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              4th Jan 2001
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Blood Group</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              B +ve
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Member GST no.</span>
            <span className="font-semibold text-[1rem] text-regular"> --</span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">
              Emergency Contact Person
            </span>
            <span className="font-semibold text-[1rem] text-regular">--</span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">
              Emergency Contact
            </span>
            <span className="font-semibold text-[1rem] text-regular">--</span>
          </div>
        </div>
      </div>
      {/* Gym Related  */}
      <div className="space-y-3">
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
            <Dumbbell className="h-[0.9em]" />
            <span>Gym Related </span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Created By</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              Avinash Hubale
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Assigned To</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              Satish
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">
              Referral Points
            </span>
            <span className="font-semibold text-[1rem] text-regular"> 0</span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Referred By </span>
            <span className="font-semibold text-[1rem] text-regular"> --</span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Batches</span>
            <span className="font-semibold text-[1rem] text-regular">--</span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Fitness Goals</span>
            <span className="font-semibold text-[1rem] text-regular">--</span>
          </div>
        </div>
      </div>
      {/* Address Details*/}
      <div className="space-y-3">
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
            <MapPin className="h-[0.9em]" />
            <span>Address Details</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-x-2 col-span-2">
            <span className="text-regular border-b w-fit ">Address</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              Bhairvnath Nagar, Survey No. 3, Bhairvnath Bhel, Narhe, Pune,
              Maharashtra, 411041, India
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">
              Room No./ Building No.
            </span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              Survey No. 3
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Locality</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              Narhe
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">City</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              Pune
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">State</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              Maharashtra
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Country</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              India
            </span>
          </div>
          <div className="space-x-2 ">
            <span className="text-regular border-b w-fit ">Pincode</span>
            <span className="font-semibold text-[1rem] text-regular">
              {" "}
              411041
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfileTab;
