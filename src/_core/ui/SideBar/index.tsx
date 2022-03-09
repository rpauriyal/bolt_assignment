import React, { useState, useEffect } from "react";
import { SideBarWrapper, Title } from "./style";
import { Buttons, SearchPopover } from "../index";
import { RESPONSE } from "../../constants/response";
import Popover from "@material-ui/core/Popover";

interface sideBarProps {
  getVehicleDetails?: any;
}

export const SideBar: React.FC<sideBarProps> = ({ getVehicleDetails }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [sideBarOption, setSideBarOption] = useState<any[]>([]);
  const [details, setDetails] = useState<any[]>([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [vehicleList, setVehicleList] = useState<any[]>([]);

  const buttonClicked = (e) => {
    if (isButtonClicked) {
      return;
    } else {
      setAnchorEl(e.currentTarget);
      setIsButtonClicked(true);
    }
  };

  useEffect(() => {
    setVehicleList(RESPONSE);
  }, []);

  const handleClose = () => {
    setIsButtonClicked(false);
    setAnchorEl(null);
  };

  const onSelectValue = (event) => {
    if (event && isButtonClicked) {
      event.map((option, indx) => {
        setVehicleList(() => vehicleList.filter((m) => m !== option));
        setDetails([...details, option]);
        getVehicleDetails([option]);
        setSideBarOption([...sideBarOption, option]);
      });
      setIsButtonClicked(false);
    }
  };
  const detailsHandler = (e, option: any) => {
    details.map((value, idx) => {
      if (option === value) {
        getVehicleDetails([value]);
      } else {
        return;
      }
    });
  };

  const onCrossClicked = (e, option: any) => {
    e.stopPropagation();
    setDetails(details.filter((item) => item !== option));
    setVehicleList([...vehicleList, option]);
    getVehicleDetails(details.filter((item) => item !== option));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <SideBarWrapper>
      <Title>Vehicle Viewer</Title>
      <Buttons
        buttonText="Add vehicle"
        buttonType="ADD"
        buttonClicked={(e) => buttonClicked(e)}
      />

      {isButtonClicked && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <SearchPopover list={vehicleList} onSelect={onSelectValue} />
        </Popover>
      )}
      {details &&
        details.map((option, indx) => (
          <Buttons
            key={indx}
            buttonText={option.vehicle_name}
            buttonType="CROSS"
            buttonClicked={(e) => detailsHandler(e, option)}
            onCrossClicked={(e) => onCrossClicked(e, option)}
          />
        ))}
    </SideBarWrapper>
  );
};
