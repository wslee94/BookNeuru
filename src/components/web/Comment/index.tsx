import React, { useEffect } from 'react';
import CommentsBlock from 'simple-react-comments';

interface CommentProps {
  comments: {
    avatarUrl: string;
    authorUrl: string;
    fullName: string;
    createdAt: Date;
    text: string;
  }[];
  onSubmit: (arg0: string) => void;
}

function Comment({ comments, onSubmit }: CommentProps) {
  useEffect(() => {
    document.getElementsByClassName('css-u55gqp')[0].removeAttribute('placeholder');
    document.getElementsByClassName('css-oot9fd')[0].innerHTML = '등록';

    const parentForm: any = document.getElementsByClassName('css-oot9fd')[0].parentNode;
    parentForm.style.textAlign = 'right';
  }, []);

  return (
    <div>
      <CommentsBlock comments={comments} isLoggedIn onSubmit={onSubmit} />
    </div>
  );
}

export default Comment;
