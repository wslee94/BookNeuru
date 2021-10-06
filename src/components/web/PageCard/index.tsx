import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pageCard: {
    padding: 15,
  },
  pageTitle: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

interface PageCardProps {
  pageTitle: string;
  children: object;
  tabs?: object;
}

function PageCard(props: PageCardProps) {
  const classes = useStyles();

  const { pageTitle, children, tabs } = props;

  return (
    <>
      <div>
        <i className="fas fa-book" style={{ fontSize: 22 }}></i>
        <span className={classes.pageTitle}>{pageTitle}</span>
      </div>
      {tabs ? <div style={{ marginTop: 15 }}>{tabs}</div> : null}
      <Card className={classes.pageCard} style={tabs ? undefined : { marginTop: 15 }}>
        {children}
      </Card>
    </>
  );
}

export default PageCard;
