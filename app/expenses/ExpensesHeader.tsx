import React from "react";
import { Add } from "./Add";
import { Import } from "./Import";

interface ExpensesHeaderProps {
  count: number;
}

export const ExpensesHeader = ({ count = 0 }: ExpensesHeaderProps) => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between m-6">
      <ExpensesHeaderLeft count={count} />
      <ExpensesHeaderRight />
    </div>
  )
}

const ExpensesHeaderLeft = ({ count }: ExpensesHeaderProps) => {
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Expenses</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{count}</span>
      </div>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">These are all your expenses to date.</p>
    </div>
  )
}

const ExpensesHeaderRight = () => {
  return (
    <div className="flex items-center mt-4 gap-x-3">
      <Import />
      <Add />
    </div>
  )
}