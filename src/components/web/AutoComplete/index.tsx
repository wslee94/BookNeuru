import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

type option = { key: string | number; text: string };

interface AutoComplteProps {
  value: any;
  onChange: (obj: any) => void;
  options: option[];
  width?: number;
  multiple?: boolean;
  isReadOnly?: boolean;
}

function AutoComplete(props: AutoComplteProps) {
  const { value, width, options, onChange, multiple, isReadOnly } = props;
  const [inputValue, setInputValue] = React.useState('');

  if (isReadOnly && multiple) {
    return <div>{value.map((n: option) => n.text).join(',')}</div>;
  }

  if (isReadOnly) {
    return <div>{value.text}</div>;
  }

  return (
    <Autocomplete
      value={value}
      autoHighlight
      multiple={multiple}
      options={options}
      getOptionLabel={(option) => option.text}
      getOptionSelected={(option, value) => option.key === value.key}
      onChange={(_e, newValue) => onChange(newValue)}
      inputValue={inputValue}
      onInputChange={(_e, newInputValue) => setInputValue(newInputValue)}
      style={{ width: width || '100%' }}
      renderInput={(params) => <TextField {...params} variant="outlined" margin="dense" />}
      noOptionsText="검색결과가 없습니다."
    />
  );
}

export default AutoComplete;
