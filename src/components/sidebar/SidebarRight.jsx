import React from 'react';
import PageLeft from '../pages/PageLeft';
import LabResults from '../patients/LabResults';
import PatientInfo from '../patients/PatientInfo';

export default function SidebarRight({ selectedPatient }) {
    return (
        <PageLeft>
            <div className='bg-white shadow-sm rounded-2xl'>
                {selectedPatient && (
                    <PatientInfo
                        patientProfilePicture={selectedPatient.profile_picture}
                        patientName={selectedPatient.name}
                        patientGender={selectedPatient.gender}
                        patientDateOfBirth={selectedPatient.date_of_birth}
                        patientContactInfo={selectedPatient.phone_number}
                        patientEmergencyContacts={
                            selectedPatient.emergency_contact
                        }
                        patientInsuranceProvider={
                            selectedPatient.insurance_type
                        }
                    />
                )}
            </div>
            <div className='bg-white shadow-sm rounded-2xl my-8'>
                {selectedPatient && (
                    <LabResults
                        classes={'hover:bg-gray-100 p-4 rounded-lg'}
                        selectedPatients={selectedPatient.lab_results}
                    />
                )}
            </div>
        </PageLeft>
    );
}
