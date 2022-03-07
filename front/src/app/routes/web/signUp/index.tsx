import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiCall } from 'helpers/ajax';
import InputBox from 'components/web/InputBox';
import ToggleButtonGroup from 'components/web/ToggleButtonGroup';
import MuiToggleButton from '@material-ui/lab/ToggleButton';
import Button from 'components/web/Button';
import Card from '@material-ui/core/Card';
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
  const [imageFile, setImageFile] = useState<string | null>(null);

  function cleanState() {
    setEmail('');
    setIsErrEmail(false);
    setPassword('');
    setCheckPassword('');
    setIsErrPwd(false);
    setIsErrPwdCheck(false);
    setName('');
    setGender(null);
    setImageFile(null);
  }

  useEffect(() => {
    return function cleanUp() {
      cleanState();
    };
  }, []);

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

  // !!!  confirm, alert 전용 컴포넌트 만들기  !!!
  const checkValidation = () => {
    if (func.checkBlank(email)) {
      alert('이메일을 입력해 주세요.');
      return false;
    }

    if (func.checkBlank(name)) {
      alert('이름을 입력해 주세요.');
      return false;
    }

    if (func.checkBlank(password)) {
      alert('비밀번호를 입력해 주세요.');
      return false;
    }

    if (func.checkBlank(checkPassword)) {
      alert('비밀번호 확인을 입력해 주세요.');
      return false;
    }

    if (isErrEmail) {
      alert('올바른 이메일 형식으로 입력해 주세요.');
      return false;
    }

    if (isErrPwd) {
      alert('올바른 비밀번호 형식으로 입력해 주세요.');
      return false;
    }

    if (isErrPwdCheck) {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.');
      return false;
    }

    return true;
  };

  const saveUser = async () => {
    try {
      await apiCall({
        url: '/user',
        method: 'post',
        params: {
          email,
          password,
          name,
          gender,
          profileImageURL: imageFile,
        },
      });
      cleanState();
    } catch (error) {
      // !!! 공통 에러 핸들링 함수 작성하기 !!!
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="container-vertical-center">
      <div className="item">
        <div className="container-horizontal-center ">
          <Card style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '22px', marginBottom: '20px', fontWeight: 'bold' }}>회원가입</div>
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
              <InputBox label="사용자명" value={name} onChange={(e) => setName(e.target.value)} isRequired />
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
              <Button
                label="회원가입"
                onClick={() => {
                  if (!checkValidation()) return;
                  // !!! confirm 컴포넌트 개발하기 !!!
                  if (confirm('회원가입하시겠습니까?')) {
                    saveUser();
                  }
                }}
                style={{ width: '100%', height: '45px' }}
              />
            </div>
            <Link to="/login">
              <div style={{ marginTop: '5px', textAlign: 'left', color: '#777777' }}>← 로그인 화면으로 돌아가기</div>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
