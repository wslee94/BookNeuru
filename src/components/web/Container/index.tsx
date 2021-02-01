import React from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  pageContents: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

interface ContainerProps {
  pageTitle: string;
  children: object;
}

function Container(props: ContainerProps) {
  const classes = useStyles();
  const { pageTitle, children } = props;
  return (
    <>
      <Typography align="left" variant="h5">
        <i style={{ marginRight: '10px' }} className="fas fa-dumbbell"></i>
        {pageTitle}
      </Typography>
      <div className={classes.pageContents}>{children}</div>
    </>
  );
}

export default Container;
