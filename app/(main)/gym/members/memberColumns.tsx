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

export type Member = {
  id: string;
  name: string;
  phone: number;
  gender: "male" | "female";
  regnDate: Date; // registration date (save while form submission)
  lastExpiry?: Date;
  status: "active" | "inactive";
  emailId?: string;
  dob?: Date;
  referralPoints?: string;
  assignedTo?: string;
  createdBy?: string;
  lastUpdated?: Date; // last updated date and time (Save while enquiry updation)
};

export const memberColumns: ColumnDef<Member>[] = [
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
      const member = row.original;
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
              {/* <DropdownMenuItem className="p-0">
                <Link
                  href={`/`}
                  className="w-full p-2"
                >
                  Assign New MemberShip Plan
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem className="p-0">
                <Link
                  href={`/gym/members/${member.id}/profile`}
                  className="w-full p-2"
                >
                  View Profile
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </React.Fragment>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "sr no",
    header: "Sr No.",
    cell: ({ row }) => {
      return row.index + 1;
    },
  },
  {
    accessorKey: "name",
    header: "Member name",
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
    accessorKey: "regnDate",
    header: "Registraion Date",
  },
  {
    accessorKey: "lastExpiry",
    header: "Last Plan Expiry",
  },

  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "emailId",
    header: "Email ID",
  },
  {
    accessorKey: "dob",
    header: "Date Of Birth",
  },
  {
    accessorKey: "referralPoints",
    header: "Referral Points",
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  },
];
