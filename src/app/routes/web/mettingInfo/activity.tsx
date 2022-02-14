import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { withTheme, withStyles, Theme } from '@material-ui/core/styles';
import PageCard from 'components/web/PageCard';
import ActivityInfo from './activityInfo';

type formMode = 'detail' | 'modify';

interface ActivityProps {
  classes: any;
}

function Activity({ classes }: ActivityProps) {
  const [formMode, setFormMode] = useState<formMode | undefined>('detail');

  return (
    <PageCard pageTitle="한 작가 깊게 파기" isNoCard>
      <div className={classes.container}>
        <Card className={classes.info}>
          <ActivityInfo
            dialogMode={false}
            formMode={formMode}
            setFormMode={(formMode: formMode) => setFormMode(formMode)}
          />
        </Card>
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
    padding: 15,
  },
  chat: {
    backgroundColor: 'green',
    padding: 15,
    gridRow: 'span 2',
    [theme.breakpoints.down('md')]: {
      gridRow: 'span 1',
    },
  },
  comment: {
    backgroundColor: 'blue',
    padding: 15,
  },
});

export default withStyles(styles)(withTheme(Activity));
