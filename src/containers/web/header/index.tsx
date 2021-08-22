import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Button,
  Tooltip,
  useMediaQuery,
} from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle as AccountCircleIcon, Help as HelpIcon } from '@material-ui/icons';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import logo from 'public/img/logo.png';
import Nav from '../nav';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { display: 'flex' },
    drawer: {
      [theme.breakpoints.up('lg')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    headerContents: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    customToolbar: {
      minHeight: '64px',
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  }),
);

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.customToolbar}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>

          <div className={classes.headerContents}>
            <div>
              <img className="header-logo" src={logo} alt="로고" />
            </div>
            {auth ? (
              <div>
                <Tooltip title="나의 정보">
                  <IconButton onClick={() => {}} color="inherit">
                    <AccountCircleIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="메뉴얼">
                  <IconButton onClick={() => {}} color="inherit">
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
                <Button color="inherit">로그아웃</Button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <Button color="inherit">로그인</Button>
                </Link>
                <Link to="/sign-up">
                  <Button color="inherit">회원가입</Button>
                </Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
            style={isUpLg ? { display: 'none' } : {}}
          >
            <Nav handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <Nav />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
