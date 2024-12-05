"use client";
import { Clock3 } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CiEdit } from "react-icons/ci";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/gym/enquiry/data-table";
import Link from "next/link";
import { useParams } from "next/navigation";

export type BranchTiming = {
  name: string;
  opening: string;
  closing: string;
};

export const BranchTimingColumns: ColumnDef<BranchTiming>[] = [
  {
    accessorKey: "name",
    header: "Day",
    cell: ({ row }) => <span>{row.original.name}</span>,
  },
  {
    accessorKey: "opening",
    header: "Opening Time",
    cell: ({ row }) => <span>{row.original.opening}</span>,
  },
  {
    accessorKey: "closing",
    header: "Closing Time",
    cell: ({ row }) => <span>{row.original.closing}</span>,
  },
];

export const data = [
  { name: "Monday", opening: "06:00", closing: "22:00" },
  { name: "Tuesday", opening: "06:00", closing: "22:00" },
  { name: "Wednesday", opening: "06:00", closing: "22:00" },
  { name: "Thursday", opening: "06:00", closing: "22:00" },
  { name: "Friday", opening: "06:00", closing: "22:00" },
  { name: "Saturday", opening: "06:00", closing: "22:00" },
];

const BranchTimingTab = () => {
  const { branchId } = useParams();
  return (
    <div className="space-y-3 px-2">
      <div className="flex items-center border-b justify-between">
        <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
          <Clock3 className="h-[0.9em]" />
          <span>Timing</span>
        </span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href={`/gym/profile/branch/${branchId}/edit-timing`}>
                {" "}
                <CiEdit className="w-[1.3em] h-[1.3em]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Timing</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <DataTable columns={BranchTimingColumns} data={data} />
    </div>
  );
};

export default BranchTimingTab;
