import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuRouter from 'app';

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: 'flex' },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <MenuRouter />
    </main>
  );
}

export default Main;
