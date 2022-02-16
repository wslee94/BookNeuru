import React from 'react';

interface EllipsisProps {
  text: string;
  line: number;
  width: number;
  style?: object;
}

function Ellipsis(props: EllipsisProps) {
  const { text, line, style, width } = props;

  if (line === 1) {
    return (
      <span
        style={{
          ...style,
          display: 'inline-block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width,
        }}
      >
        {text}
      </span>
    );
  }
  return (
    <span
      style={{
        ...style,
        display: '-webkit-box',
        wordWrap: 'break-word',
        WebkitLineClamp: line,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {text}
    </span>
  );
}

export default Ellipsis;
