"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { X } from "lucide-react";

export type PlanPackages = {
  id: string;
  name: string;
  duration: number;
  sessions: number;
  packagePrice: number;
  discount: number;
  netPrice: number;
};

export const planColumns: ColumnDef<PlanPackages>[] = [
  {
    accessorKey: "name",
    header: "Package Name",
  },

  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "packagePrice",
    header: "Package Price",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "netPrice",
    header: "Net Price",
  },
  {
    id: "remove",
    header: "",
    cell: () => {
      return (
        <div className="py-1">
          <X className="text-[#4a4a4a] h-5 cursor-pointer" />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
