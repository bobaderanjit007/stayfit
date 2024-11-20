"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

import { randomPlanData } from "@/helpers/randomDataGenerator/plan";
import { PlanCardTypes } from "@/helpers/Types/plan";
import PlanCard from "@/components/gym/plan/PlanCard";

const GymPlans = () => {
  const [activePlans, setActivePlans] = useState<PlanCardTypes[]>(
    randomPlanData.filter((plan) => plan.isActive)
  );
  const [inActivePlans, setInActivePlans] = useState<PlanCardTypes[]>(
    randomPlanData.filter((plan) => !plan.isActive)
  );

  const [showPlansOf, setShowPlansOf] = useState<"active" | "inactive">(
    "active"
  );

  return (
    <div className=" py-5 space-y-3">
      {/* Title  */}
      <div className="flex justify-between py-5">
        <div className="space-x-[2em]">
          <Button
            className="uppercase w-[10em]"
            variant={showPlansOf == "active" ? "default" : "outline"}
            onClick={() => setShowPlansOf("active")}
          >
            Active Plans
          </Button>
          <Button
            className="uppercase w-[10em]"
            variant={showPlansOf == "inactive" ? "default" : "outline"}
            onClick={() => setShowPlansOf("inactive")}
          >
            InActive Plans
          </Button>
          <Button
            className="sr-only"
            onClick={() => {
              setInActivePlans([]);
              setActivePlans([]);
            }}
          ></Button>
        </div>
        <Link href="/gym/plans/add-new-plan">
          <Button variant="outline">Add New Plan</Button>
        </Link>
      </div>

      {/* Active Plan Cards  */}
      {showPlansOf === "active" && (
        <div className="space-y-3">
          <h2 className="text-[1.4em] text-[#1c8c61] border-b w-fit">
            Active Plans
          </h2>
          <div className="grid grid-cols-3 gap-[1.5em] w-full">
            {activePlans.map((plan, index) => {
              return (
                <div key={index}>
                  <PlanCard plan={plan} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* In Active Plan Cards  */}
      {showPlansOf === "inactive" && (
        <div className="space-y-3">
          <h2 className="text-[1.4em] text-[#de4a2c]  border-b w-fit">
            Inactive Plans
          </h2>
          <div className="grid grid-cols-3 gap-[1.5em] w-full">
            {inActivePlans.map((plan, index) => {
              return (
                <div key={index}>
                  <PlanCard plan={plan} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GymPlans;
