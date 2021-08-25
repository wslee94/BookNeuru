import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filed: {
      display: 'grid',
      gridTemplateColumns: '1fr 10fr',
      gridGap: '10px',
      [theme.breakpoints.down('xl')]: {
        gridTemplateColumns: '1fr 9fr',
      },
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '1fr 7fr',
      },
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr 5fr',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr 4fr',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        gridGap: '5px',
      },
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '15px',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        fontSize: '13px',
      },
    },
  }),
);

interface FiledProps {
  title: string;
  children: object;
}

function Filed(props: FiledProps) {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.filed}>
        <div className={classes.text}>{title}</div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Filed;
