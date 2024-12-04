"use client";
import AdminProfileCard from "@/components/gym/admin/AdminProfileCard";
import AdminProfileTsbsMenu from "@/components/gym/admin/AdminProfileTsbsMenu";
import AdminBranchesTab from "@/components/gym/admin/admintabs/AdminBranchesTab";
import AdminCompanyDetailsTab from "@/components/gym/admin/admintabs/AdminCompanyDetailsTab";
import AdminSubscriptionsTab from "@/components/gym/admin/admintabs/AdminSubscriptionsTab";
import React, { useState } from "react";

export type ShowAdminProfileTabProps =
  | "subscriptions"
  | "branches"
  | "company-details";

const GymProfile = () => {
  const [showProfileTab, setShowProfileTab] =
    useState<ShowAdminProfileTabProps>("company-details");
  return (
    <div className="flex space-x-[3.2em] ">
      <div className="w-[40%] space-y-[1.5em]">
        <AdminProfileCard />
        <AdminProfileTsbsMenu
          showProfileTab={showProfileTab}
          setShowProfileTab={setShowProfileTab}
        />
      </div>

      <div className="flex-grow">
        {showProfileTab === "branches" ? (
          <AdminBranchesTab />
        ) : showProfileTab === "company-details" ? (
          <AdminCompanyDetailsTab />
        ) : (
          showProfileTab === "subscriptions" && <AdminSubscriptionsTab />
        )}
      </div>
    </div>
  );
};

export default GymProfile;
