"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const GymExpenses = () => {
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-regular text-2xl flex items-end">Expenses</span>
        <Link href="/gym/expenses/add-new-expense">
          <Button variant="outline">Add New Expense</Button>
        </Link>
      </div>
    </div>
  );
};

export default GymExpenses;
