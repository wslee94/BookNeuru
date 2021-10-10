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
  isReadOnly?: boolean;
}

function DatePicker(props: DatePickerProps) {
  const classes = useStyles();
  const { value, onChange, label, isReadOnly = false } = props;

  if (isReadOnly) return <>{value}</>;

  return (
    <form className={classes.container} noValidate>
      <TextField
        label={label}
        variant="outlined"
        type="date"
        size="small"
        defaultValue={value}
        className={classes.textField}
        onChange={onChange}
        InputLabelProps={{ shrink: true }}
      />
    </form>
  );
}

export default DatePicker;
