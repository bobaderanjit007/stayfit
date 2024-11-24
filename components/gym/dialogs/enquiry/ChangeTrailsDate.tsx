"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChangeTrialDateState } from "@/app/(main)/gym/enquiry/page";
import { DatePicker } from "@/components/ui/date-picker";

const ChangeTrailsDate = ({
  changeTrailDate,
  setChangeTrialDate,
}: {
  changeTrailDate: ChangeTrialDateState;
  setChangeTrialDate: Dispatch<SetStateAction<ChangeTrialDateState>>;
}) => {
  return (
    <Dialog
      open={changeTrailDate.show}
      onOpenChange={() => {
        setChangeTrialDate({
          show: false,
          enquiryId: "",
          name: "",
          trialStartDate: null,
          trialEndDate: null,
        });
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Trial Date</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {" "}
          <span className="text-blue-400 text-[1.1em]">
            {changeTrailDate.name}
          </span>
        </DialogDescription>
        <div className="flex  justify-between">
          <div className="flex flex-col space-y-2">
            <Label>Trial Start Date *</Label>
            <DatePicker ButtonClassName="w-[16em]" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Trial End Date *</Label>
            <DatePicker ButtonClassName="w-[16em]" />
          </div>
        </div>
        <div className="space-x-3 flex justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setChangeTrialDate({
                show: false,
                enquiryId: "",
                name: "",
                trialStartDate: null,
                trialEndDate: null,
              });
            }}
          >
            Cancel
          </Button>
          <Button type="button">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeTrailsDate;
