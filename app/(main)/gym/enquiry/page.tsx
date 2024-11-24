"use client";
import { DataTable } from "@/components/gym/enquiry/data-table";
import EnquiryTab from "@/components/gym/enquiry/EnquiryTab";
import React, { useState } from "react";
import { Enquiry, GetEnquiryColumns } from "./enquiryColumns";
import { GetTrialColumns, Trial } from "./trialColumns";
import EnquiryFollowUp from "@/components/gym/dialogs/enquiry/EnquiryFollowUp";
import TrialFollowUp from "@/components/gym/dialogs/enquiry/TrialFollowUp";
import ChangeTrailsDate from "@/components/gym/dialogs/enquiry/ChangeTrailsDate";
import CloseEnquiry from "@/components/gym/dialogs/enquiry/CloseEnquiry";

export type EnquiryFollowUpState = {
  show: boolean;
  enquiryData: Enquiry | null;
};
export type TrialFollowUpState = {
  show: boolean;
  trialData: Trial | null;
};

export type CloseEnquiryState = {
  show: boolean;
  enquiryId: string;
  name: string;
  remark?: string;
};

export type ChangeTrialDateState = {
  show: boolean;
  enquiryId: string;
  name: string;
  trialStartDate?: Date | null;
  trialEndDate?: Date | null;
};

const GymEnquiry = () => {
  const [showView, setShowView] = useState<string>("enquiry");
  const [enquiryFollowUp, setEnquiryFollowUp] = useState<EnquiryFollowUpState>({
    show: false,
    enquiryData: null,
  });
  const [trialFollowUp, setTrialFollowUp] = useState<TrialFollowUpState>({
    show: false,
    trialData: null,
  });
  const [closeEnquiry, setCloseEnquiry] = useState<CloseEnquiryState>({
    show: false,
    enquiryId: "",
    name: "",
    remark: "",
  });

  const [changeTrailDate, setChangeTrialDate] = useState<ChangeTrialDateState>({
    show: false,
    enquiryId: "",
    name: "",
    trialStartDate: null,
    trialEndDate: null,
  });

  const enquiryColumns = GetEnquiryColumns(setEnquiryFollowUp, setCloseEnquiry);
  const trialColumns = GetTrialColumns(
    setTrialFollowUp,
    setCloseEnquiry,
    setChangeTrialDate
  );
  return (
    <div className="">
      {/* Follow Up enquiry Dialog  */}
      <EnquiryFollowUp
        enquiryFollowUp={enquiryFollowUp}
        setEnquiryFollowUp={setEnquiryFollowUp}
      />
      {/* Follow Up trial Dialog  */}
      <TrialFollowUp
        trialFollowUp={trialFollowUp}
        setTrialFollowUp={setTrialFollowUp}
      />

      {/* Change Trial Date Dialog  */}
      <ChangeTrailsDate
        changeTrailDate={changeTrailDate}
        setChangeTrialDate={setChangeTrialDate}
      />

      {/* Close Enquiry Dialog */}
      <CloseEnquiry
        closeEnquiry={closeEnquiry}
        setCloseEnquiry={setCloseEnquiry}
      />

      {/* Tab  */}
      <EnquiryTab showView={showView} setShowView={setShowView} />

      {/* Table  */}
      <div className="max-w-[80vw]">
        {showView === "enquiry" ? (
          <DataTable columns={enquiryColumns} data={randomEnquiries} />
        ) : (
          <DataTable columns={trialColumns} data={randomTrials} />
        )}
      </div>
    </div>
  );
};

export default GymEnquiry;

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

const randomTrials: Trial[] = [
  {
    id: "trial-001",
    name: "John Doe",
    phone: 9876543210,
    gender: "male",
    trialStartDate: new Date("2024-01-10"),
    trialEndDate: new Date("2024-01-15"),
    enqStatus: "converted",
    enqDate: new Date("2024-01-08"),
    followUpDate: new Date("2024-01-12"),
    remark: "Looking for premium plan",
    expectedJoining: new Date("2024-01-20"),
    assignedTo: "Alex Smith",
    referenceType: "walk-in",
    createdBy: "admin",
    updatedBy: "staff",
  },
  {
    id: "trial-002",
    name: "Jane Smith",
    phone: 9876541234,
    gender: "female",
    enqStatus: "follow-up",
    enqDate: new Date("2024-02-01"),
    followUpDate: new Date("2024-02-05"),
    remark: "Interested in yoga classes",
    expectedJoining: new Date("2024-02-10"),
    assignedTo: "Emma Davis",
    referenceType: "reference",
    reference: "Sophia Johnson",
    createdBy: "staff",
    updatedBy: "admin",
  },
  {
    id: "trial-003",
    name: "Robert Brown",
    phone: 9123456789,
    gender: "male",
    trialStartDate: new Date("2024-03-15"),
    trialEndDate: new Date("2024-03-20"),
    enqStatus: "enquiry",
    enqDate: new Date("2024-03-10"),
    followUpDate: new Date("2024-03-18"),
    remark: "Considering group classes",
    referenceType: "promotion",
    reference: "Online Campaign",
    createdBy: "admin",
    updatedBy: "staff",
  },
  {
    id: "trial-004",
    name: "Emily Davis",
    phone: 9234567890,
    gender: "female",
    enqStatus: "closed",
    enqDate: new Date("2024-04-05"),
    followUpDate: new Date("2024-04-12"),
    remark: "Not interested currently",
    assignedTo: "Chris White",
    referenceType: "stayfit",
    reference: "StayFit Newsletter",
    createdBy: "staff",
  },
  {
    id: "trial-005",
    name: "Michael Johnson",
    phone: 9345678901,
    gender: "male",
    trialStartDate: new Date("2024-05-01"),
    trialEndDate: new Date("2024-05-07"),
    enqStatus: "converted",
    enqDate: new Date("2024-04-25"),
    expectedJoining: new Date("2024-05-10"),
    assignedTo: "Olivia Green",
    referenceType: "walk-in",
    createdBy: "admin",
  },
  {
    id: "trial-006",
    name: "Sarah Wilson",
    phone: 9456789012,
    gender: "female",
    enqStatus: "follow-up",
    enqDate: new Date("2024-06-01"),
    followUpDate: new Date("2024-06-05"),
    remark: "Requires family membership",
    assignedTo: "David Lee",
    referenceType: "reference",
    reference: "William Harris",
    createdBy: "staff",
    updatedBy: "admin",
  },
  {
    id: "trial-007",
    name: "James Taylor",
    phone: 9567890123,
    gender: "male",
    trialStartDate: new Date("2024-07-15"),
    trialEndDate: new Date("2024-07-20"),
    enqStatus: "converted",
    enqDate: new Date("2024-07-10"),
    expectedJoining: new Date("2024-07-25"),
    assignedTo: "Laura Moore",
    referenceType: "promotion",
    reference: "Social Media Ad",
    createdBy: "admin",
  },
  {
    id: "trial-008",
    name: "Sophia Moore",
    phone: 9678901234,
    gender: "female",
    enqStatus: "follow-up",
    enqDate: new Date("2024-08-01"),
    followUpDate: new Date("2024-08-10"),
    remark: "Interested in evening batches",
    assignedTo: "Tom Brown",
    referenceType: "walk-in",
    createdBy: "staff",
  },
  {
    id: "trial-009",
    name: "William Harris",
    phone: 9789012345,
    gender: "male",
    trialStartDate: new Date("2024-09-05"),
    trialEndDate: new Date("2024-09-10"),
    enqStatus: "enquiry",
    enqDate: new Date("2024-09-01"),
    followUpDate: new Date("2024-09-07"),
    remark: "Requested trainer consultation",
    referenceType: "stayfit",
    reference: "StayFit Magazine",
    createdBy: "admin",
    updatedBy: "staff",
  },
  {
    id: "trial-010",
    name: "Ava Martinez",
    phone: 9890123456,
    gender: "female",
    enqStatus: "closed",
    enqDate: new Date("2024-10-01"),
    followUpDate: new Date("2024-10-05"),
    remark: "Joined another gym",
    assignedTo: "Chris White",
    referenceType: "reference",
    reference: "Sophia Johnson",
    createdBy: "staff",
  },
  {
    id: "trial-011",
    name: "Liam Walker",
    phone: 9901234567,
    gender: "male",
    trialStartDate: new Date("2024-11-15"),
    trialEndDate: new Date("2024-11-20"),
    enqStatus: "converted",
    enqDate: new Date("2024-11-10"),
    expectedJoining: new Date("2024-11-25"),
    assignedTo: "Olivia Green",
    referenceType: "walk-in",
    createdBy: "admin",
  },
  {
    id: "trial-012",
    name: "Ella Gonzalez",
    phone: 9812345678,
    gender: "female",
    enqStatus: "follow-up",
    enqDate: new Date("2024-12-05"),
    followUpDate: new Date("2024-12-10"),
    remark: "Needs evening slot availability",
    assignedTo: "David Lee",
    referenceType: "promotion",
    reference: "Social Media Campaign",
    createdBy: "staff",
  },
  {
    id: "trial-013",
    name: "Daniel Young",
    phone: 9723456789,
    gender: "male",
    trialStartDate: new Date("2024-12-20"),
    trialEndDate: new Date("2024-12-25"),
    enqStatus: "converted",
    enqDate: new Date("2024-12-15"),
    expectedJoining: new Date("2025-01-01"),
    assignedTo: "Emma Davis",
    referenceType: "stayfit",
    reference: "StayFit Workshop",
    createdBy: "admin",
    updatedBy: "staff",
  },
];
