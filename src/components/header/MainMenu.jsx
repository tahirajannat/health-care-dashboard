import React from "react";
import { FiMessageSquare, FiUsers } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdCreditCard } from "react-icons/md";

export default function MainMenu() {
  return (
   <div className="hidden xl:block">
     <div className="ml-10 flex items-center space-x-4 ">
      <a
        href="#"
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
        aria-current="page"
      >
        <GoHome className="text-lg" />
        OverView
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] bg-[#01F0D0] hover:bg-opacity-75"
        aria-current="page"
      >
        <FiUsers className="text-lg" />
        Patients
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
        aria-current="page"
      >
        <IoCalendarClearOutline className="text-lg" />
        Schedule
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
        aria-current="page"
      >
        <FiMessageSquare className="text-lg" />
        Message
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
        aria-current="page"
      >
        <MdCreditCard className="text-lg" />
        Transections
      </a>
    </div>
   </div>
  );
}
