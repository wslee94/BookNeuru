import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import Button from 'components/web/Button';
import { apiCall, getAjaxData } from 'helpers/ajax';
import { handleAjaxError } from 'helpers/error';
import { meetingInfoTypes } from './types';

interface InvitationProps {
  closeDialog: () => void;
  meetingInfo: meetingInfoTypes | null;
}

function Invitation({ closeDialog, meetingInfo }: InvitationProps) {
  const [email, setEmail] = useState('');

  const invite = async () => {
    try {
      const res: any = await apiCall({
        url: `/meeting/${meetingInfo?.meetingID}/invitation`,
        method: 'post',
        params: {
          email,
        },
      });
      getAjaxData(res);
      if (res.data.status === 'SUCCESS') {
        closeDialog();
      }
    } catch (error) {
      handleAjaxError(error);
    }
  };

  return (
    <>
      <div>
        <Field title="이메일" isRequired>
          <InputBox value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button size="large" label="초대" onClick={invite} style={{ margin: '5px' }} />
        <Button type="inverted" size="large" label="닫기" onClick={() => closeDialog()} style={{ margin: '5px' }} />
      </div>
    </>
  );
}

export default Invitation;
