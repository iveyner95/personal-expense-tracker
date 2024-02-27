import ExpensesFixture from '../../__fixtures__/expenses.json';
import { Expense } from "../types";

/**
 * This just uses the fixture in the root of the project but in a real application 
 * there may be an implementation like 
 * - calling a real backend 
 * - checking to see if the user is in dev mode vs prod for using fixture data
**/
export const useExpenses = () => {
  const expenses: Expense[] = ExpensesFixture.expenses
  return expenses;
}