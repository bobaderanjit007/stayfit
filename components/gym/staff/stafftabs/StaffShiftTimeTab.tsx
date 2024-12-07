import { ListCheck, ReceiptIndianRupee } from "lucide-react";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../enquiry/data-table";

const StaffShiftTimeTab = () => {
  return (
    <div className="space-y-5 ">
      {/* Shift & Time */}
      <div className="space-y-3">
        {/* title  */}
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center  text-xl font-semibold text-blue-800 capitalize  space-x-2">
            {" "}
            <ListCheck className="h-[0.9em] " />{" "}
            <span className="">Shift & Time</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Link href="/gym/profile/edit-brand">
                  {" "}
                  <CiEdit className="w-[1.3em] h-[1.3em]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Shift & Time</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* content  */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Shift 1</span>
            <span className="font-semibold text-[1rem] text-regular">
              6:00 AM - 10:00 AM
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Shift 2</span>
            <span className="font-semibold text-[1rem] text-regular">
              6:00 PM - 10:00 PM
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Day Off</span>
            <span className="font-semibold text-[1rem] text-regular">
              Sunday
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">Working Hrs</span>
            <span className="font-semibold text-[1rem] text-regular">9</span>
          </div>
        </div>
      </div>

      {/* Salary */}
      <div className="space-y-3">
        {/* title  */}
        <div className="flex items-center border-b justify-between">
          <span className="flex items-center  text-xl font-semibold text-blue-800 capitalize  space-x-2">
            {" "}
            <ReceiptIndianRupee className="h-[0.9em] " />{" "}
            <span className="">Salary</span>
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Link href="/gym/profile/edit-brand">
                  {" "}
                  <CiEdit className="w-[1.3em] h-[1.3em]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Salary</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* content  */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">
              Salary Per Month
            </span>
            <span className="font-semibold text-[1rem] text-regular">7</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">
              Deduction on Absenty
            </span>
            <span className="font-semibold text-[1rem] text-regular">7</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">
              Deduction on LateMark
            </span>
            <span className="font-semibold text-[1rem] text-regular">0</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">
              Late Mark Allowed In A Month
            </span>
            <span className="font-semibold text-[1rem] text-regular">25</span>
          </div>
          <div className="space-x-2">
            <span className="text-regular border-b w-fit ">
              Leaves Allowed In A Month
            </span>
            <span className="font-semibold text-[1rem] text-regular">2</span>
          </div>
        </div>
      </div>

      {/* Calculate & Pay  */}
      <div className="flex w-full justify-end">
        <Button variant="outline">Calculate & Pay</Button>
      </div>

      {/* Salary History  */}
      <DataTable columns={salaryColumns} data={[]} searchBy="month" />
    </div>
  );
};

export default StaffShiftTimeTab;

interface SalaryData {
  month: string;
  createDate: string;
  salary: number;
  deduction: number;
  pay: number;
}

const salaryColumns: ColumnDef<SalaryData>[] = [
  {
    header: "Month",
    accessorKey: "month",
  },
  {
    header: "Create Date",
    accessorKey: "createDate",
  },
  {
    header: "Salary",
    accessorKey: "salary",
  },
  {
    header: "Deduction",
    accessorKey: "deduction",
  },
  {
    header: "Pay",
    accessorKey: "pay",
  },
];
