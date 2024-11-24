import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const GymEquipments = () => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <span className="text-regular text-2xl flex items-end">Equipments</span>
        <Link href="/gym/equipments/add-new-equipment">
          <Button variant="outline">Add New Equipments</Button>
        </Link>
      </div>
    </div>
  );
};

export default GymEquipments;
