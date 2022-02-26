import React from 'react';
import noneContents from 'public/img/none_contents.png';

interface NoContentProps {
  text?: string;
}

function NoContent(props: NoContentProps) {
  const { text } = props;
  return (
    <>
      <img alt="no-contents" src={noneContents} style={{ height: 100, width: 'auto' }} />
      {text ? <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{text}</div> : null}
    </>
  );
}

NoContent.defaultProps = {
  text: '',
};

export default NoContent;
