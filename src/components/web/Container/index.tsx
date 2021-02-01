import React from 'react';
import { Typography } from '@material-ui/core/';

interface ContainerProps {
  pageTitle: string;
  children: object;
}

function Container(props: ContainerProps) {
  const { pageTitle, children } = props;

  return (
    <>
      <Typography align-="left" variant="h4">
        <i style={{ marginRight: '10px' }} className="fas fa-dumbbell"></i>
        {pageTitle}
      </Typography>
      {children}
    </>
  );
}

export default Container;
