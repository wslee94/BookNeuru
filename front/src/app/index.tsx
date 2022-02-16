import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/routes/web/home';
import MettingCreate from 'app/routes/web/mettingCreate';
import SignUp from 'app/routes/web/signUp';
import Login from 'app/routes/web/login';
import MyProfile from './routes/web/myProfile';
import MettingInfo from './routes/web/mettingInfo';
import Activity from './routes/web/mettingInfo/activity';

function MenuRouter() {
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
