import React from 'react';
import MuiSwitch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface SwitchProps {
  value: boolean;
  onChange: (arg0: boolean) => void;
  label?: object | string;
  color?: 'primary' | 'secondary' | 'default' | undefined;
}

function Switch(props: SwitchProps) {
  const { value, onChange, label, color } = props;
  return (
    <FormGroup style={{ fontSize: '10px' }}>
      <FormControlLabel
        control={
          <MuiSwitch
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

Switch.defaultProps = {
  label: '',
  color: 'primary',
};

export default Switch;
