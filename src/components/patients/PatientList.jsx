import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function PatientList({ classes }) {
  return (
    <div className={`flex justify-between items-center py-4 px-4 ${classes}`}>
      <div className="flex gap-2 items-center">
        <img
          className="h-10 w-10 rounded-full mr-2"
          src="/src/assets/Layer 8.png"
          alt="Portrait of Dr. Jose Simmons"
        />
        <div className="text-left">
          <p className="text-xs leading-none font-bold mb-1.5">Emily Williams</p>
          <p className="text-xs text-gray-400">
            <span>Female,</span>
            <span> 45</span>
          </p>
        </div>
      </div>
      <div>
        <FiMoreHorizontal />
      </div>
    </div>
  );
}
