import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import Card from '@material-ui/core/Card';
import InputBox from 'components/web/InputBox';
import Button from 'components/web/Button';
import CheckBox from 'components/web/CheckBox';
import logo from 'public/img/logo.png';
import { apiCall, getAjaxData } from 'helpers/ajax';
import { setDataInLocalStorage, getDataInLocalStorage, setDataInSessionStorage } from 'helpers/func';
import { handleAjaxError } from 'helpers/error';
import { userState } from 'atoms/userState';
import FindEmail from '../findEmail';
import FindPassword from '../findPassword';

function Login() {
  const [email, setEmail] = useState(getDataInLocalStorage('email') || '');
  const [password, setPassword] = useState('');
  const [isOpenFindEmail, setIsOpenFindEmail] = useState(false);
  const [isOpenFindPassword, setIsOpenFindPassword] = useState(false);
  const [isRemember, setIsRemember] = useState(getDataInLocalStorage('isRemember') === 'true');

  const setUser = useSetRecoilState(userState);

  const history = useHistory();

  const login = async () => {
    try {
      const res = await apiCall({ method: 'post', url: '/user/login', params: { email, password } });
      const userInfo = getAjaxData(res);

      if (res.data.status === 'SUCCESS') {
        setUser(userInfo);
        setDataInLocalStorage('isRemember', isRemember);
        setDataInSessionStorage('isLogined', true);
        if (isRemember) setDataInLocalStorage('email', email);
        else setDataInLocalStorage('email', '');
        history.push('/');
      }
    } catch (error) {
      handleAjaxError(error);
    }
  };

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
                  login();
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
              <div
                tabIndex={0}
                role="button"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  //
                }}
                onKeyDown={() => {
                  // onClick 함수와 동일하게 작성
                }}
              >
                이메일 찾기
              </div>
              <div>&nbsp;|&nbsp;</div>
              <div
                tabIndex={0}
                role="button"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  //
                }}
                onKeyDown={() => {
                  // onClick 함수와 동일하게 작성 web standard
                }}
              >
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
