import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface CheckBoxProps {
  value: boolean;
  onChange: (e: boolean) => void;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  label?: string;
}

function CheckBox(props: CheckBoxProps) {
  const { value, onChange, color = 'primary', label } = props;
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={(e) => {
              onChange(e.target.checked);
            }}
            color={color}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}

export default CheckBox;
