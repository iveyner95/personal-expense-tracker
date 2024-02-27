import React from "react";
import { Expense } from "../types";

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

      <td className="p-4 text-sm font-medium whitespace-nowrap">
        {/* TODO: add dynamic text color by category name */}
        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          {expense.category}
        </div>
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

      <MoreOptionsButton />
    </tr>
  )
}

/**
 * This button is a stub for potential future content 
 * like a menu to select options like delete & edit 
 */
const MoreOptionsButton = () => {
  return (
    <td className="px-4 py-4 text-sm whitespace-nowrap">
      <button className="px-1 py-1 text-gray-100 transition-colors duration-200 rounded-lg dark:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      </button>
    </td>
  )
}