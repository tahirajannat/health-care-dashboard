import React, { useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

export default function Search({ classes, handleToggle, handleSearchChange, searchValue }) {
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      handleToggle();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form ref={searchRef} className={`flex items-center max-w-lg mx-auto absolute -m-[1.5px] top-0  right-0 ${classes}`} onClick={(e) => e.stopPropagation()}>
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-xs rounded-lg focus:border-none block w-44 p-1.5"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            e.stopPropagation();
            handleSearchChange(e);
          }}
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
        >
          <FiSearch />
        </button>
      </div>
    </form>
  );
}
