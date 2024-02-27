import React from "react"

export
  // TODO: make buttons inter-actable
  const ExpensesTableHeader = () => {
    return (
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
    )
  }