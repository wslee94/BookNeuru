import React, { useCallback, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { debounce } from 'lodash';
import { handleAjaxError } from 'helpers/error';
import { apiCall, getAjaxData } from 'helpers/ajax';

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
  const [isLoading, setIsLoading] = useState(false);

  if (isReadOnly) {
    return <div>{value.text}</div>;
  }

  const lazyFetchBooks = useCallback(
    debounce(async (bookTitle: string) => {
      try {
        const res: any = await apiCall({
          url: `/ext/book?bookTitle=${bookTitle}`,
          method: 'get',
        });
        const result = getAjaxData(res);
        setOptions(result.map((item: any) => ({ ...item, key: item.isbn, text: item.title })) || []);
      } catch (error) {
        handleAjaxError(error);
      } finally {
        setIsLoading(false);
      }
    }, 750),
    [],
  );

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
        setIsLoading(true);
        lazyFetchBooks(newInputValue);
        setInputValue(newInputValue);
      }}
      style={{ width }}
      renderInput={(params) => <TextField {...params} variant="outlined" margin="dense" />}
      noOptionsText={
        isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <CircularProgress size={25} />
          </div>
        ) : (
          '검색결과가 없습니다.'
        )
      }
    />
  );
}

export default AutoCompleteBook;

AutoCompleteBook.defaultProps = {
  width: '100%',
  isReadOnly: false,
};
