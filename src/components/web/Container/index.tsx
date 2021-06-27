import React from 'react';
import { Typography, Card } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    marginTop: theme.spacing(1),
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
      <Card className={classes.card}>{children}</Card>
    </>
  );
}

export default Container;
