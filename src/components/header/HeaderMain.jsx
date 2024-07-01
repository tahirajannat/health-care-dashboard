import React, { useState } from "react";
import MainMenu from "./MainMenu";
import { GoHome } from "react-icons/go";
import {
  FiMessageSquare,
  FiMoreVertical,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdCreditCard } from "react-icons/md";
import HeaderRight from "./HeaderRight";
import HeaderLogo from "./HeaderLogo";
import MobileMenu from "./MobileMenu";

export default function HeaderMain() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto my-4">
      <nav className="bg-white rounded-full hidden xl:block">
        <div className="grid grid-cols-12 h-[4.5rem] items-center  rounded-full px-4 sm:px-6 lg:px-8">
          <div className="col-span-6 xl:col-span-3 flex items-center text-left justify-start">
            <HeaderLogo />
          </div>

          <div className="col-span-5 ">
            <MainMenu />
          </div>
          <div className="col-span-4 text-right">
            <HeaderRight />
          </div>
        </div>
      </nav>

      {/* ...Mobile Menu... */}
      <nav className="bg-white rounded-full block xl:hidden h-[4rem] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <img
              className="object-fill max-w-full w-40"
              src="/src/assets/TestLogo.png"
              alt="Tech.Care logo"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-[#01F0D0] hover:text-[#01F0D0] hover:bg-[#D8FCF7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[D8FCF7]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6 bg-[#D8FCF7]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6 bg-[#D8FCF7]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="relative bg-white shadow-xl z-50">
            <MobileMenu />
          </div>
        )}
      </nav>
    </div>
  );
}
