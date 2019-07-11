import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Registration from '../registration';

import Login from '../login';
import Profile from '../profile';
import UserManagment from '../userManagment';
import resetPassword from '../resetPassword';

export default () => (
  <section>
    <Switch>
      <Route path={'/register'} component={Registration} />
      <Route path={'/login'} component={Login} />
      <Route path={'/profile'} component={Profile} />
      <Route path={'/userManagment'} component={UserManagment} />
      <Route path={'/resetPassword'} component={resetPassword} />
      <Redirect to={'/register'} />
    </Switch>
  </section>
);
