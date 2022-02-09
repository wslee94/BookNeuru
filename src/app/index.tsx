import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/routes/web/home';
import PlusMetting from 'app/routes/web/plusMetting';
import SignUp from 'app/routes/web/signUp';
import Login from 'app/routes/web/login';
import RecruitingMetting from './routes/web/recruitingMetting';
import ActivatingMetting from './routes/web/activatingMetting';
import MyProfile from './routes/web/myProfile';
import MettingInfo from './routes/web/mettingInfo';

function MenuRouter() {
  return (
    <Switch>
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/plus-metting" component={PlusMetting} />
      <Route exact path="/recruiting-metting" component={RecruitingMetting} />
      <Route exact path="/activating-metting" component={ActivatingMetting} />
      <Route exact path="/my-profile" component={MyProfile} />
      <Route exact path="/metting-info" component={MettingInfo} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default MenuRouter;
