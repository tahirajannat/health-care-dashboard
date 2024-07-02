import React from "react";
import HeaderMain from "./components/header/HeaderMain";
import PatientMain from "./components/patients/PatientMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OverviewMain from "./components/overview/OverviewMain";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F6F7F8] px-4 xl:px-0">
        <HeaderMain />
        <Routes>
          <Route path="/" element={<OverviewMain />} />
          <Route path="/patients" element={<PatientMain />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
