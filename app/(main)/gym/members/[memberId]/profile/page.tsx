"use client";
import { getMemberById } from "@/app/actions/gym/memberActions";
import MemberProfileCard from "@/components/gym/members/MemberProfileCard";
import MemberProfileTabsMenu from "@/components/gym/members/MemberProfileTabsMenu";
import MemberProfileTab from "@/components/gym/members/profiletabs/MemberProfileTab";
import MemberSubscriptionTab from "@/components/gym/members/profiletabs/MemberSubscriptionTab";
import ContentTitle from "@/components/setup/ContentTitle";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export type ShowProfileTabProps =
  | "profile"
  | "subscriptions"
  | "attendance"
  | "follow-ups"
  | "my-referrals"
  | "progress";

export interface Address {
  address_id: number;
  address1: string;
  address2?: string; // Optional
  city: string;
  state: string;
  country: string;
  locality: string;
  pincode: string;
}

export interface MemberInfo {
  id: number;
  first_name: string;
  last_name: string;
  gender: "Male" | "Female";
  date_of_birth: string; // Can be Date if properly parsed
  registration_date: string; // Can be Date if properly parsed
  email: string;
  phone?: string; // Optional phone number
  blood_group?: string; // Optional blood group
  category?: string; // Membership category
  fitness_aspiration?: string; // Fitness goal
  height?: string; // Height in cm
  weight?: string; // Weight in kg
  health_condition?: string; // Health details
  emergency_contact: string;
  emergency_contact_person: string;
  profile_picture?: string; // Optional profile picture path
  activities?: string; // List of activities (comma-separated)
  reference_details?: string; // How they were referred
  assign_to?: string; // Assigned trainer
  batch_details?: string; // Batch information
  plan_id?: number; // Plan ID
  enquiry_id?: number; // Enquiry ID
  gym_id?: number; // Gym ID
  address?: Address; // Address details (nested)
}

const MemberProfile = () => {
  const { memberId } = useParams();

  const [memberInfo, setMemberInfo] = useState<MemberInfo>({
    id: 0,
    first_name: "",
    last_name: "",
    gender: "Male",
    date_of_birth: "",
    registration_date: "",
    email: "",
    emergency_contact: "",
    emergency_contact_person: "",
    address: {
      address_id: 0,
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      locality: "",
      pincode: "",
    },
  });
  const [showProfileTab, setShowProfileTab] =
    useState<ShowProfileTabProps>("subscriptions");

  const getMemberDetails = async (memberId: number) => {
    const response = await getMemberById(memberId);
    setMemberInfo(response.data[0]);
    console.log(response.data[0]);
  };

  useEffect(() => {
    getMemberDetails(Number(memberId));
  }, [memberId]);
  return (
    <section className="pb-6">
      <ContentTitle title="Member Profile" />
      <div className="flex space-x-[3.2em]">
        <div className="w-[40%] space-y-[1.5em]">
          <MemberProfileCard memberInfo={memberInfo} />
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
