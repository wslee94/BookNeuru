import React from 'react';
import { hot } from 'react-hot-loader';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MenuRouter from 'app/index';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: 'flex' },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      marginLeft: drawerWidth,
    },
  },
}));

function Contents() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <MenuRouter />
    </main>
  );
}

export default hot(module)(Contents);
