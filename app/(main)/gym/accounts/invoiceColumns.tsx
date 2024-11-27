import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type Invoice = {
  invoice_no: string;
  invoice_date: string;
  name: string;
  gst_no: string;
  phone_no: string;
  sub_details: string;
  payment_status: string;
  invoice_amc: string;
  paid_amount: string;
  pending_amount: string;
  writeoff_amount: string;
  due_date: string;
  created_by: string;
};

export const GetInvoiceColumns = () => {
  const invoiceColumns: ColumnDef<Invoice>[] = [
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
      accessorKey: "invoice_no",
      header: "Invoice No",
    },
    {
      accessorKey: "invoice_date",
      header: "Invoice Date",
    },
    {
      accessorKey: "name",
      header: "Member Name",
    },
    {
      accessorKey: "gst_no",
      header: "GST No",
    },
    {
      accessorKey: "phone_no",
      header: "Phone No",
    },
    {
      accessorKey: "sub_details",
      header: "Sub Details",
    },
    {
      accessorKey: "payment_status",
      header: "Payment Status",
    },
    {
      accessorKey: "invoice_amc",
      header: "Invoice AMC",
    },
    {
      accessorKey: "paid_amount",
      header: "Paid Amount",
    },
    {
      accessorKey: "pending_amount",
      header: "Pending Amount",
    },
    {
      accessorKey: "writeoff_amount",
      header: "Writeoff Amount",
    },
    {
      accessorKey: "due_date",
      header: "Due Date",
    },
    {
      accessorKey: "created_by",
      header: "Created By",
    },
  ];

  return invoiceColumns;
};
