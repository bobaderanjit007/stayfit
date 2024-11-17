"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type EnquiryTabProps = {
  showView: string;
  setShowView: React.Dispatch<React.SetStateAction<string>>;
};

const EnquiryTab = ({ showView, setShowView }: EnquiryTabProps) => {
  return (
    <div className="flex justify-between py-5">
      <div className="space-x-[2em]">
        <Button
          className="uppercase w-[10em]"
          variant={showView == "enquiry" ? "default" : "outline"}
          onClick={() => setShowView("enquiry")}
        >
          Enquiry
        </Button>
        <Button
          className="uppercase w-[10em]"
          variant={showView == "trial" ? "default" : "outline"}
          onClick={() => setShowView("trial")}
        >
          Trial
        </Button>
      </div>

      <Link href="/gym/enquiry/add-new-enquiry">
        <Button variant="outline">Add New Enquiry</Button>
      </Link>
    </div>
  );
};

export default EnquiryTab;
