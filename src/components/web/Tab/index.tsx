import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

interface StyledTabProps {
  label: string;
}

interface TabsProps {
  children: object;
  value: number;
  onChange: (value: number) => void;
}

const TempTabs = withStyles({
  indicator: {
    backgroundColor: '#1890ff',
  },
})(MuiTabs);

export const Tab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: 'bold',
      borderRadius: '10px 10px 0px 0px',
      backgroundColor: theme.palette.background.paper,
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: 'bold',
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <MuiTab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: 'fit-content',
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

export function Tabs(props: TabsProps) {
  const { children, value, onChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TempTabs
        value={value}
        onChange={(_e, value) => {
          onChange(value);
        }}
      >
        {children}
      </TempTabs>
    </div>
  );
}
