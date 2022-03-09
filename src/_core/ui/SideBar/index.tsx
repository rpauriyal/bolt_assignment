import React, { useState } from "react";
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
  // const [deleteValue, setDeleteValue] = useState<any[]>([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const buttonClicked = (e) => {
    if (isButtonClicked) {
      return;
    } else {
      setAnchorEl(e.currentTarget);
      setIsButtonClicked(true);
    }
  };

  const handleClose = () => {
    setIsButtonClicked(false);
    setAnchorEl(null);
  };

  const onSelectValue = (event) => {
    if (event && isButtonClicked) {
      event.map((option, indx) => {
        setDetails([...details, option]);
        getVehicleDetails([option]);
        setSideBarOption([...sideBarOption, option.vehicle_name]);
      });
      setIsButtonClicked(false);
    }
  };

  const detailsHandler = (e, option: any) => {
    details.map((value, idx) => {
      if (option === value?.vehicle_name) {
        getVehicleDetails([value]);
      } else {
        return;
      }
    });
  };

  const onCrossClicked = (e, option: any) => {
    e.stopPropagation();
    var array = [...sideBarOption];
    var index = array.indexOf(option);
    if (index !== -1) {
      array.splice(index, 1);
      setSideBarOption([array]);
    }
    getVehicleDetails(details.filter((item) => item.vehicle_name !== option));
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
          <SearchPopover list={RESPONSE} onSelect={onSelectValue} />
        </Popover>
      )}
      {sideBarOption.length > 0
        ? sideBarOption.map((option, indx) => (
            <Buttons
              key={indx}
              buttonText={option}
              buttonType="CROSS"
              buttonClicked={(e) => detailsHandler(e, option)}
              onCrossClicked={(e) => onCrossClicked(e, option)}
            />
          ))
        : ""}
    </SideBarWrapper>
  );
};
