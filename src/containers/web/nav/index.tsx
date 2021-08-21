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
    '& i': {
      fontSize: '18px',
    },
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
      text: '모집중인 모임',
      image: 'fas fa-battery-quarter',
      link: '/recruiting-metting',
      selected: false,
    },
    {
      text: '활동중인 모임',
      image: 'fas fa-battery-full',
      link: '/activating-metting',
      selected: false,
    },
    {
      text: '모임 만들기',
      image: 'fas fa-user-plus',
      link: '/plus-metting',
      selected: false,
    },
    {
      text: '나의모임',
      image: 'fas fa-user-friends',
      link: '/my-metting',
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
  }, [pathname]);

  return (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {menus.map((menu, index) => {
          return (
            <Link className={classes.menuItem} to={menu.link} key={index}>
              <ListItem button onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <i className={menu.image} style={menu.selected ? { color: '#1976d2' } : undefined}></i>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span style={menu.selected ? { color: '#1976d2', fontWeight: 'bold' } : undefined}>
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
    </>
  );
}

export default Nav;
