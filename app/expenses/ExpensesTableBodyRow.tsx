import React from "react";
import { Expense } from "../types";
import { CategoryChip } from "./CategoryChip";
import { MoreOptions } from "./MoreOptions";

interface ExpensesTableBodyRowProps {
  expense: Expense;
}

export const ExpensesTableBodyRow = ({ expense }: ExpensesTableBodyRowProps) => {
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h1 className="font-medium text-gray-700 dark:text-gray-200 ">{expense.number}</h1>
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          ${expense.amount}
        </div>
      </td>

      <td className="p-4 text-sm font-medium whitespace-nowrap">
        <CategoryChip expense={expense} />
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          {expense.vendor}
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <p className="text-gray-700 dark:text-gray-200">
            {expense.description}
          </p>
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap text-gray-700 dark:text-gray-200">
        <div>
          {expense.created}
        </div>
      </td>

      <MoreOptions />
    </tr>
  )
}
