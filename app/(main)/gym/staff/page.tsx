"use client";
import { DataTable } from "@/components/gym/enquiry/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { GetTrainerColumns } from "./trainerColumns";
import { GetStaffColumns } from "./staffColumns";
import Store from "@/helpers/store";

const GymStaff = () => {
  const [showTab, setShowTab] = useState<"staff" | "trainer">("trainer");
  const {
    getGymAllStaffData,
    //  staffTableData
  } = Store.useStaff();

  const staffTableData = [
    {
      id: "1",
      name: "John Doe",
      phone_no: "9876543210",
      gender: "Male",
      dob: "1990-05-15",
      role: "Manager",
      doj: "2020-03-01",
      email_id: "john.doe@example.com",
      login_status: "active",
      created_by: "admin",
    },
    {
      id: "2",
      name: "Jane Smith",
      phone_no: "9123456789",
      gender: "Female",
      dob: "1985-10-20",
      role: "Trainer",
      doj: "2018-06-10",
      email_id: "jane.smith@example.com",
      login_status: "inactive",
      created_by: "admin",
    },
    {
      id: "3",
      name: "Robert Brown",
      phone_no: "9988776655",
      gender: "Male",
      dob: "1995-08-25",
      role: "Receptionist",
      doj: "2022-01-15",
      email_id: "robert.brown@example.com",
      login_status: "active",
      created_by: "manager",
    },
  ];

  // const trainerColumns = GetTrainerColumns();
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
          <DataTable columns={staffColumns} data={staffTableData} />
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
