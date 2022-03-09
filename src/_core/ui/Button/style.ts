import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 258px;
  height: 48px;
  background: #424242;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 20px 0px;
  cursor: pointer;
  box-shadow: 0px 4px 5px #e0e0e0;

  .btn_text_add {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
  }
  .btn_text {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    text-transform: capitalize;
  }
  .add_icon {
    margin-right: 15px;
  }
`;
