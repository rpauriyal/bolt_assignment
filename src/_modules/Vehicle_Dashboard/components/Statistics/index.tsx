import React from "react";
import { AnalyticsWrapper } from "./style";
import { Buttons } from "../../../../_core/ui";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

const changeDuration = [
  {
    name: "D",
    isActive: false,
  },
  {
    name: "W",
    isActive: false,
  },
  {
    name: "M",
    isActive: true,
  },
  {
    name: "Y",
    isActive: false,
  },
  {
    name: "MAX",
    isActive: false,
  },
];

interface analyticsProps {
  statData?: any;
}

export const Analytics: React.FC<analyticsProps> = ({ statData }) => {
  const onBookinClicked = () => {};

  return (
    <AnalyticsWrapper>
      <div className="header_wrapper">
        <div className="analytics_type">
          <p className="title">Statistics</p>
          <Buttons
            buttonText="Bookings"
            width="87px"
            buttonClicked={onBookinClicked}
            height="28px"
            padding="6px"
          />
        </div>
        <div className="stat_change_type">
          {changeDuration.map((value, idx) => (
            <div
              className="type"
              style={{
                background: value.isActive ? "#424242" : "#F5F5F5",
                color: value.isActive ? "#FFFFFF" : "#000000",
              }}
            >
              {value.name}
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1.8}>
        <LineChart data={statData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" stroke="#212121" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="booking" stroke="#424242" />
        </LineChart>
      </ResponsiveContainer>
    </AnalyticsWrapper>
  );
};
