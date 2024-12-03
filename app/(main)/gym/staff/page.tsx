"use client";
import { DataTable } from "@/components/gym/enquiry/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetTrainerColumns } from "./trainerColumns";
import { GetStaffColumns } from "./staffColumns";
import Store from "@/helpers/store";

const GymStaff = () => {
  const [showTab, setShowTab] = useState<"staff" | "trainer">("trainer");
  const { getGymAllStaffData, staffTableData } = Store.useStaff();

  const trainerColumns = GetTrainerColumns();
  const staffColumns = GetStaffColumns();

  useEffect(() => {
    getGymAllStaffData();
  }, [getGymAllStaffData]);

  return (
    <div>
      {/* Title  */}
      <div className="flex justify-between">
        <div className="space-x-[1em]">
          <Button
            variant={showTab == "trainer" ? "default" : "outline"}
            onClick={() => setShowTab("trainer")}
            className="w-[7em] uppercase"
          >
            Trainer
          </Button>
          <Button
            variant={showTab == "staff" ? "default" : "outline"}
            onClick={() => setShowTab("staff")}
            className="w-[7em] uppercase"
          >
            Staff
          </Button>
        </div>
        <Link href="/gym/staff/add-new-staff">
          <Button variant="outline">Add New Staff</Button>
        </Link>
      </div>

      {/* Table  */}
      <div className="max-w-[80vw]">
        {showTab === "trainer" ? (
          <DataTable columns={trainerColumns} data={staffTableData} />
        ) : (
          showTab === "staff" && (
            <DataTable columns={staffColumns} data={staffTableData} />
          )
        )}
      </div>
    </div>
  );
};

export default GymStaff;
