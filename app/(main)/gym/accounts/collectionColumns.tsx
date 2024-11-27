export type Collection = {
  receipt_no: string;
  payment_date: string;
  payment_mode: string;
  paid_amount: string;
  name: string;
  invoice_no: string;
  sub_details: string;
  comment: string;
  created_by: string;
};

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export const GetCollectionColumns = () => {
  const collectionColumns: ColumnDef<Collection>[] = [
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
      accessorKey: "receipt_no",
      header: "Receipt No",
    },
    {
      accessorKey: "payment_date",
      header: "Payment Date",
    },
    {
      accessorKey: "payment_mode",
      header: "Payment Mode",
    },
    {
      accessorKey: "paid_amount",
      header: "Paid Amount",
    },
    {
      accessorKey: "name",
      header: "Member Name",
    },
    {
      accessorKey: "invoice_no",
      header: "Invoice No",
    },
    {
      accessorKey: "sub_details",
      header: "Sub Details",
    },
    {
      accessorKey: "comment",
      header: "Comment",
    },
    {
      accessorKey: "created_by",
      header: "Created By",
    },
  ];

  return collectionColumns;
};
