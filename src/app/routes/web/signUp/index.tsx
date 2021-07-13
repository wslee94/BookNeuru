import React, { useState, useEffect } from 'react';
import InputBox from 'components/web/InputBox';
import ToggleButtonGroup from 'components/web/ToggleButtonGroup';
import MuiToggleButton from '@material-ui/lab/ToggleButton';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isErrPwd, setIsErrPwd] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState<string | null>(null);

  useEffect(() => {
    if (checkPassword && password !== checkPassword) setIsErrPwd(true);
    else setIsErrPwd(false);
  }, [password, checkPassword]);

  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

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
      <div className="item">
        <InputBox label="이름" value={name} onChange={(e) => setName(e.target.value)} isRequired />
      </div>
      <div className="item">
        <ToggleButtonGroup
          value={gender}
          onChange={(e, v) => setGender(v)}
          label="성별"
          isRequired
          size="small"
          style={{ width: '100%', height: 40 }}
        >
          <MuiToggleButton style={{ width: '50%' }} value="M">
            남성
          </MuiToggleButton>
          <MuiToggleButton style={{ width: '50%' }} value="F">
            여성
          </MuiToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default SignUp;
