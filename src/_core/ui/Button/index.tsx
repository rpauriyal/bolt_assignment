import React from "react";
import { ButtonWrapper } from "./style";
import add from "../../../_assets/svg/add.svg";
import cross from "../../../_assets/svg/cross.svg";

interface buttonProps {
  buttonText?: string;
  buttonType?: string;
  buttonClicked?: any;
  onCrossClicked?: any;
  width?: string;
  height?: string;
  padding?: string;
}

export const Buttons: React.FC<buttonProps> = ({
  buttonText,
  buttonType,
  buttonClicked,
  onCrossClicked,
  width,
  height,
  padding,
}) => {
  return (
    <ButtonWrapper
      onClick={buttonClicked}
      style={{
        background: buttonType === "CROSS" ? "#ffffff" : "",
        justifyContent: buttonType === "CROSS" ? "space-around" : "",
        width: width,
        padding: padding,
        height: height,
      }}
    >
      {buttonType === "ADD" && <img src={add} alt="#" className="add_icon" />}
      <div className={buttonType === "CROSS" ? "btn_text" : "btn_text_add"}>
        {buttonText}
      </div>
      {buttonType === "CROSS" && (
        <div onClick={onCrossClicked}>
          <img
            src={cross}
            alt="#"
            className="cross_icon"
            // onClick={onCrossClicked}
          />
        </div>
      )}
    </ButtonWrapper>
  );
};
