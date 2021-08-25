import React, { useState } from 'react';
import Filed from 'components/web/Filed';
import InputBox from 'components/web/InputBox';

function PlusMetting() {
  const [title, setTitle] = useState('');

  return (
    <>
      <Filed title="모임명">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Filed>
    </>
  );
}

export default PlusMetting;
