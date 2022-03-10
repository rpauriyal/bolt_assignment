import styled from "styled-components";

export const AnalyticsWrapper = styled.div`
  width: 100%;
  .header_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .analytics_type {
      display: flex;
      align-items: baseline;
      margin-left: 56px;
      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;
        margin-right: 16px;
      }
    }

    .stat_change_type {
      display: flex;

      .type {
        cursor: pointer;
        margin: 0px 10px;
        height: 28px;
        width: 28px;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
