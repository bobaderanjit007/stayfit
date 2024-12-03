import React from "react";

const daysInDecember2024 = Array.from({ length: 31 }, (_, i) => {
  const date = new Date(2024, 11, i + 1); // Month is 0-indexed; 11 represents December
  return {
    Date: date.toISOString().split("T")[0], // Format as YYYY-MM-DD
    Lunch: { attended: false, reason: "" },
    Dinner: { attended: true, reason: "" },
  };
});

const BranchTimingTab = () => {
  console.log(daysInDecember2024);
  return <div>BranchTimingTab</div>;
};

export default BranchTimingTab;
