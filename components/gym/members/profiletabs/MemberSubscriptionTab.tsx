"use client";
import { Button } from "@/components/ui/button";
import { TbCheckupList } from "react-icons/tb";
import { CgUserList } from "react-icons/cg";
import React from "react";

const MemberSubscriptionTab = () => {
  return (
    <div>
      <div className="space-x-[1em]">
        <Button variant="outline">
          <TbCheckupList className="w-[1.3em] h-[1.3em] -translate-y-[0.05em]" />{" "}
          Membership Plan
        </Button>
        <Button variant="outline">
          <CgUserList className="w-[1.3em] h-[1.3em]" />
          Trainer Plan
        </Button>
      </div>
    </div>
  );
};

export default MemberSubscriptionTab;
