import React from "react";
import PageLeft from "../pages/PageLeft";
import HeaderRight from "../header/HeaderRight";
import { GoSearch } from "react-icons/go";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import PatientList from "../patients/PatientList";

export default function SidebarLeft() {
  return (
    <PageLeft>
      <div className="bg-white shadow-sm rounded-2xl h-screen overflow-scroll">
        <div className="flex justify-between mb-8 p-4"> 
          <h4 className=" text-xl font-bold">Patients</h4>
          <div className="text-left">
          <GoSearch className=" text-[#072635] "/>
          </div>
        </div>
      <PatientList/>
      <PatientList classes={'bg-[#D8FCF7]'}/>
      <PatientList/>
      
      </div>
    </PageLeft>
  );
}
