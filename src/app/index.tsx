import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/routes/home';
import MyDashboard from 'app/routes/myDashboard';
import MyDiary from 'app/routes/myDiary';
import MyRoutine from 'app/routes/myRoutine';

function MenuRouter() {
  return (
    <Switch>
      <Route path="/dashboard">
        <MyDashboard />
      </Route>
      <Route path="/diary">
        <MyDiary />
      </Route>
      <Route path="/routine">
        <MyRoutine />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default MenuRouter;
