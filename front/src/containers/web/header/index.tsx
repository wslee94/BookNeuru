import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AppBar, CssBaseline, Drawer, Hidden, IconButton, Toolbar, useMediaQuery } from '@material-ui/core';
import { apiCall } from 'helpers/ajax';
import { setDataInSessionStorage, setDataInLocalStorage } from 'helpers/func';
import { Menu as MenuIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { userState } from 'atoms/userState';
import { useRecoilValue } from 'recoil';
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

  const location = useLocation();
  const history = useHistory();
  const user = useRecoilValue<any>(userState);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  if (location.pathname === '/login' || location.pathname === '/sign-up') {
    return null;
  }

  const logout = async () => {
    try {
      /* 
        DB 토큰 삭제 및 쿠키 삭제, 만약 user에 정보가 존재하지 않으면 finally 구문으로 로그아웃 수행
        finally 구문 만으로도 로그아웃 가능, 다시 로그인 시 DB 토큰, 쿠키 덮어쓰게 되어있음
      */
      if (user && user.userID) await apiCall({ method: 'post', url: '/user/logout', params: { userID: user.userID } });
    } catch (error) {
      //
    } finally {
      setDataInLocalStorage('isRemember', false);
      setDataInLocalStorage('email', '');
      setDataInSessionStorage('isLogined', false);
      history.push('/login');
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.customToolbar}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>

          <div className={classes.headerContents}>
            <Link to="/home">
              <img className="header-logo" src={logo} alt="로고" />
            </Link>
            <div>
              <IconButton
                onClick={() => {
                  //
                }}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  logout();
                }}
                color="inherit"
              >
                <ExitToAppIcon />
              </IconButton>
            </div>
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

ResponsiveDrawer.defaultProps = {
  window: undefined,
};
