'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ExpensesTableHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateSortOrder = (orderBy: string) => {
    let order = 'asc'

    if (searchParams.has('order')) {
      const currentOrder = searchParams.get('order');

      if (currentOrder === 'asc') {
        order = 'desc'
      }
    }

    const params = new URLSearchParams()
    params.set('orderBy', orderBy)
    params.set('order', order)
    router.push(pathname + '?' + params.toString())
  }


  return (
    <thead className="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <button className="flex items-center gap-x-3 focus:outline-none" onClick={() => updateSortOrder('number')}>
            #
          </button>
        </th>

        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <button className="flex items-center gap-x-3 focus:outline-none" onClick={() => updateSortOrder('amount')}>
            Amount
          </button>
        </th>

        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <button className="flex items-center gap-x-3 focus:outline-none" onClick={() => updateSortOrder('category')}>
            Category
          </button>
        </th>

        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <button className="flex items-center gap-x-3 focus:outline-none" onClick={() => updateSortOrder('vender')}>
            Vender
          </button>
        </th>

        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
          Description
        </th>

        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <button className="flex items-center gap-x-3 focus:outline-none" onClick={() => updateSortOrder('created')}>
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