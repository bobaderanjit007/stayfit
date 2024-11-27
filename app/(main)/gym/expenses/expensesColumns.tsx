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

export type Expenses = {
  id: string;
  name: string;
  type_of_expense: string;
  entry_date?: string;
  bill_no?: string;
  bill_date?: string;
  party_name?: string;
  bill_amount?: string;
  paid?: string;
  mode?: string;
  balance?: string;
  due_date?: string;
  docs?: string;
  created_by?: string;
};

export const GetExpenseColumns = () => {
  const expensesColumns: ColumnDef<Expenses>[] = [
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
                <DropdownMenuItem className="p-">Follow Up</DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href={`/gym/members/${enquiry.id}/add-new-member`}
                    className="w-full p-2"
                  >
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
      accessorKey: "type_of_expense",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Type of expense
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "entry_date",
      header: () => <div className="text-left">Entry Date</div>,
      cell: ({ row }) => {
        return (
          <div className="text-left font-medium">{row.getValue("gender")}</div>
        );
      },
    },
    {
      accessorKey: "bill_no",
      header: "Bill No",
    },
    {
      accessorKey: "bill_date",
      header: "Bill Date",
    },

    {
      accessorKey: "party_name",
      header: "Party Name",
    },

    {
      accessorKey: "bill_amount",
      header: "Bill Amount",
    },
    {
      accessorKey: "paid",
      header: "Paid",
    },
    {
      accessorKey: "mode",
      header: "Mode",
    },
    {
      accessorKey: "balance",
      header: "Balance",
    },
    {
      accessorKey: "due_date",
      header: "Due Date",
    },
    {
      accessorKey: "docs",
      header: "Docs",
    },
    {
      accessorKey: "created_by",
      header: "Created By",
    },
  ];

  return expensesColumns;
};
