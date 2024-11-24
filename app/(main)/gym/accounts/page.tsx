"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GymAccounts = () => {
  const [showAccountTab, setShowAccountTab] = useState<
    "invoice" | "collections" | "collection-due"
  >("invoice");
  return (
    <div>
      {/* Title  */}
      <div className="flex justify-between ">
        <div className="space-x-[2em]">
          <Button
            className="uppercase w-[10em]"
            variant={showAccountTab == "invoice" ? "default" : "outline"}
            onClick={() => setShowAccountTab("invoice")}
          >
            Invoice
          </Button>
          <Button
            className="uppercase w-[10em]"
            variant={showAccountTab == "collections" ? "default" : "outline"}
            onClick={() => setShowAccountTab("collections")}
          >
            Collections
          </Button>
          <Button
            className="uppercase w-[10em]"
            variant={showAccountTab == "collection-due" ? "default" : "outline"}
            onClick={() => setShowAccountTab("collection-due")}
          >
            Collection Due
          </Button>
        </div>
        <Link href="/gym/accounts/add-custom-bill">
          <Button variant="outline">Add Custom Bill</Button>
        </Link>
      </div>
    </div>
  );
};

export default GymAccounts;
