import React, { useState, useEffect } from 'react';
import InputBox from 'components/web/InputBox';
import Button from 'components/web/Button';
import FindEmail from '../findEmail';
import FindPassword from '../findPassword';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpenFindEmail, setIsOpenFindEmail] = useState(false);
  const [isOpenFindPassword, setIsOpenFindPassword] = useState(false);

  return (
    <div className="container-vertical-center">
      <div className="item">
        <div className="container-horizontal-center ">
          <h1>로그인</h1>
          <div className="item-small-padding">
            <InputBox value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
          </div>
          <div className="item-small-padding">
            <InputBox
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </div>
          <div className="item-small-padding">
            <Button label="로그인" onClick={() => {}} style={{ width: '100%' }} />
          </div>
          <div className="item-small-padding">
            <Button
              label="카카오톡으로 로그인(임시)"
              onClick={() => {}}
              style={{ width: '100%', background: '#F7E317', color: '#000000' }}
            />
          </div>
          <div className="item-small-padding" style={{ display: 'flex', justifyContent: 'flex-end', color: '#7b7b7b' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => setIsOpenFindEmail(true)}>
              이메일 찾기
            </div>
            <div>&nbsp;/&nbsp;</div>
            <div style={{ cursor: 'pointer' }} onClick={() => setIsOpenFindPassword(true)}>
              비밀번호 찾기
            </div>
          </div>
        </div>
      </div>
      <FindEmail isOpen={isOpenFindEmail} handleClose={() => setIsOpenFindEmail(false)} />
      <FindPassword isOpen={isOpenFindPassword} handleClose={() => setIsOpenFindPassword(false)} />
    </div>
  );
}

export default Login;
