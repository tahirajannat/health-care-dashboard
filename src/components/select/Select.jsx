import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Select() {
  const [isHidden, setIsHidden] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };
  return (
    <div className="container">
      <div className={``}>
        <button
          onClick={handleDropdownClick}
          className="flex justify-between items-center gap-1 w-50 text-xs text-gray-500"
        >
          {dropdownValue === "w-50" ? "w-50" : dropdownValue}
          <MdOutlineKeyboardArrowDown className="text-lg" />
        </button>
        <div
          className={`absolute bg-[#F4F0FE] pt-1 z-50 ${
            dropdownState ? "visible" : "hidden"
          }`}
        >
          <div className="">
            <div
              className="text-xs  py-0.5" 
              onClick={() => handleSetDropdownValue("Last 6 months")}
            >
              Last 6 months
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="text-xs py-0.5"
              onClick={() => handleSetDropdownValue("Last 12 months")}
            >
              Last 12 months
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="text-xs py-0.5"
              onClick={() => handleSetDropdownValue("Last 16 months")}
            >
              Last 16 months
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="text-xs py-0.5"
              onClick={() => handleSetDropdownValue("Last 24 months")}
            >
              Last 24 months
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
