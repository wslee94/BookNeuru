import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: 170,
    },
  }),
);

interface DatePickerProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

function DatePicker(props: DatePickerProps) {
  const classes = useStyles();
  const { value, onChange, label } = props;
  return (
    <form className={classes.container} noValidate>
      <TextField
        label={label}
        variant="outlined"
        type="date"
        defaultValue={value}
        className={classes.textField}
        onChange={onChange}
        InputLabelProps={{ shrink: true }}
      />
    </form>
  );
}

export default DatePicker;
