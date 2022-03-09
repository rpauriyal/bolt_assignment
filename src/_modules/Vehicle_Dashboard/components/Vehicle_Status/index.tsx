import React from "react";
import { StatusWrapper, InfoWrapper, AdditionaInfo, Title } from "./style";
import gray_tick from "../../../../_assets/svg/gray_tick.svg";
import green_tick from "../../../../_assets/svg/green_tick.svg";

interface statusProps {
  vehicleStatus?: any;
}

export const VehicleStatus: React.FC<statusProps> = ({ vehicleStatus }) => {
  const { vehicle_trip_detail } = vehicleStatus;
  let array;
  let vehicle_stat;
  vehicleStatus.map((option, indx) => {
    array = option.vehicle_trip_detail;
    vehicle_stat = option.vehicle_status;
  });
  return (
    <>
      <Title>Vehicle Status</Title>
      <StatusWrapper>
        <InfoWrapper>
          <p>Elevation {vehicle_stat?.elevation}</p>
          <p>Temprature {vehicle_stat?.temprature}</p>
          <p>
            Locked{" "}
            {!vehicle_stat?.locked ? (
              <img src={gray_tick} alt="#" />
            ) : (
              <img src={green_tick} alt="#" />
            )}
          </p>
          <p>Battery {vehicle_stat?.battery}</p>
        </InfoWrapper>
        <AdditionaInfo>
          <p>
            {!vehicle_stat?.throttle ? (
              <img src={gray_tick} alt="#" />
            ) : (
              <img src={green_tick} alt="#" />
            )}{" "}
            Throttle
          </p>
          <p>
            {!vehicle_stat?.controller ? (
              <img src={gray_tick} alt="#" />
            ) : (
              <img src={green_tick} alt="#" />
            )}{" "}
            Controller
          </p>
          <p>
            {!vehicle_stat?.motor ? (
              <img src={gray_tick} alt="#" />
            ) : (
              <img src={green_tick} alt="#" />
            )}{" "}
            Motor
          </p>
          <p>
            {!vehicle_stat?.overload ? (
              <img src={gray_tick} alt="#" />
            ) : (
              <img src={green_tick} alt="#" />
            )}{" "}
            Overload
          </p>
          <p>
            {!vehicle_stat?.overCurrent ? (
              <img src={gray_tick} alt="#" />
            ) : (
              <img src={green_tick} alt="#" />
            )}{" "}
            Overcurrent
          </p>
        </AdditionaInfo>
      </StatusWrapper>
    </>
  );
};
