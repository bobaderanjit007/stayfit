import GymOwnerProfileCard from "@/components/gym/admin/GymOwnerProfileCard";
import React from "react";

const GymProfile = () => {
  return (
    <div className="flex space-x-[3.2em]">
      <div className="w-[35%] space-y-[1.5em]">
        <GymOwnerProfileCard />
      </div>

      <div className="flex-grow">Tabs</div>
    </div>
  );
};

export default GymProfile;
