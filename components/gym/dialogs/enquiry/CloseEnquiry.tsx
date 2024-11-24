"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CloseEnquiryState } from "@/app/(main)/gym/enquiry/page";

const CloseEnquiry = ({
  closeEnquiry,
  setCloseEnquiry,
}: {
  closeEnquiry: CloseEnquiryState;
  setCloseEnquiry: Dispatch<SetStateAction<CloseEnquiryState>>;
}) => {
  return (
    <Dialog
      open={closeEnquiry.show}
      onOpenChange={() => {
        setCloseEnquiry({
          show: false,
          enquiryId: "",
          name: "",
          remark: "",
        });
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Close Enquiry</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {" "}
          <span className="text-blue-400 text-[1.1em]">
            {closeEnquiry.name}
          </span>
        </DialogDescription>
        <Label>Remark *</Label>
        <Textarea placeholder="Remark"></Textarea>

        <div className="space-x-3 flex justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setCloseEnquiry({
                show: false,
                enquiryId: "",
                name: "",
                remark: "",
              });
            }}
          >
            Cancel
          </Button>
          <Button type="button">Close Enquiry</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloseEnquiry;
