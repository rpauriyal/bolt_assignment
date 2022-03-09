import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import search from "../../../_assets/svg/search.svg";

export default function SearchPopover(props: any) {
  const defaultProps = {
    options: props?.list,
    getOptionLabel: (option) => option.vehicle_name,
  };

  const [selectedValue, setSelectedValue] = useState<any[]>([]);

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        multiple
        filterSelectedOptions
        renderTags={() => null} // don't render tag in the TextField
        value={selectedValue}
        onChange={(e, newValue) => {
          setSelectedValue(newValue);
          props.onSelect(newValue);
        }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <div
              style={{
                background: "#FAFAFA",
                border: "1px solid #EEEEEE",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "start",
                padding: "15px 0px",
              }}
            >
              <img src={search} style={{ padding: "0px 15px" }} />
              <input
                style={{
                  width: "248px",
                  height: "35px",
                  border: "none",
                  outline: "none",
                  background: "none",
                }}
                type="text"
                {...params.inputProps}
                placeholder="Search..."
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
