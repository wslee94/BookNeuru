import React, { useState } from 'react';
import PageCard from 'components/web/PageCard';
import { withTheme, withStyles, Theme } from '@material-ui/core/styles';

interface ActivityProps {
  classes: any;
}

function Activity({ classes }: ActivityProps) {
  return (
    <PageCard pageTitle="한 작가 깊게 파기">
      <div className={classes.container}>
        <div className={classes.info}>info area</div>
        <div className={classes.chat}>chat area</div>
        <div className={classes.comment}>comment area</div>
      </div>
    </PageCard>
  );
}

const styles = (theme: Theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridTemplateRows: '3fr 1fr',
    gridGap: '10px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '3fr 2fr 1fr',
    },
    minHeight: '800px',
  },
  info: {
    backgroundColor: 'red',
    padding: '10px',
  },
  chat: {
    backgroundColor: 'green',
    padding: '10px',
    gridRow: 'span 2',
    [theme.breakpoints.down('md')]: {
      gridRow: 'span 1',
    },
  },
  comment: {
    backgroundColor: 'blue',
    padding: '10px',
  },
});

export default withStyles(styles)(withTheme(Activity));
