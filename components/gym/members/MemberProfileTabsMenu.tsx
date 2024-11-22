"use client";
import { ShowProfileTabProps } from "@/app/(main)/gym/members/[memberId]/profile/page";
import { Button } from "@/components/ui/button";
import React from "react";

type MemberProfileTabsMenuProps = {
  showProfileTab: ShowProfileTabProps;
  setShowProfileTab: React.Dispatch<React.SetStateAction<ShowProfileTabProps>>;
};

const MemberProfileTabsMenu = ({
  showProfileTab,
  setShowProfileTab,
}: MemberProfileTabsMenuProps) => {
  return (
    <div className="space-y-[1em]">
      <div>
        <span className="text-regular text-[1.2rem]">Member Detail Tabs</span>
      </div>
      <div className="grid grid-cols-3 gap-[1em]">
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "profile" ? "border-blue-500 text-blue-500" : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("profile")}
        >
          Profile
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
            showProfileTab == "follow-ups"
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("follow-ups")}
        >
          Follow Ups
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "my-referrals"
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("my-referrals")}
        >
          My Referrals
        </Button>
        <Button
          className={`uppercase text-[0.8rem]  ${
            showProfileTab == "progress" ? "border-blue-500 text-blue-500" : ""
          }`}
          variant="outline"
          onClick={() => setShowProfileTab("progress")}
        >
          Progress
        </Button>
      </div>
    </div>
  );
};

export default MemberProfileTabsMenu;
