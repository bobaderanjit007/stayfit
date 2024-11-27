"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { GetEquipmentColumns } from "./equipmentColumns";
import { DataTable } from "@/components/gym/enquiry/data-table";

const GymEquipments = () => {
  const equipmentColumns = GetEquipmentColumns();
  return (
    <div>
      {/* Title  */}
      <div className="flex items-end justify-between">
        <span className="text-regular text-2xl flex items-end">Equipments</span>
        <Link href="/gym/equipments/add-new-equipment">
          <Button variant="outline">Add New Equipments</Button>
        </Link>
      </div>

      {/* Table  */}
      <DataTable columns={equipmentColumns} data={[]} />
    </div>
  );
};

export default GymEquipments;
