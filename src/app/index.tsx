import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/routes/web/home';
import PlusMetting from 'app/routes/web/plusMetting';
import MyMetting from 'app/routes/web/myMetting';
import SignUp from 'app/routes/web/signUp';
import Login from 'app/routes/web/login';

function MenuRouter() {
  return (
    <Switch>
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/plus-metting" component={PlusMetting} />
      <Route path="/my-metting" component={MyMetting} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default MenuRouter;
