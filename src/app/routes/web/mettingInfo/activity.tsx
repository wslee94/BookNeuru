import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { withTheme, withStyles, Theme } from '@material-ui/core/styles';
import PageCard from 'components/web/PageCard';
import ActivityInfo from './activityInfo';
import Comment from 'components/web/Comment';
import userImage from './sample/comment_user.png';

type formMode = 'detail' | 'modify';

interface ActivityProps {
  classes: any;
}

function Activity({ classes }: ActivityProps) {
  const [formMode, setFormMode] = useState<formMode | undefined>('detail');
  const [comments, setComments] = useState([
    {
      authorUrl: '',
      avatarUrl: userImage,
      createdAt: new Date(),
      fullName: '갑돌이',
      text: 'hello whats up',
    },
    {
      authorUrl: '',
      avatarUrl: userImage,
      createdAt: new Date(),
      fullName: '갑순이',
      text: 'react-simple-comments is awesome!',
    },
  ]);

  const addComment = (text: string) => {
    setComments([
      ...comments,
      {
        authorUrl: '',
        avatarUrl: userImage,
        createdAt: new Date(),
        fullName: '홍심이',
        text,
      },
    ]);
  };

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
        <Card className={classes.comment}>{<Comment comments={comments} onSubmit={addComment} />}</Card>
      </div>
    </PageCard>
  );
}

const styles = (theme: Theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridGap: '10px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
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
    padding: 15,
  },
});

export default withStyles(styles)(withTheme(Activity));
