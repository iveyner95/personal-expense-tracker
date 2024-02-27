import React from "react";

interface NavItemProps {
  icon: React.JSX.Element;
  text: string;
  href: string;
}

export const NavItem = ({
  icon,
  text,
  href
}: NavItemProps) => {
  return (
    <div>
      <a className="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer  hover:bg-blue-500 hover:text-white focus:outline-none" href={href}>
        <span className="flex items-center">
          {icon}

          <span className="mx-4 font-medium">{text}</span>
        </span>
      </a>
    </div>
  )
}