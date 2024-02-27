import React from "react"
import { NavItem } from "./NavItem"
import { PieChart } from './PieChart'

export const DashBoard = () => {
  return (
    <NavItem icon={<PieChart />} text="Dashboard" href="/" />
  )
}