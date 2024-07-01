import React, { useState } from "react";
import PageLeft from "../pages/PageLeft";
import { GoSearch } from "react-icons/go";
import PatientList from "../patients/PatientList";
import Search from "../input/Search";

export default function SidebarLeft() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const patientList = [
    { name: "Emily Williams", gender: "Female", age: 18, id: 1, image_url: "/src/assets/Layer 8.png" },
    { name: "Ryan Johnson", gender: "Male", age: 45, id: 2, image_url: "/src/assets/Layer 8.png" },
    { name: "Brandon Mitchell", gender: "Male", age: 36, id: 3, image_url: "/src/assets/Layer 8.png" },
    { name: "Jessica Taylor", gender: "Female", age: 28, id: 4, image_url: "/src/assets/Layer 8.png" },
    { name: "Samantha Johnson", gender: "Female", age: 56, id: 5, image_url: "/src/assets/Layer 8.png" },
    { name: "Ashley Martinez", gender: "Female", age: 54, id: 6, image_url: "/src/assets/Layer 8.png" },
    { name: "Olivia Brown", gender: "Female", age: 32, id: 7, image_url: "/src/assets/Layer 8.png" },
    { name: "Tyler Davis", gender: "Male", age: 19, id: 8, image_url: "/src/assets/Layer 8.png" },
    { name: "Kevin Anderson", gender: "Male", age: 30, id: 9, image_url: "/src/assets/Layer 8.png" },
  ];

  const filteredPatientList = patientList.filter(patient =>
    patient.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <PageLeft>
      <div className="bg-white shadow-sm rounded-2xl h-full overflow-scroll">
        <div className="flex justify-between items-center px-4 h-14">
          <h4 className="text-xl font-bold">Patients</h4>
          <div className="text-left relative ">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event from bubbling up to parent
                handleToggle();
              }}
            >
              {!isOpen ? (
                <GoSearch className="text-[#072635]" />
              ) : (
                <Search
                  classes="w-44"
                  handleToggle={handleToggle}
                  handleSearchChange={handleSearchChange}
                  searchValue={searchValue}
                />
              )}
            </button>
          </div>
        </div>
        <PatientList classes="bg-white" data={filteredPatientList} />
      </div>
    </PageLeft>
  );
}
