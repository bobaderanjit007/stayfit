import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type staff = {
  sr_no: string;
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
