import React, { useState, useEffect } from 'react';
import Popup from 'components/web/Popup';
import Button from 'components/web/Button';
import InputBox from 'components/web/InputBox';
import * as func from 'helpers/func';

interface FindPasswordProps {
  isOpen: boolean;
  handleClose: () => void;
}

function FindPassword(props: FindPasswordProps) {
  const { isOpen, handleClose } = props;
  const [email, setEmail] = useState('');
  const [isErrEmail, setIsErrEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isErrPhone, setIsErrPhone] = useState(false);

  function cleanState() {
    setEmail('');
    setPhoneNumber('');
  }

  useEffect(() => {
    if (!isOpen) cleanState();
  }, [isOpen]);

  useEffect(() => {
    if (email && !func.checkEmail(email)) setIsErrEmail(true);
    else setIsErrEmail(false);
  }, [email]);

  useEffect(() => {
    if (phoneNumber && !func.checkPhoneNumber(phoneNumber)) setIsErrPhone(true);
    else setIsErrPhone(false);
  }, [phoneNumber]);

  return (
    <Popup
      isOpen={isOpen}
      handleClose={handleClose}
      title="비밀번호 찾기"
      actionButton={
        <>
          <Button
            label="전화번호로 임시비밀번호 전송"
            isDisabled={!email || !phoneNumber || isErrEmail || isErrPhone}
            onClick={() => {}}
          />
          <Button label="취소" onClick={handleClose} />
        </>
      }
      contentText="가입 시 입력한 이메일과 전화번호를 입력해주세요."
    >
      <>
        <div style={{ marginBottom: '10px' }}>
          <InputBox
            label="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@naver.com"
            helperText={isErrEmail ? '잘못된 이메일 형식입니다.' : ''}
            isError={isErrEmail}
          />
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

export default FindPassword;
