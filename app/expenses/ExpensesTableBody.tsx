import React from "react";
import { ExpensesTableProps } from "./ExpensesTable";
import { ExpensesTableBodyRow } from "./ExpensesTableBodyRow";

export const ExpensesTableBody = ({ expenses }: ExpensesTableProps) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
      {expenses.map((expense) => <ExpensesTableBodyRow expense={expense} key={`expense-${expense.number}`} />)}
    </tbody>
  )
}
