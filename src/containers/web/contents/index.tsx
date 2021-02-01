import React from 'react';
import { hot } from 'react-hot-loader';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MenuRouter from 'app/index';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: 'flex' },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      marginLeft: drawerWidth,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

function Contents() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <MenuRouter />
    </main>
  );
}

export default hot(module)(Contents);
