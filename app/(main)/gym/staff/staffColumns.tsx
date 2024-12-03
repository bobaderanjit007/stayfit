import { ColumnDef } from "@tanstack/react-table";
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
import { Button } from "@/components/ui/button";
import React from "react";
import { MoreHorizontal } from "lucide-react";

export type staff = {
  id: string;
  name: string;
  phone_no: string;
  gender: string;
  dob: string;
  role: string;
  doj: string;
  email_id: string;
  login_status: string;
  created_by: string;
};

export const GetStaffColumns = () => {
  const staffColumns: ColumnDef<staff>[] = [
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
        const staff = row.original;
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
                    href={`/gym/staff/${staff.id}/profile`}
                    className="w-full p-2"
                  >
                    View Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500 hidden"
                  // onClick={() => {
                  //   deleteMemberById(Number(member.id));
                  // }}
                >
                  Delete Member
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
      accessorKey: "id",
      header: "Sr no",
    },
    {
      accessorKey: "name",
      header: "Staff Name",
    },
    {
      accessorKey: "phone_no",
      header: "Phone No",
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "dob",
      header: "Date Of Birth",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "doj",
      header: "Date of Joining",
    },
    {
      accessorKey: "email_id",
      header: "Email",
    },
    {
      accessorKey: "login_status",
      header: "Login Status",
    },
    {
      accessorKey: "created_by",
      header: "Created By",
    },
  ];
  return staffColumns;
};
