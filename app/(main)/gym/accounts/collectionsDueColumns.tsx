"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type CollectionsDue = {
  id: string;
  invoiceNo: string;
  invoiceDate: string;
  name: string;
  status: string;
  phoneNo: string;
  subDetails: string;
  paymentStatus: string;
  invoiceAmount: string;
  paidAmount: string;
  pendingAmount: string;
  writeoffAmount: string;
  dueDate: string;
  createdBy: string;
};

export const GetCollectionsDueColumns = (): ColumnDef<CollectionsDue>[] => {
  const collectionsDueColumns: ColumnDef<CollectionsDue>[] = [
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
    {
      accessorKey: "invoiceNo",
      header: "Invoice No",
    },
    {
      accessorKey: "invoiceDate",
      header: "Invoice Date",
    },
    {
      accessorKey: "name",
      header: "Member Name",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "phoneNo",
      header: "Phone No",
    },
    {
      accessorKey: "subDetails",
      header: "Sub Details",
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
    },
    {
      accessorKey: "invoiceAmount",
      header: "Invoice Amount",
    },
    {
      accessorKey: "paidAmount",
      header: "Paid Amount",
    },
    {
      accessorKey: "pendingAmount",
      header: "Pending Amount",
    },
    {
      accessorKey: "writeoffAmount",
      header: "Writeoff Amount",
    },
    {
      accessorKey: "dueDate",
      header: "Due Date",
    },
    {
      accessorKey: "createdBy",
      header: "Created By",
    },
  ];

  return collectionsDueColumns;
};
