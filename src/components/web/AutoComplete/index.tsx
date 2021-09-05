import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

interface AutoComplteProps {
  onChange: (obj: { key: string | number; text: string } | null) => void;
  options: { key: string | number; text: string }[];
  width?: number;
}

function AutoComplete(props: AutoComplteProps) {
  const { width, options, onChange } = props;
  return (
    <Autocomplete
      autoHighlight
      options={options}
      getOptionLabel={(option) => option.text}
      onChange={(_e, v) => onChange(v)}
      style={{ width: width || '100%' }}
      renderInput={(params) => <TextField {...params} variant="outlined" margin="dense" />}
      noOptionsText="검색결과가 없습니다."
    />
  );
}

export default AutoComplete;
