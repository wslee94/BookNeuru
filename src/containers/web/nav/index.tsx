import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type NavProps = {
  handleDrawerToggle?: () => void;
};

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  menuItem: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function Nav(props: NavProps) {
  const { pathname } = useLocation();
  const { handleDrawerToggle } = props;
  const [menus, setMenus] = useState([
    {
      text: '홈',
      image: 'fas fa-home',
      link: '/',
      selected: false,
    },
    {
      text: '모집 중인 모임',
      image: 'fas fa-lock-open',
      link: '/recruiting-metting',
      selected: false,
    },
    {
      text: '활동 중인 모임',
      image: 'fas fa-lock',
      link: '/activating-metting',
      selected: false,
    },
    {
      text: '모임 만들기',
      image: 'fas fa-user-plus',
      link: '/plus-metting',
      selected: false,
    },
  ]);
  const [myMenus, setMyMenus] = useState([
    {
      text: '홈',
      image: 'fas fa-home',
      link: '/my-home',
      selected: false,
    },
    {
      text: '모집 중인 모임',
      image: 'fas fa-lock-open',
      link: '/my-recruiting-metting',
      selected: false,
    },
    {
      text: '활동 중인 모임',
      image: 'fas fa-lock',
      link: '/my-activating-metting',
      selected: false,
    },
  ]);

  const classes = useStyles();

  useEffect(() => {
    setMenus(
      menus.map((n) => {
        if (n.link === pathname) return { ...n, selected: true };
        return { ...n, selected: false };
      }),
    );
    setMyMenus(
      myMenus.map((n) => {
        if (n.link === pathname) return { ...n, selected: true };
        return { ...n, selected: false };
      }),
    );
  }, [pathname]);

  return (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <div style={{ padding: '8px 16px', fontWeight: 'bold' }}>Menu</div>
        {menus.map((menu, index) => {
          return (
            <Link className={classes.menuItem} to={menu.link} key={index}>
              <ListItem button onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <i
                    className={menu.image}
                    style={menu.selected ? { color: '#1976d2', fontSize: '15px' } : { fontSize: '15px' }}
                  ></i>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span
                      style={
                        menu.selected
                          ? { color: '#1976d2', fontWeight: 'bold', fontSize: '15px' }
                          : { fontSize: '15px' }
                      }
                    >
                      {menu.text}
                    </span>
                  }
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List>
        <div style={{ padding: '8px 16px', fontWeight: 'bold' }}>My Menu</div>
        {myMenus.map((menu, index) => {
          return (
            <Link className={classes.menuItem} to={menu.link} key={index}>
              <ListItem button onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <i
                    className={menu.image}
                    style={menu.selected ? { color: '#1976d2', fontSize: '15px' } : { fontSize: '15px' }}
                  ></i>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span
                        style={
                          menu.selected
                            ? { color: '#1976d2', fontWeight: 'bold', fontSize: '10px', marginRight: '3px' }
                            : { fontSize: '10px', marginRight: '3px' }
                        }
                      >
                        My
                      </span>
                      <span
                        style={
                          menu.selected
                            ? { color: '#1976d2', fontWeight: 'bold', fontSize: '15px' }
                            : { fontSize: '15px' }
                        }
                      >
                        {menu.text}
                      </span>
                    </div>
                  }
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
    </>
  );
}

export default Nav;
