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
            text: '나의 운동 현황',
            image: 'far fa-chart-bar fa-fw',
            link: '/dashboard',
          },
          {
            text: '나의 운동 일지',
            image: 'far fa-calendar-check fa-fw',
            link: '/diary',
          },
          {
            text: '나의 운동 루틴',
            image: 'fas fa-dumbbell fa-fw',
            link: '/routine',
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
      <List>
        {[
          {
            text: '운동 종목 관리',
            image: 'fas fa-tasks fa-fw',
            link: '/',
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
    </>
  );
}

export default Nav;
