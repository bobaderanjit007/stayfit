"use client";
import StaffProfileCard from "@/components/gym/staff/StaffProfileCard";
import StaffProfileTabsMenu from "@/components/gym/staff/StaffProfileTabsMenu";
import ContentTitle from "@/components/setup/ContentTitle";
import React, { useState } from "react";

export type ShowStaffProfileTabProps =
  | "activity"
  | "shift_salary"
  | "attendance"
  | "settings";

const StaffProfile = () => {
  const [showProfileTab, setShowProfileTab] =
    useState<ShowStaffProfileTabProps>("activity");
  return (
    <section className="pb-6">
      <ContentTitle title="Staff Profile" />
      <div className="flex space-x-[3.2em]">
        <div className="w-[40%] space-y-[1.5em]">
          <StaffProfileCard />
          <StaffProfileTabsMenu
            showProfileTab={showProfileTab}
            setShowProfileTab={setShowProfileTab}
          />
        </div>
        <div className="flex-grow">
          {/* {showProfileTab === "profile" ? (
            <MemberProfileTab />
          ) : showProfileTab === "subscriptions" ? (
            <MemberSubscriptionTab />
          ) : (
            showProfileTab
          )} */}
        </div>
      </div>
    </section>
  );
};

export default StaffProfile;
