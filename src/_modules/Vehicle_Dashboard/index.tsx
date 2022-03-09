import React, { useState } from "react";
import { DashboardUI, MainDashboard } from "./style";
import { VehicleStatus, DenseTable } from "./components/index";
import { SideBar } from "../../_core/ui/index";
import { tableHeader } from "./components/Recent_Trips/config";
import BreadCrumb from "./common/index";

export const Dashboard = () => {
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [tripDetails, setTripDetails] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const getVehicleDetails = (e) => {
    setVehicleDetails(e);
    if (e.length > 0) {
      e.map((value, idx) => {
        setTripDetails(value.vehicle_trip_detail);
        setSelectedVehicle(value.vehicle_name);
      });
    }
  };

  return (
    <DashboardUI>
      <SideBar getVehicleDetails={getVehicleDetails} />
      <MainDashboard>
        <BreadCrumb selectedVehicle={selectedVehicle} />
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
