import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

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
      text: '모임 만들기',
      image: 'fas fa-user-plus',
      link: '/plus-metting',
      selected: false,
    },
    {
      text: '내가 참여한 모임',
      image: 'fas fa-users',
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
  }, [pathname]);

  return (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {menus.map((menu) => {
          return (
            <Link className={classes.menuItem} to={menu.link} key={menu.link}>
              <ListItem button onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <i
                    className={menu.image}
                    style={menu.selected ? { color: '#1976d2', fontSize: '15px' } : { fontSize: '15px' }}
                  />
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
    </>
  );
}

Nav.defaultProps = {
  handleDrawerToggle: undefined,
};

export default Nav;
