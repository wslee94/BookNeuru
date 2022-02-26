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
  isReadOnly?: boolean;
}

function TimePicker(props: TimePickerProps) {
  const classes = useStyles();
  const { value, onChange, label, isReadOnly = false } = props;

  if (isReadOnly) {
    const hour = Number(value.split(':')[0]);
    const minute = value.split(':')[1];

    if (hour < 12) return <>{`오전 ${value}`} </>;
    if (hour === 12) return <>{`오후 ${value}`} </>;
    return <>{`오후 ${hour - 12 < 10 ? `0${hour - 12}` : hour - 12}:${minute}`} </>;
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        label={label}
        size="small"
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

TimePicker.defaultProps = {
  label: '',
  isReadOnly: false,
};

export default TimePicker;
