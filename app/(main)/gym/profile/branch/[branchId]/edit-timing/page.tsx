"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { TimePicker12h } from "@/components/ui/timepicker/time-picker-12h";
import React, { useState } from "react";

const EditTiming = () => {
  const [openingTime, setOpeningTime] = useState<Date | undefined>();
  const [closingTime, setClosingTime] = useState<Date | undefined>();
  const [isAfternoonClosed, setIsAfternoonClosed] = useState<boolean>(false);
  const [closedFrom, setClosedFrom] = useState<Date | undefined>();
  const [openFrom, setOpenFrom] = useState<Date | undefined>();

  return (
    <div className="space-y-9">
      <ContentTitle title="Edit Branch Timing" />

      {/* Select Opening and Closing Timings  */}
      <div className="grid grid-cols-4 gap-6 ">
        <div className="flex space-x-4 items-center">
          <Label className="text-lg">Opening Time :</Label>
          <span className="">
            <TimePicker12h date={openingTime} setDate={setOpeningTime} />
          </span>
        </div>
        <div className="flex space-x-4 items-center">
          <Label className="text-lg">Closing Time : </Label>
          <span className="">
            <TimePicker12h date={closingTime} setDate={setClosingTime} />
          </span>
        </div>
      </div>

      {/* Day Wise Opening and Closing Timings  */}
      <div className="flex space-x-8 flex-wrap space-y-4">
        <div className="flex flex-col space-y-5 justify-between ">
          <div className="flex flex-col space-y-10">
            <span className="text-md ">&nbsp;</span>
            <span> From</span>
            <span> To</span>
          </div>
          <div className="flex flex-col space-y-10">
            <span className="text-md ">&nbsp;</span>
            <span> From</span>
            <span> To</span>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
            return (
              <div className="flex flex-col space-y-2" key={i}>
                <Label className="text-md">{day}</Label>
                <span>
                  {" "}
                  <TimePicker12h date={openingTime} setDate={setOpeningTime} />
                </span>
                <span>
                  {" "}
                  <TimePicker12h date={closingTime} setDate={setClosingTime} />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* AfterNoon Closed  */}
      <div className="flex items-center space-x-4">
        <Switch
          checked={isAfternoonClosed}
          onCheckedChange={() => setIsAfternoonClosed(!isAfternoonClosed)}
        />{" "}
        <span className="font-medium  border-b ">Afternoon Closed</span>
      </div>

      {/* Close timing  */}
      {isAfternoonClosed && (
        <div className="grid grid-cols-4 gap-6 ">
          <div className="flex space-x-4 items-center">
            <Label className="text-lg">From :</Label>
            <span className="">
              <TimePicker12h date={closedFrom} setDate={setClosedFrom} />
            </span>
          </div>
          <div className="flex space-x-4 items-center">
            <Label className="text-lg">To : </Label>
            <span className="">
              <TimePicker12h date={openFrom} setDate={setOpenFrom} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTiming;
