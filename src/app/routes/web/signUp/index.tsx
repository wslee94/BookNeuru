import React, { useState, useEffect } from 'react';
import InputBox from 'components/web/InputBox';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isErrPwd, setIsErrPwd] = useState(false);

  useEffect(() => {
    if (checkPassword && password !== checkPassword) setIsErrPwd(true);
    else setIsErrPwd(false);
  }, [password, checkPassword]);

  return (
    <div className="container-center">
      <div className="item">
        <InputBox
          label="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@naver.com"
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
          helperText={isErrPwd ? '비밀번호가 일치하지 않습니다.' : ''}
          isError={isErrPwd}
          isRequired
        />
      </div>
    </div>
  );
}

export default SignUp;
