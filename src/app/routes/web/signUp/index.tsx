import React, { useState, useEffect } from 'react';
import InputBox from 'components/web/InputBox';
import ToggleButtonGroup from 'components/web/ToggleButtonGroup';
import MuiToggleButton from '@material-ui/lab/ToggleButton';
import Button from 'components/web/Button';
import OneLineWrapper from 'components/web/OneLineWrapper';
import ImageFile from 'components/web/ImageFile';
import customeTheme from 'config/theme';
import * as func from 'helpers/func';

function SignUp() {
  const [email, setEmail] = useState('');
  const [isErrEmail, setIsErrEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isErrPwd, setIsErrPwd] = useState(false);
  const [isErrPwdCheck, setIsErrPwdCheck] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isErrPhone, setIsErrPhone] = useState(false);
  const [isCheckingPhoneNumber, setIsCheckingPhoneNumber] = useState(false);
  const [verificationNumber, setVerificationNumber] = useState('');
  const [imageFile, setImageFile] = useState<string | null>(null);

  useEffect(() => {
    if (email && !func.checkEmail(email)) setIsErrEmail(true);
    else setIsErrEmail(false);
  }, [email]);

  useEffect(() => {
    if (password && !func.checkPassword(password)) setIsErrPwd(true);
    else setIsErrPwd(false);

    if (checkPassword && password !== checkPassword) setIsErrPwdCheck(true);
    else setIsErrPwdCheck(false);
  }, [password, checkPassword]);

  useEffect(() => {
    if (phoneNumber && !func.checkPhoneNumber(phoneNumber)) setIsErrPhone(true);
    else setIsErrPhone(false);
  }, [phoneNumber]);

  return (
    <div className="container-center">
      <h1>회원가입</h1>
      <div className="item">
        <InputBox
          label="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@naver.com"
          helperText={isErrEmail ? '잘못된 이메일 형식입니다.' : ''}
          isError={isErrEmail}
          isRequired
        />
      </div>
      <div className="item">
        <InputBox
          type="password"
          label="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText="비밀번호는 8~16자, 영문, 숫자, 특수문자를 포함해야 합니다. "
          isError={isErrPwd}
          isRequired
        />
      </div>
      <div className="item">
        <InputBox
          type="password"
          label="비밀번호 확인"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
          helperText={isErrPwdCheck ? '비밀번호가 일치하지 않습니다.' : ''}
          isError={isErrPwdCheck}
          isRequired
        />
      </div>
      <div className="item">
        <InputBox label="이름" value={name} onChange={(e) => setName(e.target.value)} isRequired />
      </div>
      <div className="item">
        <ToggleButtonGroup
          value={gender}
          onChange={(e, v) => setGender(v)}
          label="성별"
          size="small"
          style={{ width: '100%', height: 40 }}
        >
          <MuiToggleButton
            style={
              gender === 'M'
                ? { width: '50%', backgroundColor: customeTheme.main, color: customeTheme.font }
                : { width: '50%' }
            }
            value="M"
          >
            남성
          </MuiToggleButton>
          <MuiToggleButton
            style={
              gender === 'F'
                ? { width: '50%', backgroundColor: customeTheme.main, color: customeTheme.font }
                : { width: '50%' }
            }
            value="F"
          >
            여성
          </MuiToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="item">
        <OneLineWrapper label="핸드폰 번호" isRequired>
          <InputBox
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="010-1234-5678"
            isRequired
            helperText={isErrPhone ? '잘못된 핸드폰번호 형식입니다.' : ''}
            isError={isErrPhone}
            style={{ width: '50%' }}
          />
          <Button
            label="인증번호 받기"
            onClick={() => {
              setIsCheckingPhoneNumber(true);
            }}
            isDisabled={!phoneNumber || isErrPhone}
            style={{ width: '50%', height: '40px' }}
          />
        </OneLineWrapper>
      </div>
      {isCheckingPhoneNumber ? (
        <div className="item">
          <OneLineWrapper label="인증번호 입력" isRequired>
            <InputBox
              value={verificationNumber}
              onChange={(e) => setVerificationNumber(e.target.value)}
              isRequired
              style={{ width: '50%' }}
            />
            <Button
              label="확인"
              onClick={() => {
                setIsCheckingPhoneNumber(true);
              }}
              style={{ width: '50%' }}
            />
          </OneLineWrapper>
        </div>
      ) : null}
      <div className="item">
        <ImageFile
          label="프로필 사진"
          alt="프로필 사진"
          size="large"
          file={imageFile}
          onChange={(file) => setImageFile(file)}
          align="center"
        />
      </div>
      <div className="item">
        <Button label="회원가입" onClick={() => {}} style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default SignUp;
