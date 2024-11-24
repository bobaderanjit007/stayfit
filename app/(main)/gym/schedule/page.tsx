"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const GymSchedule = () => {
  const [scheduleTab, setScheduleTab] = useState<
    "workout" | "diet" | "food-menu"
  >("workout");
  return (
    <div>
      {" "}
      <div className="flex justify-between ">
        <div className="space-x-[2em]">
          <Button
            className="uppercase w-[10em]"
            variant={scheduleTab == "workout" ? "default" : "outline"}
            onClick={() => setScheduleTab("workout")}
          >
            Workout
          </Button>
          <Button
            className="uppercase w-[10em]"
            variant={scheduleTab == "diet" ? "default" : "outline"}
            onClick={() => setScheduleTab("diet")}
          >
            Diet
          </Button>
          <Button
            className="uppercase w-[10em] sr-only"
            variant={scheduleTab == "food-menu" ? "default" : "outline"}
            onClick={() => setScheduleTab("food-menu")}
          >
            Food Menu
          </Button>
        </div>
        {scheduleTab === "workout" ? (
          <Link href="/gym/schedule/create-workout-plan">
            <Button variant="outline">Create Workout Plan</Button>
          </Link>
        ) : scheduleTab === "diet" ? (
          <Link href="/gym/schedule/create-diet-plan">
            <Button variant="outline">Create Diet Plan</Button>
          </Link>
        ) : (
          scheduleTab === "food-menu" && (
            <Link href="/gym/schedule/create-food-recipe">
              <Button variant="outline">Create Food Recipe</Button>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default GymSchedule;
