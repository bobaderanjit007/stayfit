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

export type Subscription = {
  id: string;
  name: string;
  phone: number;
  gender: "male" | "female";
  regnDate: Date; // registration date (save while form submission)
  planName: string;
  subType: "membership plan" | "trainer plan";
  package: string;
  trainer?: string;
  subStartDate?: Date;
  subValidUpto?: Date;
  subCreateDate?: Date;
  createdBy?: string;
  lastPaymentComment?: string;
  manualReceiptNo?: string;
};

export const subscriptionColumns: ColumnDef<Subscription>[] = [
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
    accessorKey: "planName",
    header: "Plan Name",
  },

  {
    accessorKey: "subType",
    header: "Sub Type",
  },
  {
    accessorKey: "package",
    header: "Package",
  },
  {
    accessorKey: "trainer",
    header: "Trainer",
  },
  {
    accessorKey: "subStartDate",
    header: "Sub Start Date",
  },
  {
    accessorKey: "subValidUpto",
    header: "Sub Valid Upto",
  },
  {
    accessorKey: "subCreateDate",
    header: "Sub Create Date",
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
  },
  {
    accessorKey: "lastPaymentComment",
    header: "Last Payment Comment",
  },
  {
    accessorKey: "manualReceiptNo",
    header: "Manual Receipt No",
  },
];
