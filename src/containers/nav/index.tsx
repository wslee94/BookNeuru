import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

function Nav() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          {
            text: '나의 운동 현황',
            image: 'far fa-chart-bar',
          },
          {
            text: '나의 운동 일지',
            image: 'far fa-calendar-check',
          },
          {
            text: '나의 운동 루틴',
            image: 'fas fa-dumbbell',
          },
        ].map((menu, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <i style={{ fontSize: '16px' }} className={menu.image}></i>
            </ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}

export default Nav;
