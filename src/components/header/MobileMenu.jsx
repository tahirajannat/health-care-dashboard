import React from "react";
import {
  FiMessageSquare,
  FiMoreVertical,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdCreditCard } from "react-icons/md";

export default function MobileMenu() {
  return (
    <div className="block xl:hidden mt-2 ">
      <div className="absolute w-full bg-white shadow-xl rounded-xl p-6 flex flex-col text-left">
      <div >
        <a
          href="#"
          className="flex items-center gap-2 rounded-full px-3 py-2 my-1.5 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
          aria-current="page"
        >
          <GoHome className="text-lg" />
          OverView
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-full px-3 py-2 my-1.5  text-sm font-medium text-[#072635] bg-[#01F0D0] hover:bg-opacity-75"
          aria-current="page"
        >
          <FiUsers className="text-lg" />
          Patients
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-full px-3 py-2 my-1.5 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
          aria-current="page"
        >
          <IoCalendarClearOutline className="text-lg" />
          Schedule
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-full px-3 py-2 my-1.5 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
          aria-current="page"
        >
          <FiMessageSquare className="text-lg" />
          Message
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-full px-3 py-2 my-1.5 text-sm font-medium text-[#072635] hover:bg-[#01F0D0] duration-700"
          aria-current="page"
        >
          <MdCreditCard className="text-lg" />
          Transections
        </a>
      </div>
      <div className="mt-6">
        <div className="flex gap-4 items-center justify-start ">
          <div className="relative ml-3 pr-3 border-r">
            <div className="flex gap-2 items-center">
              <img
                className="h-10 w-10 rounded-full mr-2"
                src="/src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
                alt="Portrait of Dr. Jose Simmons"
              />
              <div className="text-left">
                <p className="text-xs leading-none font-bold">
                  Dr. Jose Simmons
                </p>
                <p className="block text-xs text-gray-400">
                  General Practitioner
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="relative rounded-full text-[#072635] hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              {/* <span className="absolute -inset-1.5"></span> */}
              <span className="sr-only">View notifications</span>
              <FiSettings />
            </button>
            <button
              type="button"
              className="relative rounded-full text-[#072635] hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              {/* <span className="absolute -inset-1.5"></span> */}
              <span className="sr-only">View notifications</span>
              <FiMoreVertical />
            </button>
          </div>
        </div>
      </div>
    </div>
     
    </div>
  );
}
