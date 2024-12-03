import { MapPin } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CiEdit } from "react-icons/ci";

const BranchServicesTab = () => {
  return (
    <div>
      {" "}
      <div className="space-y-3">
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
            <MapPin className="h-[0.9em]" />
            <span>Services</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <CiEdit className="w-[1.3em] h-[1.3em]" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Services</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default BranchServicesTab;
