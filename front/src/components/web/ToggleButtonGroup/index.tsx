import React from 'react';
import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

interface ToggleButtonGroupProps {
  value: string | null;
  onChange: (event: React.MouseEvent<HTMLElement>, value: string) => void;
  isRequired?: boolean;
  size?: 'small' | 'large' | 'medium' | undefined;
  children: React.ReactNode;
  label?: string;
  style?: object;
}

function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  const { value, onChange, isRequired, size, children, label, style } = props;
  return (
    <>
      {label && !isRequired ? (
        <div style={{ display: 'flex', marginBottom: '3px' }}>{label ? <span>{label}</span> : null}</div>
      ) : null}
      {label && isRequired ? (
        <div style={{ display: 'flex', marginBottom: '3px' }}>
          {label ? <span>{label}</span> : null}
          {isRequired ? <span style={{ color: 'red' }}>*</span> : null}
        </div>
      ) : null}
      <MuiToggleButtonGroup size={size} value={value} exclusive onChange={onChange} style={style}>
        {children}
      </MuiToggleButtonGroup>
    </>
  );
}

ToggleButtonGroup.defaultProps = {
  isRequired: false,
  size: 'large',
  label: '',
  style: undefined,
};

export default ToggleButtonGroup;
