"use client";
import MemberProfileCard from "@/components/gym/members/MemberProfileCard";
import MemberProfileTabsMenu from "@/components/gym/members/MemberProfileTabsMenu";
import MemberProfileTab from "@/components/gym/members/profiletabs/MemberProfileTab";
import MemberSubscriptionTab from "@/components/gym/members/profiletabs/MemberSubscriptionTab";
import ContentTitle from "@/components/setup/ContentTitle";
import React, { useState } from "react";

export type ShowProfileTabProps =
  | "profile"
  | "subscriptions"
  | "attendance"
  | "follow-ups"
  | "my-referrals"
  | "progress";

const MemberProfile = () => {
  const [showProfileTab, setShowProfileTab] =
    useState<ShowProfileTabProps>("subscriptions");
  return (
    <section className="pb-6">
      <ContentTitle title="Member Profile" />
      <div className="flex space-x-[3.2em]">
        <div className="w-[40%] space-y-[1.5em]">
          <MemberProfileCard />
          <MemberProfileTabsMenu
            showProfileTab={showProfileTab}
            setShowProfileTab={setShowProfileTab}
          />
        </div>
        <div className="flex-grow">
          {showProfileTab === "profile" ? (
            <MemberProfileTab />
          ) : showProfileTab === "subscriptions" ? (
            <MemberSubscriptionTab />
          ) : (
            showProfileTab
          )}
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;
