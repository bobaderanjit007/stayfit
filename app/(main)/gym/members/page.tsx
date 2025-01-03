"use client";
import { DataTable } from "@/components/gym/enquiry/data-table";
import MembersTab from "@/components/gym/members/MembersTab";
import React, { useEffect, useState } from "react";
import { memberColumns } from "./memberColumns";
import { Subscription, subscriptionColumns } from "./subscriptionColumns";
import Store from "@/helpers/store";

const GymEnquiry = () => {
  const [showView, setShowView] = useState<string>("members");
  const { getGymAllMembersData, membersTableData } = Store.useMember();

  useEffect(() => {
    getGymAllMembersData();
  }, [getGymAllMembersData]);

  return (
    <div className="">
      {/* Tab  */}
      <MembersTab showView={showView} setShowView={setShowView} />

      {/* Table  */}
      <div className="w-full">
        {showView == "members" ? (
          <DataTable columns={memberColumns} data={membersTableData} />
        ) : (
          <DataTable columns={subscriptionColumns} data={randomSubscriptions} />
        )}
      </div>
    </div>
  );
};

export default GymEnquiry;

const randomSubscriptions: Subscription[] = [
  {
    id: "sub-001",
    name: "John Doe",
    phone: 9876543210,
    gender: "male",
    regnDate: new Date("2024-01-10"),
    planName: "Premium Plan",
    subType: "membership plan",
    package: "Annual",
    trainer: "Alex Smith",
    subStartDate: new Date("2024-01-15"),
    subValidUpto: new Date("2025-01-15"),
    subCreateDate: new Date("2024-01-10"),
    createdBy: "admin",
    lastPaymentComment: "Paid in full",
    manualReceiptNo: "REC00123",
  },
  {
    id: "sub-002",
    name: "Jane Smith",
    phone: 9876541234,
    gender: "female",
    regnDate: new Date("2024-02-01"),
    planName: "Basic Plan",
    subType: "trainer plan",
    package: "Monthly",
    trainer: "Emma Davis",
    subStartDate: new Date("2024-02-05"),
    subValidUpto: new Date("2024-03-05"),
    subCreateDate: new Date("2024-02-01"),
    createdBy: "staff",
    lastPaymentComment: "First payment received",
    manualReceiptNo: "REC00124",
  },
  {
    id: "sub-003",
    name: "Robert Brown",
    phone: 9123456789,
    gender: "male",
    regnDate: new Date("2024-03-15"),
    planName: "Gold Plan",
    subType: "membership plan",
    package: "Quarterly",
    trainer: "Sophia Johnson",
    subStartDate: new Date("2024-03-20"),
    subValidUpto: new Date("2024-06-20"),
    subCreateDate: new Date("2024-03-15"),
    createdBy: "admin",
    lastPaymentComment: "Pending next payment",
    manualReceiptNo: "REC00125",
  },
  {
    id: "sub-004",
    name: "Emily Davis",
    phone: 9234567890,
    gender: "female",
    regnDate: new Date("2024-04-10"),
    planName: "Silver Plan",
    subType: "trainer plan",
    package: "Monthly",
    trainer: "Chris White",
    subStartDate: new Date("2024-04-15"),
    subValidUpto: new Date("2024-05-15"),
    subCreateDate: new Date("2024-04-10"),
    createdBy: "staff",
    lastPaymentComment: "Paid via bank transfer",
    manualReceiptNo: "REC00126",
  },
  {
    id: "sub-005",
    name: "Michael Johnson",
    phone: 9345678901,
    gender: "male",
    regnDate: new Date("2024-05-20"),
    planName: "Premium Plan",
    subType: "membership plan",
    package: "Half-Yearly",
    trainer: "Olivia Green",
    subStartDate: new Date("2024-05-25"),
    subValidUpto: new Date("2024-11-25"),
    subCreateDate: new Date("2024-05-20"),
    createdBy: "admin",
    lastPaymentComment: "Paid in full",
    manualReceiptNo: "REC00127",
  },
  {
    id: "sub-006",
    name: "Sarah Wilson",
    phone: 9456789012,
    gender: "female",
    regnDate: new Date("2024-06-01"),
    planName: "Gold Plan",
    subType: "trainer plan",
    package: "Quarterly",
    trainer: "David Lee",
    subStartDate: new Date("2024-06-05"),
    subValidUpto: new Date("2024-09-05"),
    subCreateDate: new Date("2024-06-01"),
    createdBy: "staff",
    lastPaymentComment: "Discount applied",
    manualReceiptNo: "REC00128",
  },
  {
    id: "sub-007",
    name: "James Taylor",
    phone: 9567890123,
    gender: "male",
    regnDate: new Date("2024-07-15"),
    planName: "Silver Plan",
    subType: "membership plan",
    package: "Annual",
    trainer: "Laura Moore",
    subStartDate: new Date("2024-07-20"),
    subValidUpto: new Date("2025-07-20"),
    subCreateDate: new Date("2024-07-15"),
    createdBy: "admin",
    lastPaymentComment: "Early bird discount",
    manualReceiptNo: "REC00129",
  },
  {
    id: "sub-008",
    name: "Sophia Moore",
    phone: 9678901234,
    gender: "female",
    regnDate: new Date("2024-08-01"),
    planName: "Premium Plan",
    subType: "trainer plan",
    package: "Monthly",
    trainer: "Tom Brown",
    subStartDate: new Date("2024-08-05"),
    subValidUpto: new Date("2024-09-05"),
    subCreateDate: new Date("2024-08-01"),
    createdBy: "staff",
    lastPaymentComment: "Paid via card",
    manualReceiptNo: "REC00130",
  },
  {
    id: "sub-009",
    name: "William Harris",
    phone: 9789012345,
    gender: "male",
    regnDate: new Date("2024-09-10"),
    planName: "Gold Plan",
    subType: "membership plan",
    package: "Half-Yearly",
    trainer: "Emma Davis",
    subStartDate: new Date("2024-09-15"),
    subValidUpto: new Date("2025-03-15"),
    subCreateDate: new Date("2024-09-10"),
    createdBy: "admin",
    lastPaymentComment: "On-time payment",
    manualReceiptNo: "REC00131",
  },
  {
    id: "sub-010",
    name: "Ava Martinez",
    phone: 9890123456,
    gender: "female",
    regnDate: new Date("2024-10-01"),
    planName: "Silver Plan",
    subType: "trainer plan",
    package: "Quarterly",
    trainer: "Chris White",
    subStartDate: new Date("2024-10-05"),
    subValidUpto: new Date("2025-01-05"),
    subCreateDate: new Date("2024-10-01"),
    createdBy: "staff",
    lastPaymentComment: "Partial payment",
    manualReceiptNo: "REC00132",
  },
  {
    id: "sub-011",
    name: "Liam Walker",
    phone: 9901234567,
    gender: "male",
    regnDate: new Date("2024-11-20"),
    planName: "Premium Plan",
    subType: "membership plan",
    package: "Monthly",
    trainer: "Olivia Green",
    subStartDate: new Date("2024-11-25"),
    subValidUpto: new Date("2024-12-25"),
    subCreateDate: new Date("2024-11-20"),
    createdBy: "admin",
    lastPaymentComment: "No comments",
    manualReceiptNo: "REC00133",
  },
  {
    id: "sub-012",
    name: "Ella Gonzalez",
    phone: 9812345678,
    gender: "female",
    regnDate: new Date("2024-12-05"),
    planName: "Basic Plan",
    subType: "trainer plan",
    package: "Monthly",
    trainer: "David Lee",
    subStartDate: new Date("2024-12-10"),
    subValidUpto: new Date("2025-01-10"),
    subCreateDate: new Date("2024-12-05"),
    createdBy: "staff",
    lastPaymentComment: "Pending receipt",
    manualReceiptNo: "REC00134",
  },
  {
    id: "sub-013",
    name: "Daniel Young",
    phone: 9723456789,
    gender: "male",
    regnDate: new Date("2024-12-15"),
    planName: "Gold Plan",
    subType: "membership plan",
    package: "Annual",
    trainer: "Emma Davis",
    subStartDate: new Date("2024-12-20"),
    subValidUpto: new Date("2025-12-20"),
    subCreateDate: new Date("2024-12-15"),
    createdBy: "admin",
    lastPaymentComment: "Early full payment",
    manualReceiptNo: "REC00135",
  },
];
