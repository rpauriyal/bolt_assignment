import React from "react";
import {
  StatusWrapper,
  InfoWrapper,
  AdditionaInfo,
  Title,
  Wrapper,
} from "./style";
import gray_tick from "../../../../_assets/svg/gray_tick.svg";
import green_tick from "../../../../_assets/svg/green_tick.svg";

interface statusProps {
  vehicleStatus?: any;
}

export const VehicleStatus: React.FC<statusProps> = ({ vehicleStatus }) => {
  let vehicle_stat;
  vehicleStatus.map((option, indx) => {
    vehicle_stat = option.vehicle_status;
  });
  return (
    <Wrapper>
      <Title>Vehicle Status</Title>
      <StatusWrapper>
        <InfoWrapper>
          <p>
            Elevation <span>{vehicle_stat?.elevation}</span>
          </p>
          <p>
            Temprature <span>{vehicle_stat?.temprature}</span>
          </p>
          <p>
            Locked{" "}
            <span>
              {!vehicle_stat?.locked ? (
                <img src={gray_tick} alt="#" />
              ) : (
                <img src={green_tick} alt="#" />
              )}
            </span>
          </p>
          <p>
            Battery <span>{vehicle_stat?.battery}</span>
          </p>
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
    </Wrapper>
  );
};
