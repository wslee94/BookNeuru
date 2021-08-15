import React from 'react';
import noneContents from 'public/img/none_contents.png';

interface NoContentProps {
  text?: string;
}

function NoContent(props: NoContentProps) {
  const { text } = props;
  return (
    <>
      <img src={noneContents} style={{ height: 100, width: 'auto' }} />
      {text ? <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{text}</div> : null}
    </>
  );
}

export default NoContent;
