import React, { useState, useEffect } from "react";
import { SideBarWrapper, Title } from "./style.ts";
import { Buttons } from "../index.ts";
import SearchPopover from "../SearchPopOver/index.tsx";
import { RESPONSE } from "../../constants/response.ts";
interface sideBarProps {
  getVehicleDetails?: any;
}

export const SideBar: React.FC<sideBarProps> = ({ getVehicleDetails }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [sideBarOption, setSideBarOption] = useState([]);
  const [details, setDetails] = useState([]);

  const buttonClicked = () => {
    if (isButtonClicked) {
      return;
    } else {
      setIsButtonClicked(true);
    }
  };

  const onSelectValue = (event) => {
    if (event && isButtonClicked) {
      getVehicleDetails(event);
      event.map((option, indx) => {
        setDetails([...details, option]);
        setSideBarOption([...sideBarOption, option.vehicle_name]);
      });
      setIsButtonClicked(false);
    }
  };

  const detailsHandler = (e) => {
    details.map((value, idx) => {
      if (e === value.vehicle_name) {
        getVehicleDetails([value]);
      } else {
        return;
      }
    });
  };

  // const onCrossClicked = (e) => {
  //   console.log("..? remocve");
  //   var array = [...sideBarOption];
  //   var index = array.indexOf(e);
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //     setSelectedValue([array]);
  //   }
  // };

  return (
    <SideBarWrapper>
      <Title>Vehicle Viewer</Title>
      <Buttons
        buttonText="Add vehicle"
        buttonType="ADD"
        buttonClicked={buttonClicked}
      />
      {isButtonClicked && (
        <SearchPopover list={RESPONSE} onSelect={onSelectValue} />
      )}
      {sideBarOption.map((option, indx) => (
        <div onClick={(e) => detailsHandler(option)}>
          <Buttons
            key={indx}
            buttonText={option}
            buttonType="CROSS"
            // detailsHandler={detailsHandler}
            // onCrossClicked={onCrossClicked}
          />
        </div>
      ))}
    </SideBarWrapper>
  );
};
