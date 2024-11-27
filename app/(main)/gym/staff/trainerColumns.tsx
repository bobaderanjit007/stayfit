import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type trainer = {
  sr_no: string;
  name: string;
  phone_no: string;
  gender: string;
  dob: string;
  role: string;
  doj: string;
  email_id: string;
  status: string;
  created_by: string;
};

export const GetTrainerColumns = () => {
  const trainerColumns: ColumnDef<trainer>[] = [
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
      accessorKey: "sr_no",
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
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "created_by",
      header: "Created By",
    },
  ];

  return trainerColumns;
};
