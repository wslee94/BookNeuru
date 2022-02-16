import React, { useState, useEffect } from 'react';
import Popup from 'components/web/Popup';
import Button from 'components/web/Button';
import InputBox from 'components/web/InputBox';
import * as func from 'helpers/func';

interface FindEmailProps {
  isOpen: boolean;
  handleClose: () => void;
}

function FindEmail(props: FindEmailProps) {
  const { isOpen, handleClose } = props;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isErrPhone, setIsErrPhone] = useState(false);

  function cleanState() {
    setName('');
    setPhoneNumber('');
  }

  useEffect(() => {
    if (!isOpen) cleanState();
  }, [isOpen]);

  useEffect(() => {
    if (phoneNumber && !func.checkPhoneNumber(phoneNumber)) setIsErrPhone(true);
    else setIsErrPhone(false);
  }, [phoneNumber]);

  return (
    <Popup
      isOpen={isOpen}
      handleClose={handleClose}
      title="이메일 찾기"
      actionButton={
        <>
          <Button
            label="전화번호로 이메일 전송"
            isDisabled={!name || !phoneNumber || isErrPhone}
            onClick={() => {
              //
            }}
          />
          <Button label="취소" onClick={handleClose} />
        </>
      }
      contentText="가입 시 입력한 이름과 전화번호를 입력해주세요."
    >
      <>
        <div style={{ marginBottom: '10px' }}>
          <InputBox label="이름" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <InputBox
            label="전화번호"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="010-1234-5678"
            helperText={isErrPhone ? '잘못된 핸드폰번호 형식입니다.' : ''}
            isError={isErrPhone}
          />
        </div>
      </>
    </Popup>
  );
}

export default FindEmail;
