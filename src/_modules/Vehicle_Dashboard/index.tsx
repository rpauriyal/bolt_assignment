import React, { useState } from "react";
import { DashboardUI, MainDashboard } from "./style";
import { VehicleStatus, DenseTable, Analytics } from "./components/index";
import { SideBar } from "../../_core/ui/index";
import { tableHeader } from "./components/Recent_Trips/config";
import BreadCrumb from "./common/index";

export const Dashboard = () => {
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [tripDetails, setTripDetails] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [statData, setStatDat] = useState([]);

  const getVehicleDetails = (e) => {
    setVehicleDetails(e);
    if (e.length > 0) {
      e.map((value, idx) => {
        setTripDetails(value.vehicle_trip_detail);
        setSelectedVehicle(value.vehicle_name);
        setStatDat(value.vehicle_statistics);
      });
    } else {
      setSelectedVehicle("");
    }
  };

  return (
    <DashboardUI>
      <SideBar getVehicleDetails={getVehicleDetails} />
      <MainDashboard>
        <BreadCrumb selectedVehicle={selectedVehicle} />
        {vehicleDetails.length > 0 && (
          <>
            <div style={{ display: "flex" }}>
              <VehicleStatus vehicleStatus={vehicleDetails} />
              <Analytics statData={statData} />
            </div>
            <DenseTable tableHeader={tableHeader} tableList={tripDetails} />
          </>
        )}
      </MainDashboard>
    </DashboardUI>
  );
};
