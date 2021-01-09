import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    padding: '10px 0px',
    width: '85px',
    height: 'auto',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <a href="#">
            <img className={classes.logo} src="public/image/logo/Health_Record_Text.png" alt="logo" />
          </a>

          <Typography variant="h6" className={classes.title}></Typography>
          {auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <div>
              <Button color="inherit">Login</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
