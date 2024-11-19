"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type MembersTabProps = {
  showView: string;
  setShowView: React.Dispatch<React.SetStateAction<string>>;
};

const MembersTab = ({ showView, setShowView }: MembersTabProps) => {
  return (
    <div className="flex justify-between py-5">
      <div className="space-x-[2em]">
        <Button
          className="uppercase w-[10em]"
          variant={showView == "members" ? "default" : "outline"}
          onClick={() => setShowView("members")}
        >
          Members
        </Button>
        <Button
          className="uppercase w-[10em]"
          variant={showView == "subscription" ? "default" : "outline"}
          onClick={() => setShowView("subscription")}
        >
          Subscription
        </Button>
      </div>
      <Dialog>
        <DialogTrigger className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md py-1 px-4 text-[0.9rem]">
          Add New Member
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search user</DialogTitle>
            <DialogDescription>
              Search to verify user already exists or not
            </DialogDescription>
          </DialogHeader>
          <div className="flex space-x-3">
            <Input placeholder="Mobile number" />
            <Button variant="outline">Search</Button>
          </div>
          <DialogFooter className="space-x-3">
            <Link href="/gym/members/add-new-member/8">
              <Button>Add New Member</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MembersTab;
