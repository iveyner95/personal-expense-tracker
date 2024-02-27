import React from "react";
import { ExpensesHeader } from "./ExpensesHeader";
import { ExpensesTable } from "./ExpensesTable";
import { useExpenses } from "./useExpenses";

export default function ExpensesList() {
  const expenses = useExpenses();

  return (
    <div className="w-full">
      <ExpensesHeader count={expenses.length} />
      <ExpensesTable expenses={expenses} />
    </div>
  )
}
