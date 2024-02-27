import React from "react";
import { ExpensesHeader } from "./ExpensesHeader";
import { useExpenses } from "./useExpenses";

export default function ExpensesList() {
  const expenses = useExpenses();

  return (
    <div className="w-full">
      <ExpensesHeader count={expenses.length} />

      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle px-6">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        #
                      </button>
                    </th>

                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        Category
                      </button>
                    </th>

                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        Vender
                      </button>
                    </th>

                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Description
                    </th>

                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        Date Created
                      </button>
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  <tr>

                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div>
                        {/* TODO: make dynamic */}
                        <h1 className="font-medium text-gray-700 dark:text-gray-200 ">1</h1>
                      </div>
                    </td>

                    <td className="p-4 text-sm font-medium whitespace-nowrap">
                      {/* TODO: user should be able to set the color on the category */}
                      <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        Customer
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      {/* TODO: make dynamic */}
                      <div className="flex items-center text-gray-700 dark:text-gray-200">
                        RENT AUTO-PAY
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div>
                        {/* TODO: make dynamic */}
                        <p className="text-gray-700 dark:text-gray-200">
                          Some description
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap text-gray-700 dark:text-gray-200">
                      <div>
                        {/* TODO: make dynamic */}
                        2/26/2024
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      {/* Stub for potential future content like a menu to select options like delete / edit */}
                      <button className="px-1 py-1 text-gray-100 transition-colors duration-200 rounded-lg dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
