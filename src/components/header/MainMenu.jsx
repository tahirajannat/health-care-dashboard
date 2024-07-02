import React from "react";
import { NavLink } from "react-router-dom";
import { FiMessageSquare, FiUsers } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdCreditCard } from "react-icons/md";

export default function MainMenu() {
  return (
    <div className="hidden xl:block">
      <div className="ml-10 flex items-center space-x-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] duration-700 ${
              isActive
                ? "bg-[#01F0D0] hover:bg-opacity-75"
                : "hover:bg-[#01F0D0]"
            }`
          }
        >
          <GoHome className="text-lg" />
          Overview
        </NavLink>
        <NavLink
          to="/patients"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] duration-700 ${
              isActive
                ? "bg-[#01F0D0] hover:bg-opacity-75"
                : "hover:bg-[#01F0D0]"
            }`
          }
        >
          <FiUsers className="text-lg" />
          Patients
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] duration-700 ${
              isActive
                ? "bg-[#01F0D0] hover:bg-opacity-75"
                : "hover:bg-[#01F0D0]"
            }`
          }
        >
          <IoCalendarClearOutline className="text-lg" />
          Schedule
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] duration-700 ${
              isActive
                ? "bg-[#01F0D0] hover:bg-opacity-75"
                : "hover:bg-[#01F0D0]"
            }`
          }
        >
          <FiMessageSquare className="text-lg" />
          Messages
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] duration-700 ${
              isActive
                ? "bg-[#01F0D0] hover:bg-opacity-75"
                : "hover:bg-[#01F0D0]"
            }`
          }
        >
          <MdCreditCard className="text-lg" />
          Transactions
        </NavLink>
      </div>
    </div>
  );
}
