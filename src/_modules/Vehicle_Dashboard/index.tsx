import React, { useState } from "react";
import { DashboardUI, MainDashboard } from "./style";
import { RESPONSE } from "../../_core/constants/response";
import { VehicleStatus, DenseTable } from "./components/index";
import { SideBar } from "../../_core/ui/index";
import { tableHeader } from "./components/Recent_Trips/config";

export const Dashboard = () => {
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [tripDetails, setTripDetails] = useState([]);
  const getVehicleDetails = (e) => {
    setVehicleDetails(e);
    e.map((value, idx) => {
      setTripDetails(value.vehicle_trip_detail);
    });
  };

  return (
    <DashboardUI>
      <SideBar getVehicleDetails={getVehicleDetails} />
      <MainDashboard>
        {vehicleDetails.length > 0 && (
          <>
            <VehicleStatus vehicleStatus={vehicleDetails} />
            <DenseTable tableHeader={tableHeader} tableList={tripDetails} />
          </>
        )}
      </MainDashboard>
    </DashboardUI>
  );
};
