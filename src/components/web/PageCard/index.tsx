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
  actionButtons?: object;
}

function PageCard(props: PageCardProps) {
  const classes = useStyles();

  const { pageTitle, children, tabs, actionButtons } = props;

  return (
    <div style={{ paddingBottom: 15 }}>
      <div>
        <i className="fas fa-book" style={{ fontSize: 22 }}></i>
        <span className={classes.pageTitle}>{pageTitle}</span>
      </div>
      {actionButtons ? (
        <div style={{ marginTop: 15, display: 'flex', justifyContent: 'end' }}>{actionButtons}</div>
      ) : null}
      {tabs ? <div style={{ marginTop: 15 }}>{tabs}</div> : null}
      <Card className={classes.pageCard} style={tabs ? undefined : { marginTop: 15 }}>
        {children}
      </Card>
    </div>
  );
}

export default PageCard;
