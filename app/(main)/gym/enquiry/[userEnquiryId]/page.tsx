"use client";
import React from "react";
import { DataTable } from "@/components/gym/enquiry/data-table";
import EnquiryProfileCard from "@/components/gym/enquiry/profile/EnquiryProfileCard";
import ContentTitle from "@/components/setup/ContentTitle";
import { EnquiryFollowUpColumns } from "./FollowUpColumns";

const EnquiryProfile = () => {
  return (
    <React.Fragment>
      <ContentTitle title="Enquiry Detials" />
      <div className="flex space-x-[3.2em] ">
        <div className="w-[40%] space-y-[1.5em]">
          <EnquiryProfileCard />
          <div className="grid grid-cols-2 gap-5">
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">Category</span>
              <span className="font-semibold text-[1rem] text-regular">
                Gym
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">Created By</span>
              <span className="font-semibold text-[1rem] text-regular">
                Vaibhav
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">
                Expecting Joining
              </span>
              <span className="font-semibold text-[1rem] text-regular">
                4th Jan 2025
              </span>
            </div>

            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">
                Negotiate Amount
              </span>
              <span className="font-semibold text-[1rem] text-regular">
                3300
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">
                Reference Type
              </span>
              <span className="font-semibold text-[1rem] text-regular">
                Walk in
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">Reference</span>
              <span className="font-semibold text-[1rem] text-regular">--</span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">Last Remark</span>
              <span className="font-semibold text-[1rem] text-regular">--</span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">Assigned To</span>
              <span className="font-semibold text-[1rem] text-regular">--</span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">
                Trial Start Date
              </span>
              <span className="font-semibold text-[1rem] text-regular">
                25th Dec 2024
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-regular border-b w-fit ">
                Trial End Date
              </span>
              <span className="font-semibold text-[1rem] text-regular">
                31th Dec 2024
              </span>
            </div>
            <div className="space-x-2 col-span-2">
              <span className="text-regular border-b w-fit ">Address</span>
              <span className="font-semibold text-[1rem] text-regular">
                Plot no. 123, Building Antila, IIT Narhe, Pune 411041
              </span>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <DataTable
            columns={EnquiryFollowUpColumns}
            data={[]}
            searchBy="remark"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnquiryProfile;
