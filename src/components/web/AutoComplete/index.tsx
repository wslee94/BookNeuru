import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

interface AutoComplteProps {
  value: any;
  onChange: (obj: any) => void;
  options: { key: string | number; text: string }[];
  width?: number;
  multiple?: boolean;
}

function AutoComplete(props: AutoComplteProps) {
  const { value, width, options, onChange, multiple } = props;
  const [inputValue, setInputValue] = React.useState('');

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
