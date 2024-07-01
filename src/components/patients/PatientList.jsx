import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function PatientList({ classes, data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className={`flex justify-between items-center py-4 px-4 ${classes}`}>
          <div className="flex gap-2 items-center">
            <img className="h-10 w-10 rounded-full mr-2" src={item.image_url} alt={item.name} />
            <div className="text-left">
              <p className="text-xs leading-none font-bold mb-1.5">{item.name}</p>
              <p className="text-xs text-gray-400">
                <span>{item.gender},</span>
                <span> {item.age}</span>
              </p>
            </div>
          </div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div>
      ))}
    </>
  );
}
