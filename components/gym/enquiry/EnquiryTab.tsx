"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const EnquiryTab = () => {
  return (
    <div className="flex justify-between p-5">
      <div className="space-x-[2em]">
        <Button className="uppercase w-[10em]">Enquiry</Button>
        <Button className="uppercase w-[10em]">Trial</Button>
      </div>
      <div>
        <Button className="uppercase" variant="outline">
          Add New Enquiry
        </Button>
      </div>
    </div>
  );
};

export default EnquiryTab;
