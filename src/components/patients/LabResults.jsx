import React from "react";
import { FiDownload, FiMoreHorizontal } from "react-icons/fi";
import { GoSearch } from "react-icons/go";

export default function LabResults({ classes }) {
  return (
    <div>
      <div className="flex justify-between p-4">
        <h4 className=" text-xl font-bold">Lab Results</h4>
      </div>
      <div className="h-52 overflow-scroll scrollbar-visible mx-4 my-2">
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4   ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">Blood Tests</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4 bg-gray-100  ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">CT Scans</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4  ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">Radiology Reports</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4  ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">X-Rays</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4  ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">Urine Test</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4  ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">CT Scan</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4  ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">CT Scan</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
        {/* ... */}
        <div
          className={`flex justify-between items-center py-2 px-4  ${classes}`}
        >
          <div className="flex gap-2 items-center">
            <div className="text-left">
              <p className="text-xs text-gray-500">CT Scan</p>
            </div>
          </div>
          <div>
            <FiDownload />
          </div>
        </div>
      </div>
    </div>
  );
}
