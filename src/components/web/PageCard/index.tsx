import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pageCard: {
    padding: 15,
  },

  noPageCard: {
    margin: '10px 0px',
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
  isNoCard?: boolean;
}

function PageCard(props: PageCardProps) {
  const classes = useStyles();

  const { pageTitle, children, tabs, actionButtons, isNoCard } = props;

  return (
    <div style={{ paddingBottom: 15 }}>
      <div>
        <i className="fas fa-book" style={{ fontSize: 22 }}></i>
        <span className={classes.pageTitle}>{pageTitle}</span>
      </div>
      {actionButtons ? <div style={{ marginTop: 15 }}>{actionButtons}</div> : null}
      {tabs ? <div style={{ marginTop: 15 }}>{tabs}</div> : null}
      {isNoCard ? (
        <div className={classes.noPageCard}>{children}</div>
      ) : (
        <Card className={classes.pageCard} style={tabs ? undefined : { marginTop: 15 }}>
          {children}
        </Card>
      )}
    </div>
  );
}

export default PageCard;
