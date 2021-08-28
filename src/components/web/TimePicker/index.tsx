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

interface TimePickerProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

function TimePicker(props: TimePickerProps) {
  const classes = useStyles();
  const { value, onChange, label } = props;
  return (
    <form className={classes.container} noValidate>
      <TextField
        label={label}
        margin="dense"
        variant="outlined"
        type="time"
        defaultValue={value}
        className={classes.textField}
        onChange={onChange}
        InputLabelProps={{ shrink: true }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}

export default TimePicker;
