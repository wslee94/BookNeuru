import React from 'react';
import { CardContent, CardHeader } from '@material-ui/core/';

interface SubContainerProps {
  title: string;
  children: object;
}

function SubContainer(props: SubContainerProps) {
  const { title, children } = props;

  return (
    <>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </>
  );
}

export default SubContainer;
