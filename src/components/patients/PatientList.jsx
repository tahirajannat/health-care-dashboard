import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function PatientList({ data, onPatientSelect }) {
  return (
    <>
      {data.map((patient) => (
        <div
          key={patient.name}
          className={`flex justify-between items-center py-4 px-4`}
          onClick={() => onPatientSelect(patient)}
        >
          <div className="flex gap-2 items-center">
            <img
              className="h-10 w-10 rounded-full mr-2"
              src={patient.profile_picture}
              alt={`Portrait of ${patient.name}`}
            />
            <div className="text-left">
              <p className="text-xs leading-none font-bold mb-1.5">
                {patient.name}
              </p>
              <p className="text-xs text-gray-400">
                <span>{patient.gender},</span>
                <span> {patient.age}</span>
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
