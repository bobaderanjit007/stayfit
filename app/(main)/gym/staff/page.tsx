"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const GymStaff = () => {
  const [showTab, setShowTab] = useState<"staff" | "trainer">("trainer");

  return (
    <div>
      <div className="flex justify-between">
        <div className="space-x-[1em]">
          <Button
            variant={showTab == "trainer" ? "default" : "outline"}
            onClick={() => setShowTab("trainer")}
            className="w-[7em] uppercase"
          >
            Trainer
          </Button>
          <Button
            variant={showTab == "staff" ? "default" : "outline"}
            onClick={() => setShowTab("staff")}
            className="w-[7em] uppercase"
          >
            Staff
          </Button>
        </div>
        {showTab == "staff" ? (
          <Link href="/gym/staff/add-new-staff">
            <Button variant="outline">Add New Staff</Button>
          </Link>
        ) : (
          showTab == "trainer" && (
            <Link href="/gym/staff/add-new-trainer">
              <Button variant="outline">Add New Trainer</Button>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default GymStaff;
