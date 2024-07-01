import React from "react";
import DiagnosticHistoryChart from "../diagonisis/DiagnosticHistoryChart";
import DiagnosticList from "../diagonisis/DiagnosticList";
import RateCard from "../diagonisis/RateCard";
import Page from "../pages/Page";
import SidebarLeft from "../sidebar/SidebarLeft";
import SidebarRight from "../sidebar/SidebarRight";
import LineChart from '../diagonisis/LineChart'

export default function PatientMain() {
  return (
    <Page>
      <SidebarLeft />
      <div className="col-span-6">
        <div className="xl:grid xl:grid-cols-3 gap-4 bg-white p-6 rounded-xl">
          <div className="col-span-3 pb-2 ">
          {/* <DiagnosticHistoryChart/> */}
            <LineChart />
          </div>
          <RateCard
            classes={"bg-[#E0F3FA] p-4  my-4 xl:my-0"}
            src={"/src/assets/respiratory rate.png"}
            rateTitle={"Respiratory Rate"}
            rateData={"20 bpm"}
            status={"Normal"}
          />
          <RateCard
            classes={`bg-[#FFE6E9] p-4 my-4 xl:my-0`}
            src={"/src/assets/temperature.png"}
            rateTitle={"Temperature"}
            rateData={"98.6°F"}
            status={"Normal"}
          />
          <RateCard
            classes={`bg-[#FFE6F1] p-4  my-4 xl:my-0`}
            src={"/src/assets/HeartBPM.png"}
            rateTitle={"Heart Rate"}
            rateData={"78 bpm"}
            status={"Lower than Average"}
          />
        </div>
        <DiagnosticList  classes={'mb-4 xl:mb-0'}/>
      </div>
      <SidebarRight />
    </Page>
  );
}
