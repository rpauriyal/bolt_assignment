/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface popoverProps {
  list?: any;
  onSelect?: any;
}

export const SearchPopover: React.FC<popoverProps> = ({ list, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<any[]>([]);

  useEffect(() => {
    if (selectedValue.length > 0) {
      onSelect(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div style={{ width: "auto" }}>
      <Autocomplete
        multiple
        options={list}
        filterSelectedOptions
        getOptionLabel={(option) => option.vehicle_name}
        value={selectedValue}
        onChange={(e, newValue) => setSelectedValue(newValue)}
        renderTags={() => null}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
};
