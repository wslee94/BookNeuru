import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import Button from 'components/web/Button';

interface InvitationProps {
  closeDialog: () => void;
}

function Invitation({ closeDialog }: InvitationProps) {
  const [email, setEmail] = useState('');

  return (
    <>
      <div>
        <Field title="이메일" isRequired>
          <InputBox value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          size="large"
          label="초대"
          onClick={() => {
            //
          }}
          style={{ margin: '5px' }}
        />
        <Button type="inverted" size="large" label="닫기" onClick={() => closeDialog()} style={{ margin: '5px' }} />
      </div>
    </>
  );
}

export default Invitation;
