import React from "react"
import { Expense } from "./Expense"
import { NavItem } from "./NavItem"

export const Expenses = () => {
  return (
    <NavItem icon={<Expense />} text="Expenses" href="/expenses" />
  )
}