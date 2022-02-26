import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

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
  isSearch?: boolean;
  multiLine?: number;
}

function InputBox(props: InputBoxProps) {
  const {
    value,
    onChange,
    isRequired,
    isDisabled,
    isFullWidth,
    isReadOnly,
    isError,
    label,
    placeholder,
    helperText,
    type,
    style,
    unit,
    isSearch,
    multiLine,
  } = props;

  if (isReadOnly) {
    if (unit)
      return (
        <div style={{ display: 'flex', alignItems: 'center', ...style }}>
          {value} <div style={{ marginLeft: '5px' }}>{unit}</div>
        </div>
      );

    return value;
  }

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

      <div style={{ display: 'flex', alignItems: 'center', ...style }}>
        <TextField
          value={value}
          onChange={onChange}
          size="small"
          error={isError}
          disabled={isDisabled}
          fullWidth={isFullWidth}
          type={type}
          variant="outlined"
          InputProps={{
            startAdornment: isSearch ? (
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
              </InputAdornment>
            ) : undefined,
          }}
          placeholder={placeholder}
          helperText={helperText}
          style={style}
          multiline={!!multiLine}
          rows={multiLine}
        />
        {unit && <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{unit}</div>}
      </div>
    </>
  );
}

InputBox.defaultProps = {
  isRequired: false,
  isDisabled: false,
  isFullWidth: true,
  isReadOnly: false,
  isError: false,
  type: 'text',
  label: '',
  placeholder: '',
  helperText: '',
  style: undefined,
  unit: '',
  isSearch: false,
  multiLine: 0,
};

export default InputBox;
