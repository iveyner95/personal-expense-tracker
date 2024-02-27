import React from "react"

/**
* This button is a stub for potential future content 
* like a menu to select options like delete & edit 
*/
export const MoreOptions = () => {
  return (
    <td className="px-4 py-4 text-sm whitespace-nowrap">
      <button className="px-1 py-1 text-gray-100 transition-colors duration-200 rounded-lg dark:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      </button>
    </td>
  )
}