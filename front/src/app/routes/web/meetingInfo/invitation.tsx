import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import Button from 'components/web/Button';
import Alert from 'components/web/Alert';
import * as func from 'helpers/func';
import { apiCall, getAjaxData } from 'helpers/ajax';
import { handleAjaxError } from 'helpers/error';
import { meetingInfoTypes } from './types';

interface InvitationProps {
  closeDialog: () => void;
  meetingInfo: meetingInfoTypes | null;
}

function Invitation({ closeDialog, meetingInfo }: InvitationProps) {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ isOpen: false, title: '', text: '' });

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

  const checkValidation = () => {
    if (func.checkBlank(email)) {
      setAlert({ isOpen: true, title: '필수 값을 입력해 주세요.', text: '이메일을 입력해 주세요.' });
      return false;
    }

    if (!func.checkEmail(email)) {
      setAlert({ isOpen: true, title: '입력한 데이터를 확인해 주세요', text: '올바른 이메일 형식으로 입력해 주세요.' });
      return false;
    }

    return true;
  };

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
            if (!checkValidation()) return;
            invite();
          }}
          style={{ margin: '5px' }}
        />
        <Button type="inverted" size="large" label="닫기" onClick={() => closeDialog()} style={{ margin: '5px' }} />
      </div>
      <Alert
        isOpen={alert.isOpen}
        handleClose={() => setAlert({ ...alert, isOpen: false })}
        title={alert.title}
        text={alert.text}
      />
    </>
  );
}

export default Invitation;
