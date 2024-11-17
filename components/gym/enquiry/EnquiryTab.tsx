"use client";
import { ViewType } from "@/app/(main)/gym/enquiry/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type EnquiryTabProps = {
  showView: ViewType;
  setShowView: React.Dispatch<React.SetStateAction<ViewType>>;
};

const EnquiryTab = ({ showView, setShowView }: EnquiryTabProps) => {
  return (
    <div className="flex justify-between py-5">
      <div className="space-x-[2em]">
        <Button
          className="uppercase w-[10em]"
          variant={showView == ViewType.ENQUIRY ? "default" : "outline"}
          onClick={() => setShowView(ViewType.ENQUIRY)}
        >
          Enquiry
        </Button>
        <Button
          className="uppercase w-[10em]"
          variant={showView == ViewType.TRIAL ? "default" : "outline"}
          onClick={() => setShowView(ViewType.TRIAL)}
        >
          Trial
        </Button>
      </div>

      <Link href="/gym/enquiry/add-enquiry">
        <Button variant="outline">Add New Enquiry</Button>
      </Link>
    </div>
  );
};

export default EnquiryTab;
