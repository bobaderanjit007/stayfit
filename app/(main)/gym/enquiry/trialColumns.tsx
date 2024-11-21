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

export type Trial = {
  id: string;
  name: string;
  phone: number;
  gender: "male" | "female";
  trialStartDate?: Date;
  trialEndDate?: Date;
  enqStatus: "enquiry" | "follow-up" | "converted" | "closed";
  enqDate: Date; // enquiry date (save while form submission)
  followUpDate?: Date;
  remark?: string;
  expectedJoining?: Date;
  assignedTo?: string;
  referenceType?: "walk-in" | "reference" | "promotion" | "stayfit";
  reference?: string;
  createdBy?: string;
  updatedBy?: string;
};

export const trialColumns: ColumnDef<Trial>[] = [
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
      const enquiry = row.original;
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
                onClick={() => navigator.clipboard.writeText(enquiry.id)}
              >
                Follow up
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/gym/members/${enquiry.id}/add-new-member`}>
                  Convert to member
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Close enquiry</DropdownMenuItem>
              <DropdownMenuItem>Change Trial Date</DropdownMenuItem>
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
    accessorKey: "trialStartDate",
    header: "Trial Start Date",
  },
  {
    accessorKey: "trialEndDate",
    header: "Trial End Date",
  },
  {
    accessorKey: "enqStatus",
    header: "Enquiry Status",
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
    accessorKey: "remark",
    header: "Remark",
  },

  {
    accessorKey: "expectedJoining",
    header: "Expected Joining",
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
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
    accessorKey: "createdBy",
    header: "Created By",
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
  },
];
