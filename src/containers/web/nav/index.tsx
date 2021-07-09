import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  const { handleDrawerToggle } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          {
            text: '모임 만들기',
            image: 'fas fa-user-plus',
            link: '/plus-metting',
          },
          {
            text: '나의모임',
            image: 'fas fa-user-friends',
            link: '/my-metting',
          },
        ].map((menu, index) => (
          <ListItem button key={index} onClick={handleDrawerToggle}>
            <Link className={classes.menuItem} to={menu.link}>
              <ListItemIcon>
                <i className={menu.image}></i>
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
}

export default Nav;
