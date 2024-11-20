"use client";
import { DataTable } from "@/components/gym/enquiry/data-table";
import MembersTab from "@/components/gym/members/MembersTab";
import React, { useState } from "react";
import { columns, Member } from "./columns";

const randomMembers: Member[] = [
  {
    id: "1",
    name: "John Doe",
    phone: 9876543210,
    gender: "male",
    regnDate: new Date("2024-11-01T10:00:00Z"),
    lastExpiry: new Date("2024-11-01T10:00:00Z"),
    status: "active",
    dob: new Date("2000-04-01T10:00:00Z"),
    lastUpdated: new Date("2024-11-02T15:30:00Z"),
    assignedTo: "Alice Smith",
    createdBy: "Bob Johnson",
  },
  {
    id: "2",
    name: "Jane Smith",
    phone: 9123456789,
    gender: "female",
    regnDate: new Date("2024-11-05T12:30:00Z"),
    lastExpiry: new Date("2024-11-05T12:30:00Z"),
    status: "inactive",
    dob: new Date("2000-04-01T10:00:00Z"),
    lastUpdated: new Date("2024-11-06T09:15:00Z"),
    assignedTo: "Charlie Brown",
    createdBy: "Alice Smith",
  },
  {
    id: "3",
    name: "Michael Johnson",
    phone: 9807654321,
    gender: "male",
    regnDate: new Date("2024-11-10T14:00:00Z"),
    lastExpiry: new Date("2024-11-10T14:00:00Z"),
    status: "active",
    dob: new Date("2000-04-01T10:00:00Z"),
    lastUpdated: new Date("2024-11-11T10:20:00Z"),
    assignedTo: "David Lee",
    createdBy: "Bob Johnson",
  },
  {
    id: "4",
    name: "Emily Davis",
    phone: 9654321098,
    gender: "female",
    regnDate: new Date("2024-11-07T08:30:00Z"),
    lastExpiry: new Date("2025-01-25T00:00:00Z"),
    status: "inactive",
    dob: new Date("2000-04-01T10:00:00Z"),
    lastUpdated: new Date("2024-11-08T11:45:00Z"),
    assignedTo: "Eve Adams",
    createdBy: "Charlie Brown",
  },
  {
    id: "5",
    name: "Robert Wilson",
    phone: 9736451023,
    gender: "male",
    regnDate: new Date("2024-11-12T16:00:00Z"),
    lastExpiry: new Date("2025-04-01T00:00:00Z"),
    status: "active",
    dob: new Date("2000-04-01T10:00:00Z"),
    lastUpdated: new Date("2024-11-13T09:05:00Z"),
    assignedTo: "Alice Smith",
    createdBy: "Eve Adams",
  },
];

const GymEnquiry = () => {
  const [showView, setShowView] = useState<string>("members");
  return (
    <div className="">
      {/* Tab  */}
      <MembersTab showView={showView} setShowView={setShowView} />
      {/* Filters  */}

      {/* Table  */}
      <div className="max-w-[80vw]">
        <DataTable columns={columns} data={randomMembers} />
      </div>
    </div>
  );
};

export default GymEnquiry;
