"use client";
import { ShowBranchProfileTabProps } from "@/app/(main)/gym/profile/branch/[branchId]/page";
import { Button } from "@/components/ui/button";
import React from "react";

type MemberProfileTabsMenuProps = {
  showProfileTab: ShowBranchProfileTabProps;
  setShowProfileTab: React.Dispatch<
    React.SetStateAction<ShowBranchProfileTabProps>
  >;
};

const BranchProfileTabsMenu = ({
  showProfileTab,
  setShowProfileTab,
}: MemberProfileTabsMenuProps) => {
  return (
    <div className="space-y-[1em]">
      <div>
        <span className="text-regular text-[1.2rem]">Branch Detail Tabs</span>
      </div>
      <div className="grid grid-cols-3 gap-[1em]">
        {" "}
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "branch-info"
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("branch-info")}
        >
          Branch Info
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "timing" ? "border-blue-500 text-blue-500" : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("timing")}
        >
          Timing
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "services" ? "border-blue-500 text-blue-500" : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("services")}
        >
          Services
        </Button>
        <Button
          className={`uppercase text-[0.8rem] sr-only  ${
            showProfileTab == "settings" ? "border-blue-500 text-blue-500" : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("settings")}
        >
          Settings
        </Button>
      </div>
    </div>
  );
};

export default BranchProfileTabsMenu;
