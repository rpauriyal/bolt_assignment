import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 35px 0px;
`;

export const StatusWrapper = styled.div`
  padding: 29px;
  width: 418px;
  background: linear-gradient(
    253.84deg,
    #f5f5f5 0%,
    #fafafa 100%,
    #fafafa 100%
  );
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
export const InfoWrapper = styled.div`
  width: 50%;
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    margin-bottom: 35px;
    width: 66%;
    display: flex;
    justify-content: space-between;
    span {
    }
  }
`;

export const AdditionaInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 14px;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
