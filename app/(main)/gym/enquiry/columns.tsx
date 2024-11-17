"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export type Enquiry = {
  id: string;
  name: string;
  phone: number;
  gender: "male" | "female";
  followUpDate?: Date;
  enqStatus: "enquiry" | "follow-up" | "converted" | "closed";
  leadType: "converted" | "hot" | "cold" | "warm" | "free-trial" | "expected";
  expectedJoining?: Date;
  enqDate: Date; // enquiry date (save while form submission)
  lastUpdated?: Date; // last updated date and time (Save while enquiry updation)
  remark?: string;
  lastCallStatus?:
    | "call-connected"
    | "call-not-connected"
    | "call-busy"
    | "ringing-not-responding";
  referenceType?: "walk-in" | "reference" | "promotion" | "stayfit";
  reference?: string;
  assignedTo?: string;
  updatedBy?: string;
};

export const columns: ColumnDef<Enquiry>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <React.Fragment>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />{" "}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Follow up
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/gym/members/add-new-member">
                  Convert to member
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Close enquiry</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </React.Fragment>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone no.
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "gender",
    header: () => <div className="text-left">Gender</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("gender")}</div>
      );
    },
  },
  {
    accessorKey: "enqDate",
    header: "Enquiry Date",
  },
  {
    accessorKey: "followUpDate",
    header: "Follow Up Date",
  },

  {
    accessorKey: "expectedJoining",
    header: "Expected Joining",
  },

  {
    accessorKey: "enqStatus",
    header: "Enquiry Status",
  },
  {
    accessorKey: "leadType",
    header: "Lead type",
  },
  {
    accessorKey: "remark",
    header: "Remark",
  },
  {
    accessorKey: "lastCallStatus",
    header: "Last call status",
  },
  {
    accessorKey: "referenceType",
    header: "Reference Type",
  },
  {
    accessorKey: "reference",
    header: "Reference",
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
  },

  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  },
];
