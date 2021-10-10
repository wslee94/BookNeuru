import React, { useState, useEffect } from 'react';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { v4 as uuidv4 } from 'uuid';

interface SelectProps {
  label?: string;
  value: string;
  onChange: (arg0: string) => void;
  options: { key: number | string; text: string }[];
  style?: object;
  isReadOnly?: boolean;
}

function Select(props: SelectProps) {
  const { label, value, options, onChange, style, isReadOnly = false } = props;
  const [id, setId] = useState('');

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  if (isReadOnly) {
    return <>{options.filter((n) => n.key === value)[0]?.text}</>;
  }

  return (
    <FormControl variant="outlined">
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <MuiSelect value={value} onChange={handleChange} style={style} margin="dense">
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
