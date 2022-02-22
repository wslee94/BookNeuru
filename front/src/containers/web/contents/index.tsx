import React from 'react';
import { hot } from 'react-hot-loader';
import { useLocation } from 'react-router-dom';
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
  login: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Contents() {
  const location = useLocation();
  const isContentPage = location.pathname !== '/login' && location.pathname !== '/sign-up';

  const classes = useStyles();
  return (
    <main className={isContentPage ? classes.content : classes.login}>
      <MenuRouter />
    </main>
  );
}

export default hot(module)(Contents);
