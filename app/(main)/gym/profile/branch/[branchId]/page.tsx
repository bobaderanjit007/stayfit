"use client";
import BranchProfileCard from "@/components/gym/admin/branches/BranchProfileCard";
import BranchProfileTabsMenu from "@/components/gym/admin/branches/BranchProfileTabsMenu";
import BranchBasicInfoTab from "@/components/gym/admin/branches/branchtabs/BranchBasicInfoTab";
import BranchServicesTab from "@/components/gym/admin/branches/branchtabs/BranchServicesTab";
import BranchSettingsTab from "@/components/gym/admin/branches/branchtabs/BranchSettingsTab";
import BranchTimingTab from "@/components/gym/admin/branches/branchtabs/BranchTimingTab";
import ContentTitle from "@/components/setup/ContentTitle";
import React, { useState } from "react";

export type ShowBranchProfileTabProps =
  | "branch-info"
  | "timing"
  | "services"
  | "settings";

const BranchDetails = () => {
  const [showProfileTab, setShowProfileTab] =
    useState<ShowBranchProfileTabProps>("branch-info");

  return (
    <React.Fragment>
      <ContentTitle title="Branch Details" />
      <div className="flex space-x-[3.2em] justify-between">
        <div className="w-[44%] space-y-[1.5em]">
          <BranchProfileCard />
          <BranchProfileTabsMenu
            showProfileTab={showProfileTab}
            setShowProfileTab={setShowProfileTab}
          />
        </div>
        <div className=" w-[55%]">
          {showProfileTab == "branch-info" ? (
            <BranchBasicInfoTab />
          ) : showProfileTab == "timing" ? (
            <BranchTimingTab />
          ) : showProfileTab == "services" ? (
            <BranchServicesTab />
          ) : (
            showProfileTab == "settings" && <BranchSettingsTab />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BranchDetails;
