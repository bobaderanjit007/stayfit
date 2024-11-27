"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table"; // Replace with actual import path

export type Equipment = {
  id: string;
  name: string;
  number?: string;
  purpose?: string;
  purchase_date?: string;
  cost?: string;
  status?: string;
  next_service?: string;
  vendor_name?: string;
  manufacture?: string;
  category?: string;
  description?: string;
  equipment?: string;
  quantity?: number;
  length?: number;
  width?: number;
};

export const GetEquipmentColumns = () => {
  const equipmentColumns: ColumnDef<Equipment>[] = [
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
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "number", header: "Number" },
    { accessorKey: "purpose", header: "Purpose" },
    { accessorKey: "purchase_date", header: "Purchase Date" },
    { accessorKey: "cost", header: "Cost" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "next_service", header: "Next Service" },
    { accessorKey: "vendor_name", header: "Vendor Name" },
    { accessorKey: "manufacture", header: "Manufacture" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "equipment", header: "Equipment" },
    { accessorKey: "quantity", header: "Quantity" },
    { accessorKey: "length", header: "Length" },
    { accessorKey: "width", header: "Width" },
  ];

  return equipmentColumns;
};
