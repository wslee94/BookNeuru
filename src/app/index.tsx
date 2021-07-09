import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/routes/web/home';
import PlusMetting from 'app/routes/web/plusMetting';
import MyMetting from 'app/routes/web/myMetting';

function MenuRouter() {
  return (
    <Switch>
      <Route path="/plus-metting">
        <PlusMetting />
      </Route>
      <Route path="/my-metting">
        <MyMetting />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default MenuRouter;
