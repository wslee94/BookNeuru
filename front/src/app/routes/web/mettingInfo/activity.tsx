import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { withTheme, withStyles, Theme } from '@material-ui/core/styles';
import PageCard from 'components/web/PageCard';
import ActivityInfo from './activityInfo';
import Comment from 'components/web/Comment';
import ChatWidget from 'components/web/ChatWidget';
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
    <>
      <PageCard pageTitle="한 작가 깊게 파기">
        <ActivityInfo
          dialogMode={false}
          formMode={formMode}
          setFormMode={(formMode: formMode) => setFormMode(formMode)}
        />
      </PageCard>
      <Card className={classes.comment}>
        <Comment comments={comments} onSubmit={addComment} />
      </Card>
      <ChatWidget title="한 작가 깊게 파기" subTitle="혁명의 팡파르 독서 토론" profileAvatar={userImage} chatId="1" />
    </>
  );
}

const styles = (theme: Theme) => ({
  info: {
    padding: 15,
  },
  chat: {
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
