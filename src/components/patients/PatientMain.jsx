import React from "react";
import SidebarLeft from "../sidebar/SidebarLeft";
import Page from "../pages/Page";
import SidebarRight from "../sidebar/SidebarRight";
import DiagnosticList from "../diagonisis/DiagnosticList";
import RateCard from "../diagonisis/RateCard";

export default function PatientMain() {
  return (
    <Page>
      <SidebarLeft />
      <div className="col-span-6">
        <div className="grid grid-cols-3 gap-4">
          <RateCard classes={"bg-[#E0F3FA]"} src={"/src/assets/respiratory rate.png"} rateTitle={'Respiratory Rate'} rateData={'20 bpm'} status={'Normal'}/>
          <RateCard classes={`bg-[#FFE6E9]`} src={"/src/assets/temperature.png"} rateTitle={'Temperature'} rateData={'98.6°F'} status={'Normal'}/>
          <RateCard classes={`bg-[#FFE6F1]`} src={"/src/assets/HeartBPM.png"}  rateTitle={'Heart Rate'} rateData={'78 bpm'} status={'Lower than Average'}/>
        </div>
        <DiagnosticList />
      </div>
      <SidebarRight />
    </Page>
  );
}
