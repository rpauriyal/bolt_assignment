import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
        renderInput={(params) => <TextField {...params} label="search" />}
      />
    </div>
  );
}
