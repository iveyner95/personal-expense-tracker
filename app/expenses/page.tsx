import React from "react";

export default function ExpensesList() {
  return (
    <div className="w-full">
      <div className="sm:flex sm:items-center sm:justify-between m-6">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Expenses</h2>

            {/* TODO: dynamic calculation of # of expenses here */}
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">###</span>
          </div>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">These are all your expenses to date.</p>
        </div>

        <div className="flex items-center mt-4 gap-x-3">
          <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3098_154395)">
                <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_3098_154395">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>Import</span>
          </button>

          <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span>Manual Add</span>
          </button>
        </div>
      </div>


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
                      Description
                    </th>

                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Tags
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
                      <div>
                        {/* TODO: make dynamic */}
                        <p className="text-gray-700 dark:text-gray-200">
                          Some description
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      {/* TODO: make dynamic */}
                      <div className="flex items-center text-gray-700 dark:text-gray-200">
                        -
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