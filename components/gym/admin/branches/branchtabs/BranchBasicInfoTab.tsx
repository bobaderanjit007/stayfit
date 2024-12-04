"use client";
import React from "react";
import { MapPin, List, ReceiptIndianRupee } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { useParams } from "next/navigation";

const BranchBasicInfoTab = () => {
  const { branchId } = useParams();
  return (
    <div className="space-y-5 ">
      {/* Branch Logo */}
      {/* <div className="space-y-3">
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
            <Tag className="h-[0.9em] -rotate-45" />
            <span>Branch Logo</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <CiEdit className="w-[1.3em] h-[1.3em]" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Logo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div
          className="block w-[9em] h-[9em] hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full bg-slate-500 overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(https://via.placeholder.com/150)`, // Replace with actual image URL
          }}
        ></div>
      </div> */}

      {/* Basic Information */}
      <div className="space-y-3">
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
            <List className="h-[0.9em]" />
            <span>Basic Information</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={`/gym/profile/branch/${branchId}/edit-branch`}>
                  <CiEdit className="w-[1.3em] h-[1.3em]" />
                </Link>{" "}
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Branch</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-x-2 text-regular">
            <span className=" border-b w-fit ">Established In</span>
            <span className="font-semibold text-[1rem] ">26th Nov 2008</span>
          </div>
          <div className="space-x-2 text-regular">
            <span className=" border-b w-fit">Branch Type</span>
            <span className="font-semibold text-[1rem]">Indoor</span>
          </div>
          <div className="space-x-2 text-regular">
            <span className=" border-b w-fit">Branch For</span>
            <span className="font-semibold text-[1rem]">Unisex</span>
          </div>
          <div className="space-x-2 text-regular">
            <span className=" border-b w-fit">Carpet Area</span>
            <span className="font-semibold text-[1rem]">---</span>
          </div>
          <div className="space-x-2 text-regular col-span-2">
            <span className=" border-b w-fit">Amenities</span>
            <span className="font-semibold text-[1rem] flex flex-wrap ">
              {"CCTV, Water Purifier, Shower, Locker, Wi-Fi, Steam, Women's Section, Massage Room, Chairs"
                .split(", ")
                .map((aminity, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-200 mx-2 rounded-md py-1 px-2 my-2 line-clamp-1"
                    >
                      {aminity}
                    </span>
                  );
                })}
            </span>
          </div>
        </div>
      </div>

      {/* GST Details  */}
      <div className="space-y-3">
        {/* title  */}
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center  text-xl font-semibold text-blue-800 capitalize  space-x-2">
            {" "}
            <ReceiptIndianRupee className="h-[0.9em] " />{" "}
            <span>GST Details</span>
          </span>
        </div>
        {/* content  */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-x-2 col-span-2">
            <span className="text-regular border-b w-fit ">GST Charged On</span>
            <span className="font-semibold text-[1rem] text-regular">
              GST additional on package price
            </span>
          </div>
          <div className="space-x-2 col-span-2">
            <span className="text-regular border-b w-fit ">GST Number</span>
            <span className="font-semibold text-[1rem] text-regular">
              GST548639
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">GST Applicable</span>
            <span className="font-semibold text-[1rem] text-regular">No</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">CGST</span>
            <span className="font-semibold text-[1rem] text-regular">---</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">SGST</span>
            <span className="font-semibold text-[1rem] text-regular">---</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">IGST</span>
            <span className="font-semibold text-[1rem] text-regular">---</span>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-3">
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
            <MapPin className="h-[0.9em]" />
            <span>Address</span>
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

export default BranchBasicInfoTab;
