import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import Home from 'app/routes/web/home';
import { apiCall, getAjaxData } from 'helpers/ajax';
import MettingCreate from 'app/routes/web/mettingCreate';
import SignUp from 'app/routes/web/signUp';
import Login from 'app/routes/web/login';
import { getDataInLocalStorage, getDataInSessionStorage, setDataInSessionStorage } from 'helpers/func';
import { handleAjaxError } from 'helpers/error';
import { userState } from 'atoms/userState';
import MyProfile from './routes/web/myProfile';
import MettingInfo from './routes/web/mettingInfo';
import Activity from './routes/web/mettingInfo/activity';

function MenuRouter() {
  const history = useHistory();
  const setUser = useSetRecoilState(userState);

  const loginWithToken = async () => {
    try {
      const res = await apiCall({ method: 'post', url: '/user/login-token' });
      const userInfo = getAjaxData(res);
      setUser(userInfo);
      setDataInSessionStorage('isLogined', true);
      history.push('/');
    } catch (error) {
      handleAjaxError(error);
      setDataInSessionStorage('isLogined', false);
      history.push('/login');
    }
  };

  useEffect(() => {
    const isRemember = getDataInLocalStorage('isRemember') === 'true';
    const isLogined = getDataInSessionStorage('isLogined') === 'true';
    if (isRemember || isLogined) {
      loginWithToken();
    } else {
      history.push('/login');
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/plus-metting" component={MettingCreate} />
      <Route exact path="/my-profile" component={MyProfile} />
      <Route exact path="/metting-info" component={MettingInfo} />
      <Route exact path="/metting-info/activity" component={Activity} />
      <Route exact path="/activity" component={Activity} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default MenuRouter;
