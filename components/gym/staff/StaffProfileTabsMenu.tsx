"use client";
import { ShowStaffProfileTabProps } from "@/app/(main)/gym/staff/[staffId]/profile/page";
import { Button } from "@/components/ui/button";
import React from "react";

type MemberProfileTabsMenuProps = {
  showProfileTab: ShowStaffProfileTabProps;
  setShowProfileTab: React.Dispatch<
    React.SetStateAction<ShowStaffProfileTabProps>
  >;
};

const StaffProfileTabsMenu = ({
  showProfileTab,
  setShowProfileTab,
}: MemberProfileTabsMenuProps) => {
  return (
    <div className="space-y-[1em]">
      <div>
        <span className="text-regular text-[1.2rem]">Staff Detail Tabs</span>
      </div>
      <div className="grid grid-cols-2 gap-[1em]">
        {" "}
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "activity" ? "border-blue-500 text-blue-500" : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("activity")}
        >
          Activity
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "shift_salary"
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("shift_salary")}
        >
          Shift & Salary
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "attendance"
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("attendance")}
        >
          Attendance
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
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

export default StaffProfileTabsMenu;
