import React, { useState } from "react";
import { DashboardUI, MainDashboard } from "./style.ts";
import { RESPONSE } from "../../_core/constants/response.ts";
import { VehicleStatus } from "./components/index.ts";
import { SideBar } from "../../_core/ui/index.ts";

export const Dashboard = () => {
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const getVehicleDetails = (e) => {
    setVehicleDetails(e);
  };

  return (
    <DashboardUI>
      <SideBar getVehicleDetails={getVehicleDetails} />
      <MainDashboard>
        {vehicleDetails.length > 0 && (
          <VehicleStatus vehicleStatus={vehicleDetails} />
        )}
      </MainDashboard>
    </DashboardUI>
  );
};
