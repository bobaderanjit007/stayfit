"use client";
import { DataTable } from "@/components/gym/enquiry/data-table";
import MembersTab from "@/components/gym/members/MembersTab";
import React, { useState } from "react";
import { columns, Enquiry } from "./columns";

const randomEnquiries: Enquiry[] = [
  {
    id: "1",
    name: "John Doe",
    phone: 9876543210,
    gender: "male",
    enqDate: new Date("2024-11-01T10:00:00Z"),
    followUpDate: new Date("2024-11-01T10:00:00Z"),
    expectedJoining: new Date("2025-01-15T00:00:00Z"),
    leadType: "converted",
    enqStatus: "enquiry",
    lastUpdated: new Date("2024-11-02T15:30:00Z"),
    remark: "Looking for a 6-month membership.",
    lastCallStatus: "call-connected",
    referenceType: "walk-in",
    reference: "Promoter",
    assignedTo: "Alice Smith",
    updatedBy: "Bob Johnson",
  },
  {
    id: "2",
    name: "Jane Smith",
    phone: 9123456789,
    gender: "female",
    enqDate: new Date("2024-11-05T12:30:00Z"),
    followUpDate: new Date("2024-11-05T12:30:00Z"),
    expectedJoining: new Date("2025-02-01T00:00:00Z"),
    leadType: "hot",
    enqStatus: "follow-up",
    lastUpdated: new Date("2024-11-06T09:15:00Z"),
    remark: "Interested in personal training.",
    lastCallStatus: "call-not-connected",
    referenceType: "reference",
    reference: "John Doe",
    assignedTo: "Charlie Brown",
    updatedBy: "Alice Smith",
  },
  {
    id: "3",
    name: "Michael Johnson",
    phone: 9807654321,
    gender: "male",
    enqDate: new Date("2024-11-10T14:00:00Z"),
    followUpDate: new Date("2024-11-10T14:00:00Z"),
    expectedJoining: new Date("2025-03-10T00:00:00Z"),
    leadType: "cold",
    enqStatus: "converted",
    lastUpdated: new Date("2024-11-11T10:20:00Z"),
    remark: "Not very interested, might join later.",
    lastCallStatus: "call-busy",
    referenceType: "promotion",
    reference: "Newsletter",
    assignedTo: "David Lee",
    updatedBy: "Bob Johnson",
  },
  {
    id: "4",
    name: "Emily Davis",
    phone: 9654321098,
    gender: "female",
    enqDate: new Date("2024-11-07T08:30:00Z"),
    followUpDate: new Date("2025-01-25T00:00:00Z"),
    expectedJoining: new Date("2025-01-25T00:00:00Z"),
    leadType: "warm",
    enqStatus: "follow-up",
    lastUpdated: new Date("2024-11-08T11:45:00Z"),
    remark: "Looking for a group workout plan.",
    lastCallStatus: "ringing-not-responding",
    referenceType: "stayfit",
    reference: "Instagram",
    assignedTo: "Eve Adams",
    updatedBy: "Charlie Brown",
  },
  {
    id: "5",
    name: "Robert Wilson",
    phone: 9736451023,
    gender: "male",
    enqDate: new Date("2024-11-12T16:00:00Z"),
    followUpDate: new Date("2025-04-01T00:00:00Z"),
    expectedJoining: new Date("2025-04-01T00:00:00Z"),
    leadType: "free-trial",
    enqStatus: "closed",
    lastUpdated: new Date("2024-11-13T09:05:00Z"),
    remark: "Free trial completed, did not join.",
    lastCallStatus: "call-connected",
    referenceType: "walk-in",
    reference: "Flyer",
    assignedTo: "Alice Smith",
    updatedBy: "Eve Adams",
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
        <DataTable columns={columns} data={randomEnquiries} />
      </div>
    </div>
  );
};

export default GymEnquiry;
