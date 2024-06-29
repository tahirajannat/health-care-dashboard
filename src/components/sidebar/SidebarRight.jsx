import React from 'react'
import PatientList from '../patients/PatientList'
import PageLeft from '../pages/PageLeft'
import { GoSearch } from 'react-icons/go'
import PatientInfo from '../patients/PatientInfo'
import LabResults from '../patients/LabResults'

export default function SidebarRight() {
  return (
    <PageLeft>
    <div className="bg-white shadow-sm rounded-2xl">
      
    <PatientInfo/>
   
    </div>
    <div className="bg-white shadow-sm rounded-2xl my-8">
      
      <LabResults/>
     
      </div>
  </PageLeft>
  )
}

