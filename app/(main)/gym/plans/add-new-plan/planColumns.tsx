"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export type PlanPackages = {
  id: string;
  name: string;
  duration: number;
  sessions: number;
  packagePrice: number;
  discount: number;
  netPrice: number;
};

export const getPlanColumns = (
  handleRemovePackage: (id: string) => void
): ColumnDef<PlanPackages>[] => {
  const planColumns: ColumnDef<PlanPackages>[] = [
    {
      accessorKey: "name",
      header: "Package Name",
    },

    {
      accessorKey: "sessions",
      header: "Sessions",
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
      id: "select",
      header: "",
      cell: ({ row }) => {
        const plan = row.original;
        return (
          <React.Fragment>
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
                <DropdownMenuItem onClick={() => handleRemovePackage(plan.id)}>
                  Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </React.Fragment>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
  ];

  return planColumns;
};
