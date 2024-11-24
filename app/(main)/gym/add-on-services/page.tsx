"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GymAddOnServices = () => {
  const [addOnServiceTab, setAddOnServiceTab] = useState<"service" | "product">(
    "service"
  );
  return (
    <div>
      {/* Title  */}
      <div className="flex justify-between ">
        <div className="space-x-[2em]">
          <Button
            className="uppercase w-[10em]"
            variant={addOnServiceTab == "service" ? "default" : "outline"}
            onClick={() => setAddOnServiceTab("service")}
          >
            Services
          </Button>
          <Button
            className="uppercase w-[10em]"
            variant={addOnServiceTab == "product" ? "default" : "outline"}
            onClick={() => setAddOnServiceTab("product")}
          >
            Products
          </Button>
        </div>
        {addOnServiceTab === "service" ? (
          <Link href="/gym/add-on-services/add-new-service">
            <Button variant="outline">Add New Service</Button>
          </Link>
        ) : (
          addOnServiceTab === "product" && (
            <Link href="/gym/add-on-services/add-new-product">
              <Button variant="outline">Add New Product</Button>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default GymAddOnServices;
