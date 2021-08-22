import React, { useState, useEffect } from 'react';
import MuiSelect from '@material-ui/core/Select';
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
      <MuiSelect
        native
        value={value}
        onChange={onChange}
        label={label}
        inputProps={{
          name: label,
          id,
        }}
        style={style}
      >
        <option value="" />
        {options.map((n, index) => (
          <option key={index} value={n.key}>
            {n.text}
          </option>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
