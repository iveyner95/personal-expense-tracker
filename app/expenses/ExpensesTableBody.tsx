'use client';
import { useSearchParams } from "next/navigation";
import { Expense } from "../types";
import { ExpensesTableProps } from "./ExpensesTable";
import { ExpensesTableBodyRow } from "./ExpensesTableBodyRow";

export const ExpensesTableBody = ({ expenses }: ExpensesTableProps) => {
  const sortedExpenses = useSortedExpenses(expenses);

  return (
    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
      {sortedExpenses.map((expense) => <ExpensesTableBodyRow expense={expense} key={`expense-${expense.number}`} />)}
    </tbody>
  )
}

const useSortedExpenses = (expenses: Expense[]) => {
  const searchParams = useSearchParams();
  const orderBy = searchParams.get('orderBy');
  const order = searchParams.get('order');


  if (orderBy && order) {
    return expenses.sort((a, b) => {
      let aProperty: string | number | Date = getKeyValue<keyof Expense, Expense>(orderBy as keyof Expense)(a)
      let bProperty: string | number | Date = getKeyValue<keyof Expense, Expense>(orderBy as keyof Expense)(b)

      if (orderBy === 'created') {
        aProperty = new Date(aProperty)
        bProperty = new Date(bProperty)
      }

      if (order === 'desc') {
        if (aProperty < bProperty) {
          return 1
        } else if (aProperty > bProperty) {
          return -1
        } else {
          return 0
        }
      } else {
        if (aProperty > bProperty) {
          return 1
        } else if (aProperty < bProperty) {
          return -1
        } else {
          return 0
        }
      }
    }
    )
  }

  return expenses
}

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
  obj[key];
