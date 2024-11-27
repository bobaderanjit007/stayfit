"use client";
import { ShowAdminProfileTabProps } from "@/app/(main)/gym/profile/page";
import { Button } from "@/components/ui/button";
import React from "react";

type MemberProfileTabsMenuProps = {
  showProfileTab: ShowAdminProfileTabProps;
  setShowProfileTab: React.Dispatch<
    React.SetStateAction<ShowAdminProfileTabProps>
  >;
};

const AdminProfileTsbsMenu = ({
  showProfileTab,
  setShowProfileTab,
}: MemberProfileTabsMenuProps) => {
  return (
    <div className="space-y-[1em]">
      <div>
        <span className="text-regular text-[1.2rem]">Admin Detail Tabs</span>
      </div>
      <div className="grid grid-cols-3 gap-[1em]">
        {" "}
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "company-details"
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("company-details")}
        >
          Company Details
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "branches" ? "border-blue-500 text-blue-500" : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("branches")}
        >
          Branches
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "subscriptions"
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("subscriptions")}
        >
          Subscriptions
        </Button>
      </div>
    </div>
  );
};

export default AdminProfileTsbsMenu;
