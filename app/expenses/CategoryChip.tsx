import React from "react"
import { Expense } from "../types"

interface CategoryChipProps {
  expense: Expense
}

export const CategoryChip = ({ expense }: CategoryChipProps) => {
  const textColor = CategoryToTextColorMap[expense.category] || 'text-grey-500'

  return (
    <div className={`inline px-3 py-1 text-sm font-normal rounded-full ${textColor} gap-x-2 bg-emerald-100/60 dark:bg-gray-800`}>
      {expense.category}
    </div>
  )
}

const CategoryToTextColorMap: Partial<Record<string, string>> = {
  "Food": "text-emerald-500",
  "Travel": "text-blue-500",
  "Education": "text-pink-500"
}