import React, { useState, useEffect } from 'react';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { v4 as uuidv4 } from 'uuid';

interface SelectProps {
  label: string;
  value: number | string;
  onChange: () => void;
  options: { key: number | string; text: string }[];
  style?: object;
}

function Select(props: SelectProps) {
  const { label, value, options, onChange, style } = props;
  const [id, setId] = useState('');

  useEffect(() => {
    setId(uuidv4());
  }, []);

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <MuiSelect value={value} onChange={onChange} label={label} style={style}>
        {/* <MenuItem value=""></MenuItem> */}
        {options.map((n, index) => (
          <MenuItem key={index} value={n.key}>
            {n.text}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
