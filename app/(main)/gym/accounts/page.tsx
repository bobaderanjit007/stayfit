"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/components/gym/enquiry/data-table";
import { GetInvoiceColumns } from "./invoiceColumns";
import { GetCollectionColumns } from "./collectionColumns";
import { GetCollectionsDueColumns } from "./collectionsDueColumns";

const GymAccounts = () => {
  const [showAccountTab, setShowAccountTab] = useState<
    "invoice" | "collections" | "collection-due"
  >("invoice");

  const invoicesColumns = GetInvoiceColumns();
  const collectionColumns = GetCollectionColumns();
  const collectionsDueColumns = GetCollectionsDueColumns();
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

      {/* Tables  */}

      {/* Expenses Table  */}
      <div className="max-w-[80vw]">
        {showAccountTab === "invoice" ? (
          <DataTable columns={invoicesColumns} data={[]} />
        ) : showAccountTab === "collections" ? (
          <DataTable columns={collectionColumns} data={[]} />
        ) : (
          showAccountTab === "collection-due" && (
            <DataTable columns={collectionsDueColumns} data={[]} />
          )
        )}
      </div>
    </div>
  );
};

export default GymAccounts;
