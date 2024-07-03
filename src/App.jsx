import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeaderMain from './components/header/HeaderMain';
import MessageMain from './components/overview/MessageMain';
import OverviewMain from './components/overview/OverviewMain';
import ScheduleMain from './components/overview/ScheduleMain';
import TransectionMain from './components/overview/TransectionMain';
import PatientMain from './components/patients/PatientMain';

function App() {
    return (
        <BrowserRouter>
            <div className='bg-[#F6F7F8] px-4 xl:px-0'>
                <HeaderMain />
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='/patients' replace />}
                    />
                    <Route path='/overview' element={<OverviewMain />} />
                    <Route path='/patients' element={<PatientMain />} />
                    <Route path='/schedule' element={<ScheduleMain />} />
                    <Route path='/messages' element={<MessageMain />} />
                    <Route path='/transactions' element={<TransectionMain />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
