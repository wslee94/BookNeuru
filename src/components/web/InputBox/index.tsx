import React from 'react';
import TextField from '@material-ui/core/TextField';

interface InputBoxProps {
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isReadOnly?: boolean;
  isError?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  style?: object;
  unit?: string;
}

function InputBox(props: InputBoxProps) {
  const {
    value,
    onChange,
    isRequired = false,
    isDisabled = false,
    isFullWidth = true,
    isReadOnly = false,
    isError = false,
    label,
    placeholder,
    helperText,
    type = 'text',
    style,
    unit,
  } = props;
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

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          value={value}
          onChange={onChange}
          size="small"
          error={isError}
          disabled={isDisabled}
          fullWidth={isFullWidth}
          type={type}
          // variant="filled"
          variant="outlined"
          InputProps={{
            readOnly: isReadOnly,
          }}
          placeholder={placeholder}
          helperText={helperText}
          style={style}
        />
        {unit && <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{unit}</div>}
      </div>
    </>
  );
}

export default InputBox;
