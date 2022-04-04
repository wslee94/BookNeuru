import React, { useCallback, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { debounce } from 'lodash';
import { handleAjaxError } from 'helpers/error';
import { apiCall, getAjaxData } from 'helpers/ajax';

type option = { key: string | number; text: string };

interface AutoComplteBookProps {
  value: any;
  onChange: (obj: any) => void;
  width?: number;
  isReadOnly?: boolean;
}

function AutoCompleteBook(props: AutoComplteBookProps) {
  const { value, width, onChange, isReadOnly } = props;
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  if (isReadOnly) {
    return <div>{value.text}</div>;
  }

  const fetchBooks = useCallback(async (bookTitle: string) => {
    try {
      const res: any = await apiCall({
        url: `/ext/book?bookTitle=${bookTitle}`,
        method: 'get',
      });
      const result = getAjaxData(res);
      console.log('result', result);
    } catch (error) {
      handleAjaxError(error);
    }
  }, []);

  const lazyFetchBooks = useCallback(debounce(fetchBooks, 750), [fetchBooks]);

  return (
    <Autocomplete
      value={value}
      autoHighlight
      options={options}
      getOptionLabel={(option) => option.text}
      getOptionSelected={(option, value) => option.key === value.key}
      onChange={(_e, newValue) => onChange(newValue)}
      inputValue={inputValue}
      onInputChange={(_e, newInputValue) => {
        lazyFetchBooks(newInputValue);
        setInputValue(newInputValue);
      }}
      style={{ width }}
      renderInput={(params) => <TextField {...params} variant="outlined" margin="dense" />}
      noOptionsText="검색결과가 없습니다."
    />
  );
}

export default AutoCompleteBook;

AutoCompleteBook.defaultProps = {
  width: '100%',
  isReadOnly: false,
};
