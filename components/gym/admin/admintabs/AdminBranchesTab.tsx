import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Network } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CiEdit } from "react-icons/ci";

const AdminBranchesTab = () => {
  return (
    <div className="space-y-5 ">
      {/* Brand Details */}
      <div className="flex items-center ">
        <span className="flex items-center  text-xl font-semibold text-blue-800 capitalize  space-x-2">
          {" "}
          <Network className="h-[0.9em]" /> <span className="">Branches</span>
        </span>
      </div>
      {[0, 1, 2].map((b) => (
        <div className="space-y-3" key={b}>
          {/* title  */}
          <div className="flex items-center border-b justify-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <Link href={"/gym/profile/branch/413"}>
                    <CiEdit className="w-[1.3em] h-[1.3em]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit Branch</p>
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
              <span className="text-regular border-b w-fit ">Branch Name</span>
              <span className="font-semibold text-[3rem] text-regular">
                {b == 0 ? "Pune" : b == 1 ? "Mumbai" : b == 2 && "Banglore"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminBranchesTab;
