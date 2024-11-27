"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { GetExpenseColumns } from "./expensesColumns";
import { DataTable } from "@/components/gym/enquiry/data-table";

const GymExpenses = () => {
  const expensesColumns = GetExpenseColumns();
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-regular text-2xl flex items-end">Expenses</span>
        <Link href="/gym/expenses/add-new-expense">
          <Button variant="outline">Add New Expense</Button>
        </Link>
      </div>

      {/* Expenses Table  */}
      <div className="max-w-[80vw]">
        <DataTable columns={expensesColumns} data={[]} />
      </div>
    </div>
  );
};

export default GymExpenses;
