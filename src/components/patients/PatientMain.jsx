import React, { useEffect, useState } from 'react';
import Loader from '../common/Loader';
import DiagnosticList from '../diagonisis/DiagnosticList';
import LineChart from '../diagonisis/LineChart';
import RateCard from '../diagonisis/RateCard';
import Page from '../pages/Page';
import SidebarLeft from '../sidebar/SidebarLeft';
import SidebarRight from '../sidebar/SidebarRight';

export default function PatientMain() {
    const [data, setData] = useState(null);
    const [selectedPatient, setSelectedPatient] = useState(
        data ? data[0] : null
    );
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

                const patientData = await response.json();
                setData(patientData);
                if (patientData.length > 0) {
                    setSelectedPatient(patientData[0]);
                }

                setError(null);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setData(null);
                setLoading(false);

                console.error('Error:', err);
            }
        };

        const timer = setTimeout(() => {
            fetchPatientList();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handlePatientSelect = (patient) => {
        setSelectedPatient(patient);
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Page>
            <SidebarLeft onPatientSelect={handlePatientSelect} />
            <div className='col-span-6 mt-4'>
                {selectedPatient ? (
                    <div className='xl:grid xl:grid-cols-3 gap-4 bg-white p-6 rounded-xl'>
                        <div className='col-span-3 pb-2'>
                            <LineChart
                                diagnosticHistory={
                                    selectedPatient.diagnosis_history
                                }
                            />
                        </div>
                        <RateCard
                            classes={'bg-[#E0F3FA] my-4 xl:my-0'}
                            src={'/src/assets/respiratory rate.png'}
                            rateTitle={'Respiratory Rate'}
                            rateData={`${
                                selectedPatient.diagnosis_history[
                                    selectedPatient.diagnosis_history.length - 1
                                ]?.respiratory_rate.value
                            } bpm`}
                            status={
                                selectedPatient.diagnosis_history[
                                    selectedPatient.diagnosis_history.length - 1
                                ]?.respiratory_rate.levels || 'N/A'
                            }
                        />
                        <RateCard
                            classes={`bg-[#FFE6E9] my-4 xl:my-0`}
                            src={'/src/assets/temperature.png'}
                            rateTitle={'Temperature'}
                            rateData={`${
                                selectedPatient.diagnosis_history[
                                    selectedPatient.diagnosis_history.length - 1
                                ]?.temperature.value
                            }°F`}
                            status={
                                selectedPatient.diagnosis_history[
                                    selectedPatient.diagnosis_history.length - 1
                                ]?.temperature.levels || 'N/A'
                            }
                        />
                        <RateCard
                            classes={`bg-[#FFE6F1]  my-4 xl:my-0`}
                            src={'/src/assets/HeartBPM.png'}
                            rateTitle={'Heart Rate'}
                            rateData={`${
                                selectedPatient.diagnosis_history[
                                    selectedPatient.diagnosis_history.length - 1
                                ]?.heart_rate.value
                            } bpm`}
                            status={
                                selectedPatient.diagnosis_history[
                                    selectedPatient.diagnosis_history.length - 1
                                ]?.heart_rate.levels || 'N/A'
                            }
                        />
                    </div>
                ) : (
                    <div>Select a patient to view details</div>
                )}
                {selectedPatient && (
                    <DiagnosticList
                        classes={'mb-4 xl:mb-0'}
                        selectedPatient={selectedPatient.diagnostic_list || []}
                    />
                )}
            </div>

            <SidebarRight selectedPatient={selectedPatient} />
        </Page>
    );
}
