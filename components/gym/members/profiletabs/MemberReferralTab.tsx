import { ListCheck } from "lucide-react";
import React from "react";
import { DataTable } from "../../enquiry/data-table";
import { ColumnDef } from "@tanstack/react-table";

interface ReferralData {
  name: string; // referred to
  srNo: string;
  date: string;
  referralPoints: number;
}

const referralColumns: ColumnDef<ReferralData>[] = [
  {
    header: "Referred To",
    accessorKey: "name",
  },
  {
    header: "SR NO",
    accessorKey: "srNo",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Referral Points",
    accessorKey: "referralPoints",
  },
];

const MemberReferralTab = () => {
  return (
    <div>
      <span className="flex items-center text-xl font-semibold text-blue-800 capitalize space-x-2">
        <ListCheck className="h-[0.9em]" />
        <span>Refferal Points summary</span>
      </span>

      <DataTable columns={referralColumns} data={[]} />
    </div>
  );
};

export default MemberReferralTab;
