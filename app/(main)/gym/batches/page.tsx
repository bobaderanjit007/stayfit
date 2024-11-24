"use";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const GymBatches = () => {
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-regular text-2xl flex items-end">Batches</span>
        <Link href="/gym/batches/add-new-batch">
          <Button variant="outline">Add New Batch</Button>
        </Link>
      </div>
    </div>
  );
};

export default GymBatches;
