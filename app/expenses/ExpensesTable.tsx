import React from "react"
import { Expense } from "../types"
import { ExpensesTableBody } from "./ExpensesTableBody"
import { ExpensesTableHeader } from "./ExpensesTableHeader"

export interface ExpensesTableProps {
  expenses: Expense[]
}

export const ExpensesTable = ({ expenses }: ExpensesTableProps) => {
  return (
    <div className="flex flex-col mt-6">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle px-6">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <ExpensesTableHeader />
              <ExpensesTableBody expenses={expenses} />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
