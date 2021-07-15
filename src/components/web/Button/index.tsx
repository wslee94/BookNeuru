import React from 'react';
import MuiButton from '@material-ui/core/Button';

interface ButtonProps {
  onClick: () => void;
  label: string;
  isDisabled?: boolean;
  type?: 'general' | 'warning';
  size?: 'large' | 'medium' | 'small';
  style?: object;
}

function Button(props: ButtonProps) {
  const { onClick, isDisabled = false, label, type = 'general', size = 'medium', style } = props;

  let color: 'primary' | 'secondary' | 'inherit' | 'default' | undefined = 'primary';
  switch (type) {
    case 'general': {
      color = 'primary';
      break;
    }
    case 'warning': {
      color = 'secondary';
      break;
    }
  }

  return (
    <MuiButton onClick={onClick} disabled={isDisabled} size={size} color={color} style={style} variant="contained">
      {label}
    </MuiButton>
  );
}

export default Button;
