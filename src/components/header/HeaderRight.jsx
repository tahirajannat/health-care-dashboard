import React from "react";
import { FiMoreVertical, FiSettings } from "react-icons/fi";

export default function HeaderRight() {
  return (
   <div className="hidden xl:block">
     <div className="ml-4 flex gap-4 items-center md:ml-6 justify-end ">
      <div className="relative ml-3 pr-3 border-r">
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10 rounded-full mr-2"
            src="/src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
            alt="Portrait of Dr. Jose Simmons"
          />
          <div className="text-left">
            <p className="text-xs leading-none font-bold">Dr. Jose Simmons</p>
            <p className="block text-xs text-gray-400">General Practitioner</p>
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
  );
}
