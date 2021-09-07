import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pageCard: {
    marginTop: 15,
    padding: 15,
  },
  pageTitle: {
    marginLeft: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

interface PageCardProps {
  pageTitle: string;
  children: object;
}

function PageCard(props: PageCardProps) {
  const classes = useStyles();

  const { pageTitle, children } = props;

  return (
    <>
      <div>
        <i className="fas fa-book" style={{ fontSize: 22 }}></i>
        <span className={classes.pageTitle}>{pageTitle}</span>
      </div>
      <Card className={classes.pageCard}>{children}</Card>
    </>
  );
}

export default PageCard;
