import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";

export default function CheckBox({ name, label, value, onChange }: any) {
  const converToDefaultEventPara = (name: any, value: any) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) => {
              onChange(converToDefaultEventPara(name, e.target.checked));
            }}
          />
        }
      />
    </FormControl>
  );
}
