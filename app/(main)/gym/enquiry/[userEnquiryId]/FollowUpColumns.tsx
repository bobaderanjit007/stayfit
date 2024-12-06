import { ColumnDef } from "@tanstack/react-table";

export type FollowUpData = {
    remark: string; // Remark
    followUpDateTime: string; // Follow Up Date & Time
    action: string; // Action
    nextFollowUpDate: string; // Next Follow Up Date
    time: string; // Time
    staff: string; // Staff
  };
  
  export const EnquiryFollowUpColumns: ColumnDef<FollowUpData>[] = [
    {
      accessorKey: "followUpDateTime",
      header: "Follow Up Date & Time",
      cell: ({ row }) => row.getValue("followUpDateTime"),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => row.getValue("action"),
    },
    {
      accessorKey: "nextFollowUpDate",
      header: "Next Follow Up Date",
      cell: ({ row }) => row.getValue("nextFollowUpDate"),
    },
    {
      accessorKey: "time",
      header: "Time",
      cell: ({ row }) => row.getValue("time"),
    },
    {
      accessorKey: "remark",
      header: "Remark",
      cell: ({ row }) => row.getValue("remark"),
    },
    {
      accessorKey: "staff",
      header: "Staff",
      cell: ({ row }) => row.getValue("staff"),
    },
  ];