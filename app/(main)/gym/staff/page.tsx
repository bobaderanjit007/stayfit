"use client";
import { DataTable } from "@/components/gym/enquiry/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { GetTrainerColumns } from "./trainerColumns";
import { GetStaffColumns } from "./staffColumns";

const GymStaff = () => {
  const [showTab, setShowTab] = useState<"staff" | "trainer">("trainer");

  const trainerColumns = GetTrainerColumns();
  const staffColumns = GetStaffColumns();

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
        {showTab == "staff" ? (
          <Link href="/gym/staff/add-new-staff">
            <Button variant="outline">Add New Staff</Button>
          </Link>
        ) : (
          showTab == "trainer" && (
            <Link href="/gym/staff/add-new-trainer">
              <Button variant="outline">Add New Trainer</Button>
            </Link>
          )
        )}
      </div>

      {/* Table  */}
      <div className="max-w-[80vw]">
        {showTab === "trainer" ? (
          <DataTable columns={trainerColumns} data={[]} />
        ) : (
          showTab === "staff" && <DataTable columns={staffColumns} data={[]} />
        )}
      </div>
    </div>
  );
};

export default GymStaff;
