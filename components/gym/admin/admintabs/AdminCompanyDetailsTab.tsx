import { Building2, Landmark, ReceiptIndianRupee, Tag } from "lucide-react";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";

const AdminCompanyDetailsTab = () => {
  return (
    <div className="space-y-5 ">
      {/* Brand Details */}
      <div className="space-y-3">
        {/* title  */}
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center  text-xl font-semibold text-blue-800 capitalize  space-x-2">
            {" "}
            <Tag className="h-[0.9em] -rotate-45" />{" "}
            <span className="">Brand Details</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <CiEdit
                  className="w-[1.3em] h-[1.3em]"
                  // onClick={() => router.push("edit-profile")}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Brand</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* content  */}

        <div className="flex items-center space-x-5">
          <span
            className="block w-[9em] h-[9em] hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full bg-slate-500 overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/a5/a8/b9/a5a8b9ce5bda5871f138603fb10ce01d.jpg)`,
            }}
          ></span>

          <div className="flex flex-col w-[80%] overflow-auto">
            <span className="text-regular border-b w-fit ">Brand Name</span>
            <span className="font-semibold text-[3rem] text-regular">
              StayFit Fitness Club
            </span>
          </div>
        </div>
      </div>
      {/* Company Details  */}
      <div className="space-y-3">
        {/* title  */}
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center  text-xl font-semibold text-blue-800  capitalize  space-x-2">
            {" "}
            <Building2 className="h-[0.9em] " /> <span>Company Details</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <CiEdit
                  className="w-[1.3em] h-[1.3em]"
                  // onClick={() => router.push("edit-profile")}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Company</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* content  */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Company Name</span>
            <span className="font-semibold text-[1rem] text-regular">
              StayFit
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Pan Nubmer</span>
            <span className="font-semibold text-[1rem] text-regular">
              NUVPS4103P
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Established In</span>
            <span className="font-semibold text-[1rem] text-regular">
              26th Nov 2008
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Website</span>
            <Link
              href={"https://stayfit-beta.vercel.app"}
              target="_blank"
              className="font-semibold text-[1rem] text-blue-600"
            >
              https://stayfit-beta.vercel.app
            </Link>
          </div>
          <div className="space-x-2 col-span-2">
            <span className="text-regular border-b w-fit ">Address</span>
            <span className="font-semibold text-[1rem] text-regular">
              Plot no. 123, Building Antila, IIT Narhe, Pune 411041
            </span>
          </div>
        </div>
      </div>

      {/* Bank Details  */}
      <div className="space-y-3">
        {/* title  */}
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center  text-xl font-semibold text-blue-800 capitalize  space-x-2">
            {" "}
            <Landmark className="h-[0.9em] " /> <span>Bank Details</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <CiEdit
                  className="w-[1.3em] h-[1.3em]"
                  // onClick={() => router.push("edit-profile")}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Bank</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* content  */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Bank Name</span>
            <span className="font-semibold text-[1rem] text-regular">
              Bank Of India
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Bank Branch</span>
            <span className="font-semibold text-[1rem] text-regular">
              Ambegaon
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Account No</span>
            <span className="font-semibold text-[1rem] text-regular">
              BOI0001356898
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">IFSC</span>
            <span className="font-semibold text-[1rem] text-regular">
              BOI0001356898
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <CiEdit
                  className="w-[1.3em] h-[1.3em]"
                  // onClick={() => router.push("edit-profile")}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit GST</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* content  */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">GST Applicable</span>
            <span className="font-semibold text-[1rem] text-regular">No</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">CGST</span>
            <span className="font-semibold text-[1rem] text-regular">-</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">SGST</span>
            <span className="font-semibold text-[1rem] text-regular">-</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">IGST</span>
            <span className="font-semibold text-[1rem] text-regular">-</span>
          </div>
          <div className="space-x-2 col-span-2">
            <span className="text-regular border-b w-fit ">GST Charged On</span>
            <span className="font-semibold text-[1rem] text-regular">
              GST additional on package price
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">GST Number</span>
            <span className="font-semibold text-[1rem] text-regular">
              GST548639
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyDetailsTab;
