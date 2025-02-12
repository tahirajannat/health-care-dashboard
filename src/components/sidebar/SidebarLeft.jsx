import React, { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import Search from '../input/Search';
import PageLeft from '../pages/PageLeft';
import PatientList from '../patients/PatientList';

export default function SidebarLeft({ onPatientSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [patientList, setPatientList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredPatientList, setFilteredPatientList] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        const fetchPatientList = async () => {
            try {
                const username = 'coalition';
                const password = 'skills-test';
                const encodedCredentials = btoa(`${username}:${password}`);

                const response = await fetch(
                    `https://fedskillstest.coalitiontechnologies.workers.dev`,
                    {
                        headers: {
                            Authorization: `Basic ${encodedCredentials}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }

                const data = await response.json();
                setPatientList(data);
                setFilteredPatientList(data);
                if (data.length > 0) {
                    const firstPatient = data[3];
                    setSelectedPatient(firstPatient);
                    onPatientSelect(firstPatient);
                }
            } catch (err) {
                console.error('Error:', err);
            }
        };

        fetchPatientList();
    }, []);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        const filtered = patientList.filter((patient) =>
            patient.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredPatientList(filtered);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handlePatientSelectInternal = (patient) => {
        setSelectedPatient(patient);
        onPatientSelect(patient); // Call the passed prop function
    };

    return (
        <PageLeft>
            <div className='bg-white shadow-sm rounded-2xl h-full overflow-hidden mb-4'>
                <div className='flex justify-between mb-8 p-4 h-8'>
                    <h4 className='text-xl font-bold'>Patients</h4>
                    <div className='text-left relative '>
                        <button
                            type='button'
                            className='inline-flex items-center justify-center p-2 rounded-md'
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(!isOpen);
                            }}
                        >
                            {!isOpen ? (
                                <GoSearch className='text-[#072635]' />
                            ) : (
                                <Search
                                    classes='w-44'
                                    handleToggle={handleToggle}
                                    handleSearchChange={handleSearchChange}
                                    searchValue={searchValue}
                                />
                            )}
                        </button>
                    </div>
                </div>
                <div className='h-screen overflow-y-scroll'>
                    <PatientList
                        data={filteredPatientList}
                        onPatientSelect={handlePatientSelectInternal}
                        selectedPatient={selectedPatient}
                    />
                </div>
            </div>
        </PageLeft>
    );
}
