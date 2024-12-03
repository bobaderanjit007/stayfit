import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { staff } from "./staffColumns";

export const GetTrainerColumns = () => {
  const trainerColumns: ColumnDef<staff>[] = [
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
      header: "Date Of Joining",
    },
    {
      accessorKey: "email_id",
      header: "Emial",
    },
    {
      accessorKey: "login_status",
      header: "Status",
    },
    {
      accessorKey: "created_by",
      header: "Created By",
    },
  ];

  return trainerColumns;
};
