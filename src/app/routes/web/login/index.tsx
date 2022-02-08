import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Card from '@material-ui/core/Card';
import InputBox from 'components/web/InputBox';
import Button from 'components/web/Button';
import CheckBox from 'components/web/CheckBox';
import logo from 'public/img/logo.png';
import FindEmail from '../findEmail';
import FindPassword from '../findPassword';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpenFindEmail, setIsOpenFindEmail] = useState(false);
  const [isOpenFindPassword, setIsOpenFindPassword] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const history = useHistory();

  return (
    <div className="container-vertical-center">
      <div className="item">
        <div className="container-horizontal-center ">
          <img style={{ marginBottom: '30px' }} src={logo} alt="로고" />
          <Card style={{ padding: '30px' }}>
            <div style={{ fontSize: '22px', marginBottom: '20px', fontWeight: 'bold' }}>로그인</div>
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
            <CheckBox
              label={<span style={{ color: '#777777' }}>로그인 상태 유지</span>}
              value={isRemember}
              onChange={setIsRemember}
            />
            <div className="item-small-padding">
              <Button
                label="로그인"
                onClick={() => {
                  history.push('/home');
                }}
                style={{ width: '100%', height: '45px' }}
              />
            </div>
            <div
              className="item-small-padding"
              style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', color: '#777777' }}
            >
              <Link to="/sign-up">
                <div style={{ cursor: 'pointer' }}>회원가입</div>
              </Link>
              <div>&nbsp;|&nbsp;</div>
              <div style={{ cursor: 'pointer' }} onClick={() => {}}>
                이메일 찾기
              </div>
              <div>&nbsp;|&nbsp;</div>
              <div style={{ cursor: 'pointer' }} onClick={() => {}}>
                비밀번호 찾기
              </div>
            </div>
          </Card>
        </div>
      </div>
      <FindEmail isOpen={isOpenFindEmail} handleClose={() => setIsOpenFindEmail(false)} />
      <FindPassword isOpen={isOpenFindPassword} handleClose={() => setIsOpenFindPassword(false)} />
    </div>
  );
}

export default Login;
