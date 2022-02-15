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
    document
      .getElementsByClassName('css-u55gqp')[0]
      .setAttribute('placeholder', '입력 후 엔터(Enter) 키를 눌러주세요.');
    const button = document.getElementsByClassName('css-oot9fd')[0];
    button.innerHTML = '등록';

    const parentForm: any = document.getElementsByClassName('css-oot9fd')[0].parentNode;
    parentForm.removeChild(button);
    // parentForm.style.textAlign = 'right';
  }, []);

  return (
    <div>
      <h2>댓글</h2>
      <CommentsBlock comments={comments} isLoggedIn onSubmit={onSubmit} />
    </div>
  );
}

export default Comment;
